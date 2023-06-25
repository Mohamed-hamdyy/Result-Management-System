// ignore_for_file: file_names

import 'package:flutter/material.dart';
import 'package:rms_app/Dialogs/dialogs.dart';


class InstHome extends StatefulWidget {
  const InstHome({super.key, required this.title,required this.userName,
  required this.email , required this.role});


  final String title;
  final String userName;
  final String role;
  final String email;


  @override
  State<InstHome> createState() => _InstHomeState();
}

class _InstHomeState extends State<InstHome> {

 void _selectScreen(BuildContext ctx ){
  Navigator.of(ctx).pushNamed(
 
    '/Inst/addGrade'


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
            mainAxisAlignment:MainAxisAlignment.center,
            children: [

              Icon(Icons.arrow_circle_right,size: 30,color: Colors.teal,),
              Text('Instructor Panel: ',
               style:TextStyle(fontSize: 25,fontWeight: FontWeight.bold,
               color:Colors.teal,decoration: TextDecoration.underline)
              
              )

            ],
          ),
          const SizedBox(height:20),
            Card(            
            color:Colors.tealAccent,
            margin: const EdgeInsets.fromLTRB(20, 20, 20, 15),
            child:Column(
              children: [
               const  SizedBox(height: 20,),
                InkWell(
                  onTap: () => _selectScreen(context),
                  child: const Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                 Icon(Icons.grade_outlined,size:45 ,color:Colors.teal),
                Text('Add Grade ',
               style:TextStyle(fontSize: 30,fontWeight: FontWeight.w500,
               color:Colors.teal)
              
              )
              ]),
                ),
               const SizedBox(height: 20,),


              ],
            ) ,
          ),
        const SizedBox(height:300),
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
    drawerScrimColor: Colors.teal,
    drawer: Drawer(
      child:  Column(
        children: [
           const SizedBox(height: 30,),
           const Text('My Account :',
          style: TextStyle(
          fontSize: 20,
          fontWeight: FontWeight.bold,
          color: Colors.teal,
          decoration: TextDecoration.underline
          )
           ),
         Card(
        
        margin: const EdgeInsets.fromLTRB(20,50, 20, 20),
        child: Column(
          
          children: [
          const Icon(Icons.person,size: 60,color: Colors.teal,),
          Text(widget.userName,
          style: const TextStyle(
            fontSize: 30,
            fontWeight:FontWeight.bold,
            color: Colors.teal

          ),
          
          )
          ],
        ),
         ),
        Card(
        
        margin: const EdgeInsets.fromLTRB(5,10, 5, 20),
        child: Row(
          
          children: [
          const Icon(Icons.email,size: 20,color: Colors.teal,),
          Text('email: ${widget.email}',
          style: const TextStyle(
            fontSize: 15,
            fontWeight:FontWeight.bold,
            color: Colors.teal

          ),
          
          )
          ],
         ),
         ),
        Card(
        
        margin: const EdgeInsets.fromLTRB(5,10, 5, 20),
        child: Row(
          
          children: [
          const Icon(Icons.accessibility_outlined,size: 23,color: Colors.teal,),
          Text(' Role: ${widget.role}',
          style: const TextStyle(
            fontSize: 20,
            fontWeight:FontWeight.bold,
            color: Colors.teal

          ),
          
          )
          ],
        ),
         ),
          ElevatedButton.icon(
          onPressed: ()=>{
            dialogs.alertLogout(context,"LogOut", "Are you sure you want to logOut?")
          },
          style: ButtonStyle(backgroundColor: MaterialStateProperty.all(Colors.teal)),
          icon: const Icon(Icons.login_rounded,color: Colors.white,),
          label: const Text('LogOut',
          style:TextStyle(fontSize: 16,color: Colors.white) ,),),
      ]),

    ),
    );
  }
}