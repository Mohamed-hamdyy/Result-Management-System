// ignore_for_file: file_names

import 'package:flutter/material.dart';
import 'package:rms_app/Dialogs/dialogs.dart';
import 'package:rms_app/models/ip.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';
import 'package:rms_app/models/reg_course.dart';


class StudentHome extends StatefulWidget {
  const StudentHome({super.key, required this.title,required this.userName,
  required this.email,required this.role});


  final String title;
  final String userName;
  final String email;
  final String role;



  @override
  State<StudentHome> createState() => _StudentHomeState();
}

class _StudentHomeState extends State<StudentHome> {


Future<List<RegCourse>>? courseFuture;

Future<List<RegCourse>> getCourses() async {
String a=IP().address;
var url ='http://$a:7000/getCourses';
final body = {
'userName':widget.userName,

};
final response =await http.post(
  Uri.parse(url),
  body: jsonEncode(body),
  headers: <String,String>{
  'Content-Type':'application/json; charset=UTF-8',

  },
);
final json=jsonDecode(response.body);
return json.map<RegCourse>(RegCourse.fromJson).toList();

} 

Dialogs dialogs=Dialogs();

   @override
  Widget build(BuildContext context) {
   setState(() {
     courseFuture=getCourses();
   });

    return Scaffold(
      appBar: AppBar(
       
        shadowColor: Colors.teal,
        elevation: 5,
        title: Text(widget.title),

      ),
      body:   SingleChildScrollView(
        child: SizedBox(
          width:400,
          child: Column(
            children: [
        
             const SizedBox(height:20),
            const Row(
              mainAxisAlignment:MainAxisAlignment.center,
              children: [
        
                Icon(Icons.arrow_circle_right,size: 30,color: Colors.blueAccent,),
                Text('Current Courses:',
                 style:TextStyle(fontSize: 25,fontWeight: FontWeight.bold,
                 color:Colors.blueAccent,decoration: TextDecoration.underline)
                
                )
        
              ],
            ),
            const SizedBox(height:20),
             




              FutureBuilder<List<RegCourse>>(
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
            return  SingleChildScrollView(
              child: ListView.separated(
                   physics: const NeverScrollableScrollPhysics(),
                   shrinkWrap: true,           
                separatorBuilder: (context, index) => 
                       const SizedBox(height:10),
                 itemCount: courses.length,
                 itemBuilder:(context,index){
               
                   
                     return  Container(    
 decoration:  BoxDecoration(
                gradient: const LinearGradient(
                  begin: Alignment.topLeft,
                  end:Alignment.bottomRight,
                  colors:[Colors.lightBlueAccent,Colors.lightBlueAccent],
                  
                ),
                border: Border.all(width: 2,
                color: Colors.indigoAccent
                ),
                borderRadius: BorderRadius.circular(20),
              ),

            
              margin:  const EdgeInsets.fromLTRB(20, 15, 20, 15),
              child:Column(
                children: [
                   const SizedBox(height: 20,),
                  Row(          
                children: [
              const SizedBox(width:5),

              const Icon(Icons.golf_course_outlined,size: 20,color: Colors.blueAccent,),
                const SizedBox(width:5),
              const Text('Course Code:',
               style:TextStyle(fontSize: 20,fontWeight: FontWeight.bold,
               color:Colors.blueAccent,decoration: TextDecoration.underline)
              
              ),
               const SizedBox(width: 15,),
               Text('[${courses[index].code}]',
               style:const TextStyle(fontSize: 16,fontWeight: FontWeight.bold,
               color:Colors.white,)
              
              )   




                ], 
                ),
                const SizedBox(height:15),
                    Row(          
                children: [
              const SizedBox(width:5),
              const Icon(Icons.announcement_outlined,size: 20,color: Colors.blueAccent,),
              const SizedBox(width:5),

              const Text('Name:',
               style:TextStyle(fontSize: 20,fontWeight: FontWeight.bold,
               color:Colors.blueAccent,decoration: TextDecoration.underline)
              
              ),
               const SizedBox(width: 15,),
               Text(courses[index].name,
               style:const TextStyle(fontSize: 16,fontWeight: FontWeight.bold,
               color:Colors.white,)
              
              )   




                ], 
                ),
                       const  SizedBox(height:15),
                    Row(          
                children: [
              const SizedBox(width:5),

              const Icon(Icons.access_time_filled_outlined,size: 20,color: Colors.blueAccent,),
              const SizedBox(width:5),

              const Text('credit hours:',
               style:TextStyle(fontSize: 20,fontWeight: FontWeight.bold,
               color:Colors.blueAccent,decoration: TextDecoration.underline)
              
              ),
               const SizedBox(width: 15,),
               Text(courses[index].hours,
               style:const TextStyle(fontSize: 16,fontWeight: FontWeight.bold,
               color:Colors.white,)
              
              )   




                ], 
                ),
                  const  SizedBox(height:20),
                   Row(          
                children: [
             const SizedBox(width:5),

               const Icon(Icons.article_outlined,size: 20,color: Colors.blueAccent,),
               
               const SizedBox(width:5),
               const Text('Quizes:',
               style:TextStyle(fontSize: 20,fontWeight: FontWeight.bold,
               color:Colors.blueAccent,decoration: TextDecoration.underline)
              
              ),
              const SizedBox(width: 45,),

              Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [ 
        
                   Text('Quiz 1: ${courses[index].quizes[0]} /${courses[index].total[0]}',
               style:const TextStyle(fontSize: 16,fontWeight: FontWeight.bold,
               color:Colors.white,)
              
              ),  
               const SizedBox(height:10),
                   Text('Quiz 2: ${courses[index].quizes[1]}/${courses[index].total[1]}',
               style:const TextStyle(fontSize: 16,fontWeight: FontWeight.bold,
               color:Colors.white,)
              
              ), 
                           const SizedBox(height:10),

                   (courses[index].quizes.length>2)? 
                   Text('Quiz 3: ${courses[index].quizes[2]}/${courses[index].total[2]}',
               style:const TextStyle(fontSize: 16,fontWeight: FontWeight.bold,
               color:Colors.white,)
              ):const Text(''),
                  const SizedBox(height:10),

                   (courses[index].quizes.length>3)? 
                   Text('Quiz 4: ${courses[index].quizes[3]}/${courses[index].total[3]}',
               style:const TextStyle(fontSize: 16,fontWeight: FontWeight.bold,
               color:Colors.white,)
              ):const Text(''),


                ],
               ),
                ], 
                ),
        

                  Row(          
                children: [
              const SizedBox(width:5),

              const Icon(Icons.school_rounded,size: 20,color: Colors.blueAccent,),
              const SizedBox(width:5),

              const Text('Exam:',
               style:TextStyle(fontSize: 20,fontWeight: FontWeight.bold,
               color:Colors.blueAccent,decoration: TextDecoration.underline)
              
              ),
               const SizedBox(width: 45,),

               Column(

                children: [
                  const SizedBox(height:20),
                   Text('total:  ${courses[index].examGrade}/ ${courses[index].examTotal}',
               style:const TextStyle(fontSize: 16,fontWeight: FontWeight.bold,
               color:Colors.white,)
              
              ),  
               const SizedBox(height:10),
                   Text('Grade: ${courses[index].examState}',
               style:const TextStyle(fontSize: 16,fontWeight: FontWeight.bold,
               color:Colors.white,)
              
              ), 
              const SizedBox(height:20),




                ],
               ),
                ], 
                ),
                
                
                
                ],
              ) ,
            );         
          
                
                
                
                 }
                 
              ),
            );
            
            
            
             
            
           }
           }
           
           
           ),




         


              
          const SizedBox(height:30),
           Container(
           width:390,
           height:200,
            decoration: const BoxDecoration(
                gradient: LinearGradient(
                  begin: Alignment.topLeft,
                  end:Alignment.bottomRight,
                  colors:[ Colors.blueAccent,Colors.cyanAccent],
                  
                ),
              ),
          
           margin: const EdgeInsets.fromLTRB(0,20,0, 0),
            child:const Column(children: [
              SizedBox(height: 10,),
               Icon(Icons.broadcast_on_home_outlined,size: 55,color: Colors.indigo,),
               Text('  Fetch Results Easily',
                   style:TextStyle(color: Colors.indigo,fontSize: 40,fontWeight: FontWeight.bold)),
             
            ],)
           )
        
        
          ]),
        ),
      
        ),
    drawerScrimColor: Colors.teal,
    drawer: Drawer(
      child:  Column(
        children: [
           const SizedBox(height: 30,),
           const Text('My Account :',
          style: TextStyle(
          fontSize: 20,
          fontWeight: FontWeight.bold,
          color: Colors.indigoAccent,
          decoration: TextDecoration.underline
          )
           ),
         Card(
        
        margin: const EdgeInsets.fromLTRB(20,50, 20, 20),
        child: Column(
          
          children: [
          const Icon(Icons.person,size: 60,color: Colors.indigoAccent,),
          Text(widget.userName,
          style: const TextStyle(
            fontSize: 30,
            fontWeight:FontWeight.bold,
            color: Colors.indigoAccent

          ),
          
          )
          ],
        ),
         ),
        Card(
        
        margin: const EdgeInsets.fromLTRB(5,10, 5, 20),
        child: Row(
          
          children: [
          const Icon(Icons.email,size: 20,color: Colors.indigoAccent,),
          Text('email: ${widget.email}',
          style: const TextStyle(
            fontSize: 15,
            fontWeight:FontWeight.bold,
            color: Colors.indigoAccent

          ),
          
          )
          ],
         ),
         ),
        Card(
        
        margin: const EdgeInsets.fromLTRB(5,10, 5, 20),
        child: Row(
          
          children: [
          const Icon(Icons.accessibility_outlined,size: 23,color:Colors.indigoAccent,),
          Text(' Role: ${widget.role}',
          style: const TextStyle(
            fontSize: 20,
            fontWeight:FontWeight.bold,
            color: Colors.indigoAccent

          ),
          
          )
          ],
        ),
         ),
         ElevatedButton.icon(
          onPressed: ()=>{
            dialogs.alertLogout(context,"LogOut", "Are you sure you want to logOut?")
          },
          icon: const Icon(Icons.login_rounded,color: Colors.white,),
          label: const Text('LogOut',
          style:TextStyle(fontSize: 16,color: Colors.white) ,),),

      ]),

    ),
    );
  }
}