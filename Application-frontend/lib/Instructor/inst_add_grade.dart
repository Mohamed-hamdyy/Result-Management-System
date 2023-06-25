import 'package:flutter/material.dart';
import 'package:rms_app/models/ip.dart';
import 'package:rms_app/models/course_model.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';
import '../Dialogs/dialogs.dart';
import 'inst_quiz_no.dart';
import 'inst_exam_no.dart';



class InstAddGrade extends StatefulWidget {
  const InstAddGrade({super.key, required this.title});


  final String title;
  


  @override
  State<InstAddGrade> createState() => _InstAddGrade();
}

class _InstAddGrade extends State<InstAddGrade> {

String? _courseValue;
bool show=false;

List<String> itemsList=["Operating System","DataBase II","Sofware Engineering"];

Future<List<Course>> courseFuture=getCourses();



static Future<List<Course>> getCourses() async {
  String a=IP().address;
var url ='http://$a:7000/getCoursesListApp';
final response =await http.post(Uri.parse(url));
final body= json.decode(response.body);
return body.map<Course>(Course.fromJson).toList();

} 







 void _selectScreen(BuildContext ctx,int n ){
 
 Navigator.of(ctx).pushReplacement(
MaterialPageRoute(builder: (_){
  if (n==1) return InstQuizNo(title: "Instructor", courseVal:_courseValue!);
   return  InstExamNo(title: 'Instructor', courseVal:_courseValue!);

}
)

 );

 }
 Dialogs dialogs=Dialogs();


  @override
  Widget build(BuildContext context) {
   
    return Scaffold(
      appBar: AppBar(
       
        backgroundColor: Colors.teal,
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

              Icon(Icons.arrow_circle_right,size: 30,color: Colors.teal,),
              Text('Add Grade to Course: ',
               style:TextStyle(fontSize: 25,fontWeight: FontWeight.bold,
               color:Colors.teal,decoration: TextDecoration.underline)
              
              )

            ],
          ),
          const SizedBox(height: 20,),
         Container(
         width:400,
         height:450,
         color:Colors.blueGrey,
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
                 color: Colors.tealAccent
               ),
                child:  DropdownButton(
                value: _courseValue,
                items: courses.map((course) => DropdownMenuItem<String>(
                  value:course.code,
                  child:  Text("[${course.name}]",
                  style: const TextStyle(
                    fontSize: 20,color:Colors.teal),
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
         
    
          const SizedBox(height: 50,),
          Row(
          children:[
            const SizedBox(width:100),
          OutlinedButton(onPressed: (){
            if(_courseValue==null){
                dialogs.informationI(context,"Invalid Input","please add the required inputs correctly !");
                }
                else {
            _selectScreen(context, 1);
                  
                }
          },
          
          style: ButtonStyle(backgroundColor: MaterialStateProperty.all(Colors.tealAccent)),
           child:const Text('Quiz',style: TextStyle(color:Colors.teal),)
           ),
  const SizedBox(width:50),
           OutlinedButton(onPressed: (){
               if(_courseValue==null){
                dialogs.informationI(context,"Invalid Input","please add the required inputs correctly !");
                }
                else {
            _selectScreen(context, 2);
                  
                }
           },
          style: ButtonStyle(backgroundColor: MaterialStateProperty.all(Colors.tealAccent)),
           child:const Text('Exam',style: TextStyle(color:Colors.teal),)
           ),

          ]
          ),
           const  SizedBox(height: 20),
          
        

         ],)


         ),
          Container(
         width:390,
         height:200,
         decoration: const BoxDecoration(
                gradient: LinearGradient(
                  begin: Alignment.topLeft,
                  end:Alignment.bottomRight,
                  colors:[ Colors.tealAccent,Colors.cyanAccent],
                  
                ),
              ),
         margin: const EdgeInsets.fromLTRB(0,20,0, 0),
          child:const Column(children: [
                         SizedBox(height: 10,),
             Icon(Icons.broadcast_on_home_outlined,size: 55,color: Colors.teal,),
             Text('Add Results Easily',
                 style:TextStyle(color: Colors.teal,fontSize: 40,fontWeight: FontWeight.bold)),
           
          ],)
         )


        ]),
      
        ),

    );
  }
}