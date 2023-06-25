import 'package:flutter/material.dart';
import 'package:rms_app/models/ip.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';
import 'package:rms_app/models/student_model.dart';
import 'package:rms_app/models/response.dart';

import '../Dialogs/dialogs.dart';


class InstQuiz extends StatefulWidget {
  const InstQuiz({super.key, required this.title,required this.courseVal,
  required this.quizNum,required this.quizTotal
  });


  final String title;
  final String courseVal;
  final String quizTotal;
  final String quizNum;
  

  @override
  State<InstQuiz> createState() => _InstQuiz();
}

class _InstQuiz extends State<InstQuiz> {

bool show=false;

final List<TextEditingController>? _controllers = [];
Future<List<Student>>? studentFuture;
List<String> gradesNew=[];


 Future<List<Student>> getStudents() async {
String a=IP().address;
var url ='http://$a:7000/getStudentsListApp22';
final body = {
'code':widget.courseVal,

};
final response =await http.post(
  Uri.parse(url),
  body: jsonEncode(body),
  headers: <String,String>{
  'Content-Type':'application/json; charset=UTF-8',

  },
);
final json=jsonDecode(response.body);
return json.map<Student>(Student.fromJson).toList();
}



_handleUpdate() async {

for (int k=0;k<(_controllers?.length)!;k++){

gradesNew.add(_controllers![k].text);

}


String a=IP().address;
var url ='http://$a:7000/addQuizApplication';
final body = {
'courseCode':widget.courseVal,
'quizGrade':gradesNew,
'quizTotal':widget.quizTotal,
'Number':widget.quizNum,

};
final response =await http.post(
  Uri.parse(url),
  body: jsonEncode(body),
  headers: <String,String>{
  'Content-Type':'application/json; charset=UTF-8',

  },
);
final json=jsonDecode(response.body);
var res =Response.fromJson(json);
// ignore: avoid_print
print ('res   ${res.done}');


for (var e in _controllers!) {
  e.clear();
  
}
gradesNew.clear();


}



Dialogs dialogs=Dialogs();

  @override
  Widget build(BuildContext context) {
   

   setState(() {
     studentFuture=getStudents();
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
              Text('Add Quiz Grades:',
               style:TextStyle(fontSize: 25,fontWeight: FontWeight.bold,
               color:Colors.teal,decoration: TextDecoration.underline)
              
              )

            ],
          ),
          const SizedBox(height: 20,),
         Container(
         width:400,
         color:Colors.blueGrey,
         child: Column(children: [
              
          const SizedBox(height: 20,),
             Row(children:[
           const  SizedBox(width:10),
             const Text('Quiz No.:',style: TextStyle(
           fontSize: 18,
           fontWeight: FontWeight.bold,
           color: Colors.white,
          )
          ),
          const SizedBox(width:10),
             Text(widget.quizNum,style: const TextStyle(
           fontSize: 20,
           fontWeight: FontWeight.bold,
           color: Colors.tealAccent,
          )
           ),
           const SizedBox(width: 80,),
             const Text('Quiz Total:',style: TextStyle(
           fontSize: 18,
           fontWeight: FontWeight.bold,
           color: Colors.white,
          )
          ),
          const SizedBox(width:10),
             Text(widget.quizTotal,style: const TextStyle(
           fontSize: 20,
           fontWeight: FontWeight.bold,
           color: Colors.tealAccent,
          )
          ),
         ]),
               const SizedBox(height: 20,),
                const Text('"Only Inserted grades gets updated"',style: TextStyle(
           fontSize: 18,
           fontWeight: FontWeight.bold,
           color: Colors.white,
          )
          ),
                         const SizedBox(height: 20,),

               const  Row(
         children: [
          SizedBox(width: 20,),
           Text('Students:',style:  TextStyle(
           fontSize: 20,
           fontWeight: FontWeight.bold,
           color: Colors.tealAccent,
           decoration: TextDecoration.underline
          )
          ),
           SizedBox(width: 120,),
           Text('Grades:',style:  TextStyle(
           fontSize: 20,
           fontWeight: FontWeight.bold,
           color: Colors.tealAccent,
           decoration: TextDecoration.underline
          )
          )
         ],
         ),
               
               
         
         
         
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
             final stu=snapshot.data!;
            return  SingleChildScrollView(
              child: ListView.separated(
                   physics: const NeverScrollableScrollPhysics(),
                   shrinkWrap: true,           
                separatorBuilder: (context, index) => 
                       const SizedBox(height:10),
                 itemCount: stu.length,
                 itemBuilder:(context,index){
               
                    _controllers!.add(TextEditingController());
         
                    //_controllers.add(new TextEditingController());
                     return           
                       Container(
               margin: const EdgeInsets.fromLTRB(0, 10,0, 10),
                               padding: const EdgeInsets.all(8),
                               decoration: const BoxDecoration(
              color: Colors.greenAccent,
              borderRadius: BorderRadius.all(Radius.circular(20)),
                               ),
                                child: 
                               Row(children: [
                const  SizedBox(width: 8,),
                         SizedBox(
                          width: 170,
                           child: Text(stu[index].name,style:  const TextStyle(
                             fontSize: 20,
                             fontWeight: FontWeight.bold,
                             color: Colors.teal,
                            )
                            ),
                         ),
                         const   SizedBox(width: 40,),
                          SizedBox(
                            width: 100,
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
                                controller: _controllers?[index],
                             style: const  TextStyle(fontSize: 20, color:Colors.teal),
                             keyboardType: TextInputType.number,
                            
                            )
                          )
                          )
                    
                    
                    
                    
               ])
                                
                                ,);
                
                
                
                 }
                 
              ),
            );
            
            
            
             
            
           }
           }
           
           
           ),
         
           
          const SizedBox(height: 50,),
          Row(
          children:[
            const SizedBox(width:160),
         OutlinedButton(onPressed: () async 
        { 
            bool err=false;
     for (int k=0;k<(_controllers?.length)!;k++){
   if (_controllers![k].text !="" && 
  int.parse(_controllers![k].text) > int.parse(widget.quizTotal)  ){
      err=true;
      break;
      }

     }
if(err){
    dialogs.informationI(context,"Invalid Input","please make sure that the inserted grades are less than total grade!");
  }
          
          
      else{    
           await _handleUpdate();
                // ignore: use_build_context_synchronously
                dialogs.confirmationI(context,
                'Confirmation','Quizes Grades Inserted were updated successfully.',1);
         
        
        }
        },
          style: ButtonStyle(backgroundColor: MaterialStateProperty.all(Colors.tealAccent)),
           child:const Text('Update',style: TextStyle(color:Colors.teal),)
           ),
          
         
          ]
          ),
           const  SizedBox(height: 20),
          
          
         
         ],)
         
         
         ),
                             const  SizedBox(height: 55),

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