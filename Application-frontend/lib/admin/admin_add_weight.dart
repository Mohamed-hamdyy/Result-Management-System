import 'package:flutter/material.dart';
import 'package:rms_app/Dialogs/dialogs.dart';
import 'dart:convert';

import 'package:rms_app/models/ip.dart';
import 'package:rms_app/models/course_model.dart';
import 'package:rms_app/models/response.dart';
import 'package:http/http.dart' as http;


class AdminAddWeight extends StatefulWidget {
  const AdminAddWeight({super.key, required this.title});


  final String title;
  


  @override
  State<AdminAddWeight> createState() => _AdminAddWeight();
}

class _AdminAddWeight extends State<AdminAddWeight> {

String? _courseValue;
final _quizController=TextEditingController();
final _examController=TextEditingController();
final _assignController=TextEditingController();

bool show=false;

Future<List<Course>> courseFuture=getCourses();



static Future<List<Course>> getCourses() async {

  String a=IP().address;
var url ='http://$a:7000/getCoursesListApp';
final response =await http.post(Uri.parse(url));
final body= json.decode(response.body);
return body.map<Course>(Course.fromJson).toList();

} 

_handleAdd() async {
 
String a=IP().address;
var url ='http://$a:7000/addWeightApp';
final body = {
'courseCode':_courseValue,
'quizWeight':_quizController.text,
'examWeight':_examController.text,
'assignWeight':_assignController.text,

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
_quizController.clear();
_examController.clear();
_assignController.clear();

}

setState(() {
_courseValue=null;
});


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
              Text('Add Course Distribution:(%) ',
               style:TextStyle(fontSize: 25,fontWeight: FontWeight.bold,
               color:Colors.green,decoration: TextDecoration.underline)
              
              )

            ],
          ),
          const SizedBox(height: 20,),
         Container(
         width:400,
         height:550,
 decoration: const BoxDecoration(
                gradient: LinearGradient(
                  begin: Alignment.bottomLeft,
                  end:Alignment.topRight,
                  colors: [Colors.lightGreenAccent,Colors.greenAccent],
                  
                ),
              ),
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
          const SizedBox(height: 25,),
           Row(
           children: [
           const  SizedBox(width:10),
           const SizedBox(
            width:150,
             child: Text('Quizes Weight:',style: TextStyle(
             fontSize: 20,
             fontWeight: FontWeight.bold,
             color: Colors.white,
                     )
                     ),
           ),
          const SizedBox(width:25),
            SizedBox(
            width: 90,
            child: Flexible(
            child:TextField(
              decoration: const InputDecoration(
                enabledBorder: OutlineInputBorder(
                  borderSide: BorderSide(color: Colors.grey)
                ),
                hintText: "...",
                prefixIcon: Icon(Icons.percent,color: Colors.green,),
                filled: true,
                fillColor: Colors.lightGreenAccent
                ),
             controller: _quizController,
             style: const TextStyle(fontSize: 20, color:Colors.green),
             keyboardType: TextInputType.number,
            
            )
          )
          )
           ],
          ),
        const SizedBox(height: 25,),
           Row(
           children: [
           const  SizedBox(width:10),
            const SizedBox(
              width:150,
              child: Text('Exams Weight:',style: TextStyle(
                       fontSize: 20,
                       fontWeight: FontWeight.bold,
                       color: Colors.white,
                      )
                      ),
            ),
          const SizedBox(width:25),
            SizedBox(
            width: 90,
            child: Flexible(
            child:TextField(
              decoration: const InputDecoration(
                enabledBorder: OutlineInputBorder(
                  borderSide: BorderSide(color: Colors.grey)
                ),
                hintText: "...",
                prefixIcon: Icon(Icons.percent,color: Colors.green,),
                filled: true,
                fillColor: Colors.lightGreenAccent
                ),
             controller:_examController,
             style: const TextStyle(fontSize: 20, color:Colors.green),
             keyboardType: TextInputType.number,
            
            )
          )
          )
           ],
          ),
        const SizedBox(height: 25,),
           Row(
           children: [
           const  SizedBox(width:10),
            const SizedBox(
              width: 150,
              child: Text('Assignment Weight:',style: TextStyle(
                       fontSize: 20,
                       fontWeight: FontWeight.bold,
                       color: Colors.white,
                      )
                      ),
            ),
          const SizedBox(width:25),
            SizedBox(
            width: 90,
            child: Flexible(
            child:TextField(
              decoration: const InputDecoration(
                enabledBorder: OutlineInputBorder(
                  borderSide: BorderSide(color: Colors.grey)
                ),
                hintText: "...",
                prefixIcon: Icon(Icons.percent,color: Colors.green,),
                filled: true,
                fillColor: Colors.lightGreenAccent
                ),
             controller:_assignController,
             style: const TextStyle(fontSize: 20, color:Colors.green),
             keyboardType: TextInputType.number,
            
            )
          )
          )
           ],
          ),

          const SizedBox(height: 20,),
          OutlinedButton(onPressed: ()async {
             if(_courseValue==null ||_quizController.text=="" || _examController.text=="" || 
_assignController.text=="" || (int.parse(_quizController.text)+
int.parse(_examController.text)+int.parse(_assignController.text))!=100    ){
                dialogs.informationA(context,"Invalid Input","please add the course name and the weight percentages correctly!");
                }
                else {
                  await _handleAdd();
                // ignore: use_build_context_synchronously
                dialogs.confirmationA(context,
                'Confirmation',
                'Course Weights updated Successfully!',1);
              
                }
          },
              style: ButtonStyle(backgroundColor: MaterialStateProperty.all(Colors.orangeAccent)),
               child:const Text('Add',style: TextStyle(color:Colors.white),)
               ),
              
            


         ],)


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
    drawerScrimColor: Colors.teal,
  
   
    
    );
  }
}