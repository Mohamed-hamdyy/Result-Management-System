import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:rms_app/Instructor/inst_exam.dart';
import 'package:rms_app/models/ip.dart';
import 'package:http/http.dart' as http;
import 'package:rms_app/models/coursequiz_model.dart';

import '../Dialogs/dialogs.dart';

class InstExamNo extends StatefulWidget {
  const InstExamNo({super.key, required this.title,required this.courseVal});


  final String title;
  final String courseVal;
  


  @override
  State<InstExamNo> createState() => _InstExamNo();
}

class _InstExamNo extends State<InstExamNo> {

bool show=false;
final _totalController=TextEditingController();
int? id=0;
List<String> a =[];
 
Future<CourseQ>? courseFuture;




 Future<CourseQ> getCourse() async {
String a=IP().address;
var url ='http://$a:7000/getCourseQuizApp';
final body = {
'courseCode':widget.courseVal,

};
final response =await http.post(
  Uri.parse(url),
  body: jsonEncode(body),
  headers: <String,String>{
  'Content-Type':'application/json; charset=UTF-8',

  },
);
final json=jsonDecode(response.body);
var C= CourseQ.fromJson(json);
return C;
}


 void _selectScreen(BuildContext ctx){
 
  Navigator.of(ctx).pushReplacement(
 MaterialPageRoute(builder: (_){
  return InstExam(title: 'Instructor', courseVal:widget.courseVal,
   examTotal:_totalController.text);
 }
 )

  );

  }

Dialogs dialogs=Dialogs(); 


  @override
  Widget build(BuildContext context) {

   setState(() {
     courseFuture=getCourse();
   });

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
              Text( 'Add Total to the Exam:',
               style:TextStyle(fontSize: 25,fontWeight: FontWeight.bold,
               color:Colors.teal,decoration: TextDecoration.underline)
              
              )

            ],
          ),
          const SizedBox(height: 20,),
                 FutureBuilder<CourseQ>(
                future: courseFuture,
                builder: (context,snapshot){
                if(snapshot.connectionState==ConnectionState.waiting){
                  return const CircularProgressIndicator();
                    
                }
                else if(snapshot.hasError){
                return Text('Error ${snapshot.error}');
                    
                }
                else {
                  final course=snapshot.data!;
                 return  Container(
         width:400,
         height:600,
         color:Colors.blueGrey,
         child: Column(children: [
          const SizedBox(height: 20,),

          Row(children:[
           const  SizedBox(width:5),
             const Text('Course Name:',style: TextStyle(
           fontSize: 18,
           fontWeight: FontWeight.bold,
           color: Colors.white,
          )
          ),
          const SizedBox(width:10),
             Text(course.name,style: const TextStyle(
           fontSize: 20,
           fontWeight: FontWeight.bold,
           color: Colors.tealAccent,
          )
          ),
         ]),
           const SizedBox(height: 15,),
             Row(children:[
            const SizedBox(width:5),
             const Text('Course code:',style: TextStyle(
           fontSize: 18,
           fontWeight: FontWeight.bold,
           color: Colors.white,
          )
          ),
          const SizedBox(width:10),
             Text('[${course.code}]',style: const TextStyle(
           fontSize: 20,
           fontWeight: FontWeight.bold,
           color: Colors.tealAccent,
          )
          ),
 

         ]),
         const SizedBox(height:15),
            Row(children:[
           const  SizedBox(width:5),
             const Text('Course hours:',style: TextStyle(
           fontSize: 18,
           fontWeight: FontWeight.bold,
           color: Colors.white,
          )
          ),
          const SizedBox(width:10),
             Text(course.hours,style: const TextStyle(
           fontSize: 20,
           fontWeight: FontWeight.bold,
           color: Colors.tealAccent,
          )
          ),
 

         ]),
             const SizedBox(height:15),
             const Row(children:[
            SizedBox(width:100),
             Text('Course Distribution:',style: TextStyle(
           fontSize: 18,
           fontWeight: FontWeight.bold,
           color: Colors.white,
           decoration: TextDecoration.underline
          )
          ),
         
 

         ]),
      const SizedBox(height:15),
             Row(children:[
           const  SizedBox(width:5),
           const  Text('Quiz Weight:',style: TextStyle(
           fontSize: 18,
           fontWeight: FontWeight.bold,
           color: Colors.white,
          )
          ),
          const SizedBox(width:10),
             Text(course.quizW==null?'-':course.quizW!,style: const TextStyle(
           fontSize: 20,
           fontWeight: FontWeight.bold,
           color: Colors.tealAccent,
          )
          ),
 

         ]),
               const SizedBox(height:15),
              Row(children:[
            const SizedBox(width:5),
             const Text('Exam Weight:',style: TextStyle(
           fontSize: 18,
           fontWeight: FontWeight.bold,
           color: Colors.white,
          )
          ),
         const SizedBox(width:10),
             Text(course.examW==null?'-':course.examW!,style: const TextStyle(
           fontSize: 20,
           fontWeight: FontWeight.bold,
           color: Colors.tealAccent,
          )
          ),
 

         ]),
               const SizedBox(height:15),
              Row(children:[
            const SizedBox(width:5),
             const Text('Assignment Weight:',style: TextStyle(
           fontSize: 18,
           fontWeight: FontWeight.bold,
           color: Colors.white,
          )
          ),
          const SizedBox(width:10),
             Text(course.assignW==null?'-':course.assignW!,style: const TextStyle(
           fontSize: 20,
           fontWeight: FontWeight.bold,
           color: Colors.tealAccent,
          )
          ),
 

         ]),
                 const SizedBox(height:20),
             Row(children:[
            const SizedBox(width:5),
             const Text('Exam Total:',style: TextStyle(
           fontSize: 18,
           fontWeight: FontWeight.bold,
           color: Colors.white,
          )
          ),
          const SizedBox(width:15),
         SizedBox(
            width: 130,
           child: Flexible(
            child:TextField(
              decoration: const InputDecoration(
                enabledBorder: OutlineInputBorder(
                  borderSide: BorderSide(color: Colors.grey)
                ),
                hintText: "....",
                hintStyle: TextStyle(color: Colors.teal),

                prefixIcon: Icon(Icons.grading_outlined,color: Colors.teal,),
                filled: true,
                fillColor: Colors.tealAccent
                ),
             controller:_totalController,
             style: const  TextStyle(fontSize: 20, color:Colors.teal),
             keyboardType: TextInputType.number,
            
            )
          )
          )
 

         ]),
      
          const SizedBox(height: 50,),
          Row(
          children:[
            const SizedBox(width:120),
          OutlinedButton(onPressed: (){
            if(_totalController.text=="") {
    dialogs.informationI(context,"Invalid Input","please add the exam total grade!");

                  }
             else {
             _selectScreen(context);
             }
          
            
            },
          style: ButtonStyle(backgroundColor: MaterialStateProperty.all(Colors.tealAccent)),
           child:const Text('Add Grades',style: TextStyle(color:Colors.teal),)
           ),

          ]
          ),
           const  SizedBox(height: 20),
          
        

         ],)


         );

                }
                }
                
                
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