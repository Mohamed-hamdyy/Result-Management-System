import 'package:flutter/material.dart';
import 'package:rms_app/models/ip.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';
import 'package:rms_app/models/student_model.dart';
import 'package:rms_app/models/response.dart';

import '../Dialogs/dialogs.dart';


class InstExam extends StatefulWidget {
  const InstExam({super.key, required this.title,required this.courseVal,
  required this.examTotal
  });


  final String title;
  final String courseVal;
  final String examTotal;
  

  @override
  State<InstExam> createState() => _InstExam();
}

class _InstExam extends State<InstExam> {

bool show=false;

final List<TextEditingController>? _controllers = [];
final List<TextEditingController>? _controllers2 = [];

Future<List<Student>>? studentFuture;
List<String> gradesNew=[];
List<String> rankNew=[];


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

for (int l=0;l<(_controllers2?.length)!;l++){
rankNew.add(_controllers2![l].text);

}

String a=IP().address;
var url ='http://$a:7000/addExamApplication';
final body = {
'courseCode':widget.courseVal,
'examGrade':gradesNew,
'examTotal':widget.examTotal,
'rank':rankNew,

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
for (var e in _controllers2!) {
  e.clear();
  
}
gradesNew.clear();
rankNew.clear();



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
              Text('Add Exam Grades:',
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
           const  SizedBox(width:5),
          
             const Text('Exam Total:',style: TextStyle(
           fontSize: 18,
           fontWeight: FontWeight.bold,
           color: Colors.white,
          )
          ),
          const SizedBox(width:10),
             Text(widget.examTotal,style: const TextStyle(
           fontSize: 20,
           fontWeight: FontWeight.bold,
           color: Colors.tealAccent,
          )
          ),
         ]),
               const SizedBox(height: 20,),
                        const Text('"Only Inserted grades and ranks gets updated"',style: TextStyle(
           fontSize: 18,
           fontWeight: FontWeight.bold,
           color: Colors.white,
          )
          ),
                         const SizedBox(height: 20,),
                 Row(
         children: [
          const SizedBox(width: 20,),
           const Text('Students:',style:  TextStyle(
           fontSize: 20,
           fontWeight: FontWeight.bold,
           color: Colors.tealAccent,
           decoration: TextDecoration.underline
          )
          ),
           const SizedBox(width: 100,),
           Text('total/${widget.examTotal}:',style: const  TextStyle(
           fontSize: 20,
           fontWeight: FontWeight.bold,
           color: Colors.tealAccent,
           decoration: TextDecoration.underline
          )
          ),
            const SizedBox(width: 10,),
           const Text('Grade:',style:  TextStyle(
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
                    _controllers2!.add(TextEditingController());

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
                          width: 200,
                           child: Text(stu[index].name,style:  const TextStyle(
                             fontSize: 20,
                             fontWeight: FontWeight.bold,
                             color: Colors.teal,
                            )
                            ),
                         ),
                                                    
                                SizedBox(
                                  width: 60,
                                 child: Flexible(
                                  child:TextField(
                                     decoration: const InputDecoration(
                                      enabledBorder: OutlineInputBorder(
                                      borderSide: BorderSide(color: Colors.grey)
                                      ),
                                      hintText: "....",
                                      hintStyle: TextStyle(color: Colors.teal),
                                              
                                      filled: true,
                                      fillColor: Colors.tealAccent
                                      ),
                                      controller: _controllers?[index],
                                   style: const  TextStyle(fontSize: 20, color:Colors.teal),
                                   keyboardType: TextInputType.number,
                                  
                                  )
                                )
                                ),
                              
                            
                            const SizedBox(width:5),
                                SizedBox(
                              width: 60,
                             child: Flexible(
                              child:TextField(
                                 decoration: const InputDecoration(
                                  enabledBorder: OutlineInputBorder(
                                  borderSide: BorderSide(color: Colors.grey)
                                  ),
                                  hintText: "....",
                                  hintStyle: TextStyle(color: Colors.teal),
                                              
                                  filled: true,
                                  fillColor: Colors.tealAccent
                                  ),
                                  controller: _controllers2?[index],
                               style: const  TextStyle(fontSize: 20, color:Colors.teal),
                               keyboardType: TextInputType.text,
                              
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
         OutlinedButton(onPressed: ()async{
    bool err=false;
    bool err2=false;
     for (int k=0;k<(_controllers?.length)!;k++){
   if (_controllers![k].text !="" && 
  int.parse(_controllers![k].text) > int.parse(widget.examTotal)  ){
      err=true;
      _controllers![k].clear();
      break;
      }

     }
    for (int l=0;l<(_controllers2?.length)!;l++){
      String a =_controllers2![l].text;
   if ((a !="") &&
   (a!='A+'&& a!='A'&& a!='A-'&& a!='B+'&& a!='B'&& a!='B-'&& a!='C+'&& a!='C'&& a!='C-'&&
   a!='D'&& a!='F' ) 
    ){
      err2=true;
      _controllers2![l].clear();
      break;
      }

     }



if(err){
    dialogs.informationI(context,"Invalid Input","please make sure that inserted grades are less than total grade!");
  }
else if(err2){
    dialogs.informationI(context,"Invalid Input","please make sure that the inserted grades are valid, Grades can be :'A+ , A , A- , B+ , B , B- ,  C+ , C , C- , D  , F ' ");
  
}

       else{
await _handleUpdate();
                // ignore: use_build_context_synchronously
                dialogs.confirmationI(context,
                'Confirmation','Exam Grades Inserted updated successfully.',1);


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