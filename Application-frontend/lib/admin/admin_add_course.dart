
import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:rms_app/models/ip.dart';
import 'package:rms_app/models/course_model.dart';
import 'package:rms_app/models/student_model.dart';
import 'package:rms_app/models/response.dart';
import 'package:http/http.dart' as http;
import 'package:rms_app/Dialogs/dialogs.dart';




class AdminAddCourse extends StatefulWidget {
  const AdminAddCourse({super.key, required this.title});


  final String title;
  


  @override
  State<AdminAddCourse> createState() => _AdminAddCourse();
}

class _AdminAddCourse extends State<AdminAddCourse> {

String? _courseValue;
String? _studentValue;
bool show=false;
bool add=false;

 

Future<List<Course>> courseFuture=getCourses();
Future<List<Student>> studentFuture=getStudents();



static Future<List<Course>> getCourses() async {
  String a=IP().address;
var url ='http://$a:7000/getCoursesListApp';
final response =await http.post(Uri.parse(url));
final body= json.decode(response.body);
return body.map<Course>(Course.fromJson).toList();

} 


static Future<List<Student>> getStudents() async {
  String a=IP().address;
var url ='http://$a:7000/getStudentsListApp';
final response =await http.post(Uri.parse(url));
final body= json.decode(response.body);
return body.map<Student>(Student.fromJson).toList();

} 

_handleAdd() async {

String a=IP().address;
var url ='http://$a:7000/addCourse';
final body = {
'userName':_studentValue,
'courseCode':_courseValue,

};
final response =await http.post(
  Uri.parse(url),
  body: jsonEncode(body),
  headers: <String,String>{
  'Content-Type':'application/json; charset=UTF-8',

  },
);
final json=jsonDecode(response.body);
var res = Response.fromJson(json); 
if (res.done){
setState(() {
  add=true;
});
}




}


Dialogs dialogs=Dialogs();




 


  @override
  Widget build(BuildContext context) {
   
    return Scaffold(
      appBar: AppBar(
       
        backgroundColor: Colors.green,
        shadowColor: Colors.teal,
        elevation: 5,
        title: Text(widget.title),
     
      ),
      body:   SingleChildScrollView(
        child: Column(
          children: [

           const SizedBox(height:20),
          const Row(
            children: [

              Icon(Icons.arrow_circle_right,size: 30,color: Colors.green,),
              Text('Add Course to Student: ',
               style:TextStyle(fontSize: 25,fontWeight: FontWeight.bold,
               color:Colors.green,decoration: TextDecoration.underline)
              
              )

            ],
          ),
          const SizedBox(height: 20,),
        
            Container(
           width:400,
           height:450,
 decoration: const BoxDecoration(
                gradient: LinearGradient(
                  begin: Alignment.bottomLeft,
                  end:Alignment.topRight,
                  colors: [Colors.lightGreenAccent,Colors.greenAccent],
                  
                ),
              ),
           child: 
           SingleChildScrollView(
             child: Column(children: [
              const SizedBox(height: 20,),
              const Text('Select Course Name:',style: TextStyle(
               fontSize: 20,
               fontWeight: FontWeight.bold,
               color: Colors.white,
              )
              ),
              const SizedBox(height: 20,),
              
                    
              FutureBuilder<List<Course>>(
                future: courseFuture,
                builder: (context,snapshot){
                if(snapshot.connectionState==ConnectionState.waiting){
                  return const CircularProgressIndicator();
                    
                }
                else if(snapshot.hasError){
                return Text('Error ${snapshot.error}');
                    
                }
                else {
                  final courses=snapshot.data!;
                 return    Container(
               padding: const EdgeInsets.all(8),
               decoration: const BoxDecoration(
                 color: Colors.lightGreenAccent
               ),
                child:  DropdownButton(
                value: _courseValue,
                items: courses.map((course) => DropdownMenuItem<String>(
                  value:course.code,
                  child:  Text("[${course.name}]",
                  style: const TextStyle(
                    fontSize: 20,color:Colors.green),
                    )
                  )).toList(),
                   
                 onChanged: (value)=>setState(() =>
                   _courseValue=value,
                 )
                 )
                 );
                }
                }
                
                
                ),
                
                 const SizedBox(height: 20,),
                   const Text('Select Student Name:',style: TextStyle(
               fontSize: 20,
               fontWeight: FontWeight.bold,
               color: Colors.white,
              )
              ),
              const SizedBox(height: 20,),
                    
           FutureBuilder<List<Student>>(
                future: studentFuture,
                builder: (context,snapshot){
                if(snapshot.connectionState==ConnectionState.waiting){
                  return const CircularProgressIndicator();
                    
                }
                else if(snapshot.hasError){
                return Text('Error ${snapshot.error}');
                    
                }
                else {
                  final students=snapshot.data!;
                 return    Container(
               padding: const EdgeInsets.all(8),
               decoration: const BoxDecoration(
                 color: Colors.lightGreenAccent
               ),
                child:  DropdownButton(
                value: _studentValue,
                items: students.map((student) => DropdownMenuItem<String>(
                  value:student.name,
                  child:  Text("[${student.name}]",
                  style: const TextStyle(
                    fontSize: 20,color:Colors.green),
                    )
                  )).toList(),
                   
                 onChanged: (value)=>setState(() =>
                   _studentValue=value,
                 )
                 )
                 );
                }
                }
                
                
                ),
              const SizedBox(height: 20,),
              OutlinedButton(onPressed: ()async {
                if(_courseValue==null||_studentValue==null){
                dialogs.informationA(context,"Invalid Input","please add course name and the student username correctly!");
                }
                else {
                  await _handleAdd();
                // ignore: use_build_context_synchronously
                dialogs.confirmationA(context,
                add?'Confirmation':'Alert',
                add?'Course successfully added to Student.'
                :'Student already registered to the course.',
                add?1:2     );
                setState(() {
                  add=false;
           
                });
                }
                },
              style: ButtonStyle(backgroundColor: MaterialStateProperty.all(Colors.orangeAccent)),
               child:const Text('Add',style: TextStyle(color:Colors.white),)
               ),
               const  SizedBox(height: 20),
              
             
                    
             ],),
           )
         
         
           ),
         
          Container(
         width:390,
         height:200,
           decoration: const BoxDecoration(
                gradient: LinearGradient(
                  begin: Alignment.topLeft,
                  end:Alignment.bottomRight,
                  colors: [Colors.lightGreen,Colors.limeAccent],
                  
                ),
              ),
         margin: const EdgeInsets.fromLTRB(0,20,0, 0),
          child:const Column(children: [
             SizedBox(height: 10,),
             Icon(Icons.broadcast_on_home_outlined,size: 55,color: Colors.white,),
             Text('Swift Management',
                 style:TextStyle(color: Colors.white,fontSize: 40,fontWeight: FontWeight.bold)),
           
          ],)
         )

        ]),
      
        ),
  
    );
  }
}