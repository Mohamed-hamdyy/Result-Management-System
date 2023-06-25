import 'package:flutter/material.dart';

import 'dart:convert';

import 'package:rms_app/models/ip.dart';
import 'package:http/http.dart' as http;
import 'package:rms_app/models/response3.dart';

import '../Dialogs/dialogs.dart';


class Register extends StatefulWidget {
  const Register({super.key, required this.title});


  final String title;
  


  @override
  State<Register> createState() => _Register();
}

class _Register extends State<Register> {

final _nameController=TextEditingController();
final _emailController=TextEditingController();
final _passwordController=TextEditingController();
final _phoneController =TextEditingController();

bool show=false;
bool add=false;


_handleCreateStudent() async {

String a=IP().address;
var url ='http://$a:7000/createStudent';
final body = {
'userName':_nameController.text,
'password':_passwordController.text,
'email':_emailController.text,
'phoneNumber':_phoneController.text,

};
final response =await http.post(
  Uri.parse(url),
  body: jsonEncode(body),
  headers: <String,String>{
  'Content-Type':'application/json; charset=UTF-8',

  },
);
final json=jsonDecode(response.body);
var res = Response3.fromJson(json); 
if (res.done){
  _nameController.clear();
  _emailController.clear();
  _phoneController.clear();
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
        backgroundColor: Colors.blueGrey,
        shadowColor: Colors.teal,
        elevation: 5,
        title: Text(widget.title)
       
      ),
      body:   SingleChildScrollView(
        child: Container(
          width:400,
          height:700,
          color: Colors.white,
          child: Column(
            children: [
        
           
            const SizedBox(height: 70,),
           Container(
           width:400,
           height:500,
           decoration: BoxDecoration(
                  gradient: const  LinearGradient(
                    begin: Alignment.topLeft,
                    end:Alignment.bottomRight,
                    colors:  [Colors.blueGrey,Color.fromARGB(255, 14, 78, 110)],
                    
                  ),
                       border: Border.all(width: 2,
                color: Colors.blueGrey
                ),
                borderRadius: BorderRadius.circular(20),
                ),
                margin: const EdgeInsets.fromLTRB(8,0, 8, 0),
           child: Column(children: [
          const SizedBox(height:20),
            const Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
            
                Icon(Icons.arrow_circle_right,size: 30,color: Colors.white,),
                SizedBox(width:5),
                Text('Register:',
                 style:TextStyle(fontSize: 25,fontWeight: FontWeight.bold,
                 color:Colors.white,decoration: TextDecoration.underline)
                
                )
        
              ],
            ),
            const SizedBox(height: 20,),
                Row(
             children: [
           const SizedBox(width:10),

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
                  hintStyle: TextStyle(color: Colors.teal),
        
                  prefixIcon: Icon(Icons.person_add_alt_1_rounded,color: Colors.teal,),
                  filled: true,
                  fillColor: Colors.white
                  ),
               controller:_nameController,
               style: const TextStyle(fontSize: 20, color:Colors.teal),
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
                child:  Text('Email:',style: TextStyle(
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
                  hintStyle: TextStyle(color: Colors.teal),
        
                  prefixIcon: Icon(Icons.email_outlined,color: Colors.teal,),
                  filled: true,
                  fillColor: Colors.white
                  ),
               controller:_emailController,
               style: const TextStyle(fontSize: 20, color:Colors.teal),
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
               child: Text('Phone No. :',style: TextStyle(
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
                  hintText: "Add number",
                  hintStyle: TextStyle(color: Colors.teal),
                  prefixIcon: Icon(Icons.phone_android_outlined,color:Colors.teal,),
                  filled: true,
                  fillColor: Colors.white
                  ),
               controller:_phoneController,
               style: const TextStyle(fontSize: 20, color:Colors.teal),
               keyboardType: TextInputType.number,
          
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
                child:  Text('Password:',style: TextStyle(
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
                  hintStyle: TextStyle(color: Colors.teal),
                  prefixIcon: Icon(Icons.key_outlined,color: Colors.teal,),
                  filled: true,
                  fillColor: Colors.white
                  ),
               controller:_passwordController,
               style: const TextStyle(fontSize: 20, color:Colors.teal),
               keyboardType: TextInputType.text,
               obscureText: true,
              )
            )
            )
             ],
            ),
            const SizedBox(height: 30,),
           OutlinedButton.icon(onPressed: ()async {
            if(_nameController.text=="" || _emailController.text=="" || 
        _passwordController.text=="" || _phoneController.text==""){
                  dialogs.informationL(context,"Invalid Inputs","please add the required inputs correctly to set up your new account!");
                  }
                  else {
                    await _handleCreateStudent();
                  // ignore: use_build_context_synchronously
                 dialogs.confirmationL(context,
                  add?'Confirmation':'Alert',
                  add?'Student profile created successfully, you can proceed to login now.'
                  :'username taken, try another one for your account.',
                  add? 1:2);
                  setState(() {
                    add=false;
               
                  });
                  }
           },
                style: ButtonStyle(
                  backgroundColor: MaterialStateProperty.all(Colors.white)
            
                  ),
                  icon: const Icon(Icons.app_registration_outlined,color: Colors.teal,),
                 label:const Text('Register',style: TextStyle(fontSize: 16,color:Colors.teal),)
                 ),
                
             
        
           ],)
        
        
           ),
            
          ]),
        ),
      
        ),

    );
  }
}