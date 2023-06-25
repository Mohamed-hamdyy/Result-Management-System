import 'package:flutter/material.dart';

import 'dart:convert';

import 'package:rms_app/models/ip.dart';
import 'package:http/http.dart' as http;
import 'package:rms_app/models/response4.dart';

import '../Dialogs/dialogs.dart';


class AdminAddAdmin extends StatefulWidget {
  const AdminAddAdmin({super.key, required this.title});


  final String title;
  


  @override
  State<AdminAddAdmin> createState() => _AdminAddAdmin();
}

class _AdminAddAdmin extends State<AdminAddAdmin> {

final _nameController=TextEditingController();
final  _emailController=TextEditingController();
final _passwordController=TextEditingController();



bool show=false;
bool add=false ;


_handleCreateAdmin() async {
String a=IP().address;
var url ='http://$a:7000/createAdmin';
final body = {
'userName':_nameController.text,
'password':_passwordController.text,
'email':_emailController.text,

};
final response =await http.post(
  Uri.parse(url),
  body: jsonEncode(body),
  headers: <String,String>{
  'Content-Type':'application/json; charset=UTF-8',

  },
);
final json=jsonDecode(response.body);
var res = Response4.fromJson(json); 
if (res.done){
 _nameController.clear();
 _emailController.clear();
 _passwordController.clear();

setState(() {
  add=true;
});
}

 _nameController.clear();

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
              Text('Add Admin to the system:',
               style:TextStyle(fontSize: 25,fontWeight: FontWeight.bold,
               color:Colors.green,decoration: TextDecoration.underline)
              
              )

            ],
          ),
          const SizedBox(height: 20,),
         Container(
         width:400,
         height:430,
         decoration: const BoxDecoration(
                gradient: LinearGradient(
                  begin: Alignment.bottomLeft,
                  end:Alignment.topRight,
                  colors: [Colors.lightGreenAccent,Colors.greenAccent],
                  
                ),
              ),

         child: Column(children: [

          const SizedBox(height: 20,),
              Row(
           children: [
           const  SizedBox(width:10),
             const SizedBox(
              width:120,
               child: Text('Username:',style: TextStyle(
                        fontSize: 20,
                        fontWeight: FontWeight.bold,
                        color: Colors.white,
                       )
                       ),
             ),
            SizedBox(
            width: 210,
           child: Flexible(
            child:TextField(
              decoration: const InputDecoration(
                enabledBorder: OutlineInputBorder(
                  borderSide: BorderSide(color: Colors.grey)
                ),
                hintText: "Add username",
                hintStyle: TextStyle(color: Colors.green),

                prefixIcon: Icon(Icons.person_add_alt_1_rounded,color: Colors.green,),
                filled: true,
                fillColor: Colors.lightGreenAccent
                ),
             controller:_nameController,
             style: const TextStyle(fontSize: 20, color:Colors.green),
             keyboardType: TextInputType.name,
            
            )
          )
          )
           ],
          ),
          const SizedBox(height: 20,),
           Row(
           children: [
           const  SizedBox(width:10),
            const SizedBox(
              width:120,
              child: Text('Email:',style: TextStyle(
                       fontSize: 20,
                       fontWeight: FontWeight.bold,
                       color: Colors.white,
                      )
                      ),
            ),
            SizedBox(
            width: 210,
           child: Flexible(
            child:TextField(
              decoration: const InputDecoration(
                enabledBorder: OutlineInputBorder(
                  borderSide: BorderSide(color: Colors.grey)
                ),
                hintText: "Add email",
                hintStyle: TextStyle(color: Colors.green),

                prefixIcon: Icon(Icons.email_outlined,color: Colors.green,),
                filled: true,
                fillColor: Colors.lightGreenAccent
                ),
             controller:_emailController,
             style: const TextStyle(fontSize: 20, color:Colors.green),
             keyboardType: TextInputType.emailAddress,
            
            )
          )
          )
           ],
          ),
         const SizedBox(height: 20,),
                      Row(
           children: [
           const  SizedBox(width:10),
           const SizedBox(
            width:120,
             child: Text('Password:',style: TextStyle(
             fontSize: 20,
             fontWeight: FontWeight.bold,
             color: Colors.white,
                     )
                     ),
           ),
            SizedBox(
            width: 210,
           child: Flexible(
            child:TextField(
              decoration: const InputDecoration(
                enabledBorder: OutlineInputBorder(
                  borderSide: BorderSide(color: Colors.grey)
                ),
                hintText: "Add password",
                hintStyle: TextStyle(color: Colors.green),
                prefixIcon: Icon(Icons.key_outlined,color: Colors.green,),
                filled: true,
                fillColor: Colors.lightGreenAccent
                ),
             controller:_passwordController,
             style: const TextStyle(fontSize: 20, color:Colors.green),
             keyboardType: TextInputType.text,
             obscureText: true,
            )
          )
          )
           ],
          ),
          const SizedBox(height: 20,),
     OutlinedButton(onPressed: ()async{
       if(_nameController.text=="" || _emailController.text=="" || 
_passwordController.text=="" ){
                dialogs.informationA(context,"Invalid Inputs","please add the required inputs correctly to set up the new admin account!");
                }
                else {
                  await _handleCreateAdmin();
                // ignore: use_build_context_synchronously
                dialogs.confirmationA(context,
                add?'Confirmation':'Alert',
                add?'Admin created successfully.'
                :'username taken, try another one for the new Admin.',
                add?1:2 );
                setState(() {
                  add=false;
             
                });
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
  
    );
  }
}