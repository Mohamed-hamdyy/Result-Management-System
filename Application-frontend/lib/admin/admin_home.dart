import 'package:flutter/material.dart';

import '../Dialogs/dialogs.dart';



class AdminHome extends StatefulWidget {
  const AdminHome({super.key, required this.title,required this.userName,
  required this.email,required this.role});


  final String title;
  final String userName;
  final String role;
  final String email;


  @override
  State<AdminHome> createState() => _AdminHomeState();
}

class _AdminHomeState extends State<AdminHome> {


 void _selectScreen(BuildContext ctx,int n ){
  Navigator.of(ctx).pushNamed(
    n==1?'/admin/addCourse':
    n==2? '/admin/removeCourse':
    n==3? '/admin/addWeight':
    '/admin/addUser'


  );



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
            mainAxisAlignment:MainAxisAlignment.center,
            children: [

              Icon(Icons.arrow_circle_right,size: 30,color: Colors.green,),
              Text('Admin Panel: ',
               style:TextStyle(fontSize: 25,fontWeight: FontWeight.bold,
               color:Colors.green,decoration: TextDecoration.underline)
              
              )

            ],
          ),
            Container(
              decoration: const BoxDecoration(
                gradient: LinearGradient(
                  begin: Alignment.topLeft,
                  end:Alignment.bottomRight,
                  colors: [Colors.lightGreenAccent,Colors.greenAccent],
                  
                ),
                borderRadius: BorderRadius.all(Radius.circular(10)),
              ),
                 
              margin: const EdgeInsets.fromLTRB(20, 20, 20, 15),
              child:Column(
                children: [
                 const  SizedBox(height: 20,),
                  InkWell(
                    onTap: () => _selectScreen(context, 1),
                    child: const Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                   Icon(Icons.add_box_outlined,size:45 ,color:Colors.green),
                  Text('Add Course ',
                 style:TextStyle(fontSize: 30,fontWeight: FontWeight.w500,
                 color:Colors.green)
                
                )
                ]),
                  ),
                 const SizedBox(height: 20,),
            
            
                ],
              ) ,
            ),
            Container(
              decoration: const BoxDecoration(
                gradient: LinearGradient(
                  begin: Alignment.topLeft,
                  end:Alignment.bottomRight,
                  colors: [Colors.lightGreenAccent,Colors.greenAccent],
                  
                ),
                borderRadius: BorderRadius.all(Radius.circular(10)),
              ),
            margin: const EdgeInsets.fromLTRB(20, 20, 20, 15),
            child:Column(
              children: [
                const SizedBox(height: 20,),
                 InkWell(
                  onTap:() => _selectScreen(context, 2), 
                 child: const Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                 Icon(Icons.delete_forever_outlined,size:45 ,color:Colors.green),
                Text('Remove Course',
               style:TextStyle(fontSize: 30,fontWeight: FontWeight.w500,
               color:Colors.green)
              
              )
              ]),
                 ),
               const SizedBox(height: 20,)

              ],
            ) ,
          ),
             Container(
           decoration: const BoxDecoration(
                gradient: LinearGradient(
                  begin: Alignment.topLeft,
                  end:Alignment.bottomRight,
                  colors: [Colors.lightGreenAccent,Colors.greenAccent],
                  
                ),
                borderRadius: BorderRadius.all(Radius.circular(10)),
              ),
           margin:const  EdgeInsets.fromLTRB(20, 20, 20, 15),
            child:Column(
              children: [
                const SizedBox(height: 20,),
                InkWell(
                  onTap: () => _selectScreen(context, 3),
                  child: const Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                 Icon(Icons.percent_outlined,size:45 ,color:Colors.green),
                Text('Add Course Weight ',
               style:TextStyle(fontSize: 30,fontWeight: FontWeight.w500,
               color:Colors.green)
              
              )
              ]),
                ),
            const SizedBox(height: 20,),


              ],
            ) ,
          ),
           Container(
              decoration: const BoxDecoration(
                gradient: LinearGradient(
                  begin: Alignment.topLeft,
                  end:Alignment.bottomRight,
                  colors: [Colors.lightGreenAccent,Colors.greenAccent],
                  
                ),
                borderRadius: BorderRadius.all(Radius.circular(10)),
              ),
            margin: const EdgeInsets.fromLTRB(20, 20, 20, 15),
            child:Column(
              children: [
               const SizedBox(height: 20,),
                 InkWell(
                  onTap: (){_selectScreen(context,4);},
                  child: const Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                 Icon(Icons.person_2_rounded,size:45 ,color:Colors.green),
                Text('Add User',
               style:TextStyle(fontSize: 30,fontWeight: FontWeight.w500,
               color:Colors.green)
              
              )
              ]),
                 ),
               const SizedBox(height: 20,)

              ],
            ) ,
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
                 style:TextStyle(color: Colors.white,fontSize: 40,
                 fontWeight: FontWeight.bold,)),
           
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
          color: Colors.greenAccent,
          decoration: TextDecoration.underline
          )
           ),
         Card(
        
        margin: const EdgeInsets.fromLTRB(20,50, 20, 20),
        child: Column(
          
          children: [
          const Icon(Icons.person,size: 60,color: Colors.greenAccent,),
          Text(widget.userName,
          style: const TextStyle(
            fontSize: 30,
            fontWeight:FontWeight.bold,
            color: Colors.greenAccent

          ),
          
          )
          ],
        ),
         ),
        Card(
        
        margin: const EdgeInsets.fromLTRB(5,10, 5, 20),
        child: Row(
          
          children: [
          const Icon(Icons.email,size: 20,color: Colors.greenAccent,),
          Text('email: ${widget.email}',
          style: const TextStyle(
            fontSize: 15,
            fontWeight:FontWeight.bold,
            color: Colors.greenAccent

          ),
          
          )
          ],
         ),
         ),
        Card(
        
        margin: const EdgeInsets.fromLTRB(5,10, 5, 20),
        child: Row(
          
          children: [
          const Icon(Icons.accessibility_outlined,size: 23,color: Colors.greenAccent,),
          Text(' Role: ${widget.role}',
          style: const TextStyle(
            fontSize: 20,
            fontWeight:FontWeight.bold,
            color: Colors.greenAccent

          ),
          
          )
          ],
        ),
         ),
 ElevatedButton.icon(
          onPressed: ()=>{
            dialogs.alertLogout(context,"LogOut", "Are you sure you want to logOut?")
          },
          style: ButtonStyle(backgroundColor: MaterialStateProperty.all(Colors.greenAccent)),
          icon: const Icon(Icons.login_rounded,color: Colors.white,),
          label: const Text('LogOut',
          style:TextStyle(fontSize: 16,color: Colors.white) ,),),
      ]),

    ),
    );
  }
}