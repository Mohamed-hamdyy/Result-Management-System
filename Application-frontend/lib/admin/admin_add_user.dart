import 'package:flutter/material.dart';



class AdminAddUser extends StatefulWidget {
  const AdminAddUser({super.key, required this.title});


  final String title;



  @override
  State<AdminAddUser> createState() => _AdminAddUser();
}

class _AdminAddUser extends State<AdminAddUser> {


 void _selectScreen(BuildContext ctx, int n ){
 Navigator.of(ctx).pushNamed(
 n==1? '/admin/addInst':
 n==2?'/admin/addAdmin':
 '/admin/Home'

 );

 }


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
            mainAxisAlignment:MainAxisAlignment.start,
            children: [

              Icon(Icons.arrow_circle_right,size: 30,color: Colors.green,),
              Text('Add User : ',
               style:TextStyle(fontSize: 25,fontWeight: FontWeight.bold,
               color:Colors.green,decoration: TextDecoration.underline)
              
              )

            ],
          ),
          const SizedBox(height: 90),
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
                    onTap: () => _selectScreen(context,1),
                    child:const Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                 Icon(Icons.person_2_rounded ,size:45 ,color:Colors.green),
                Text('Add Instructor ',
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
                  onTap: (){_selectScreen(context,2);},
                  child: const Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                 Icon(Icons.person_2_rounded,size:45 ,color:Colors.green),
                Text('Add Admin',
               style:TextStyle(fontSize: 30,fontWeight: FontWeight.w500,
               color:Colors.green)
              
              )
              ]),
                 ),
               const SizedBox(height: 20,)

              ],
            ) ,
          ),
          const SizedBox(height: 100,),
    
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
  
    );
  }
}