 import 'package:flutter/material.dart';

import '../Dialogs/dialogs.dart';


class Home extends StatefulWidget {
  const Home({super.key, required this.title});


  final String title;
  


  @override
  State<Home> createState() => _Home();
}

class _Home extends State<Home> {

bool show=false;

void _selectScreen(BuildContext ctx ){
  Navigator.of(ctx).pushNamed(
  '/Login'
  
  );
}

 Dialogs dialogs=Dialogs();


  @override
  Widget build(BuildContext context) {
   
    return Scaffold(
      appBar: AppBar(
        leading: const Icon(Icons.home_outlined),
        backgroundColor: Colors.blueGrey,
        shadowColor: Colors.teal,
        elevation: 5,
        title: Text(widget.title),
        actions: [
         TextButton.icon(
          onPressed: ()=>_selectScreen(context),
          icon: const Icon(Icons.login_rounded,color: Colors.white,),
          label: const Text('Login',
          style:TextStyle(fontSize: 16,color: Colors.white) ,),),
          const SizedBox(width: 10,)

        ],
       
      ),
      body:   SingleChildScrollView(
        child: Container(
          width:400,
          color:Colors.white,
          child: Column(
            children: [
           
           const Image(image: AssetImage('assets/images/backHome3.jpg'),
           fit: BoxFit.cover,
           ),
           const SizedBox(height:20),
             const Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
            
                 Text('RMS',
                 style:TextStyle(fontSize: 25,fontWeight: FontWeight.bold,
                 color:Colors.blueGrey, decoration: TextDecoration.underline)
                
                )
        
              ],
            ),
              const SizedBox(height:5),
             const Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
            
                 Text('Result-Management System',
                 style:TextStyle(fontSize: 20,
                 color:Colors.blueGrey)
                
                )
        
              ],
            ),
            const SizedBox(height: 30,),
           Container(
           width:400,
           decoration: BoxDecoration(
                
                 border: Border.all(width: 2,
                color: Colors.blueGrey
                ),
                borderRadius: BorderRadius.circular(20),
                ),
                margin: const EdgeInsets.fromLTRB(8,0, 8, 0),
                padding: const EdgeInsets.fromLTRB(5, 0, 5, 0),
            child: Column(children: [
           const SizedBox(height:20),
             const Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
            
                Icon(Icons.description_outlined,size: 30,color: Colors.blueGrey,),
                SizedBox(width:5),
                 Text('Description:',
                 style:TextStyle(fontSize: 22,fontWeight: FontWeight.bold,
                 color:Colors.blueGrey,decoration: TextDecoration.underline)
                
                ),
           
                 
              ],
            ),
             const SizedBox(height:5),
              OutlinedButton.icon(onPressed: ()async{
                
                setState(() {
                show=!show;             
                });
                },
               
              icon: show?const Icon(Icons.arrow_circle_up_outlined,color: Colors.white,)
              :const Icon(Icons.arrow_circle_down_outlined,color: Colors.white,),
              style: ButtonStyle( backgroundColor: MaterialStateProperty.all(Colors.teal)),
               label:show?const Text('show Less',style: TextStyle(color:Colors.white),)
               :const Text('show More',style: TextStyle(color:Colors.white),)
              ),
                            const SizedBox(height: 10,),

                 show ? const Text('Online Results-management system that facilitates the environment of both the students and the educators(lecturers, teachers,...etc) responsible for grading them. A system that produces faster results for students , requires less effort from the educators and also reduces the burden on the educators and saves the results from any human errors or damages.',
                 style:TextStyle(fontSize: 20,
                 color:Colors.blueGrey,fontWeight: FontWeight.w500)
                
                ):const Text(""), 
                
              const SizedBox(height: 10,)
                
             ],
            ),
                 ),
           const SizedBox(height:53),
           Container(
           width:390,
           height:200,
            decoration: const BoxDecoration(
                gradient: LinearGradient(
                  begin: Alignment.topLeft,
                  end:Alignment.bottomRight,
                  colors:[ Colors.blueGrey,Colors.grey],
                  
                ),
              ),
          
           margin: const EdgeInsets.fromLTRB(0,20,0, 0),
            child:const Column(children: [
              SizedBox(height: 10,),
               Icon(Icons.broadcast_on_home_outlined,size: 55,color: Colors.white,),
               Text('  Fetch Results Easily',
                   style:TextStyle(color: Colors.white,fontSize: 40,fontWeight: FontWeight.bold)),
             
            ],)
           )








    ]),
        ),
      )
    );
  }

  }
  
