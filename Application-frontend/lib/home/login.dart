import 'package:flutter/material.dart';

import 'dart:convert';

import 'package:rms_app/models/ip.dart';
import 'package:http/http.dart' as http;
import 'package:rms_app/models/login_model.dart';

import '../Dialogs/dialogs.dart';
import 'package:rms_app/admin/admin_home.dart';
import 'package:rms_app/Instructor/inst_home.dart';
import 'package:rms_app/Student/student.dart';

class Login extends StatefulWidget {
  const Login({super.key, required this.title});


  final String title;
  


  @override
  State<Login> createState() => _Login();
}

class _Login extends State<Login> {

final _nameController=TextEditingController();
final _passwordController=TextEditingController();


bool add=false;


_handleLogin() async {

String a=IP().address;
var url ='http://$a:7000/Userlogin';
final body = {
'userName':_nameController.text,
'password':_passwordController.text,


};
final response =await http.post(
  Uri.parse(url),
  body: jsonEncode(body),
  headers: <String,String>{
  'Content-Type':'application/json; charset=UTF-8',

  },
);
final json=jsonDecode(response.body);
var res = LoginModel.fromJson(json);
if (res.message=="Success"){

   if(res.role=="Student") {
     // ignore: use_build_context_synchronously
     _selectScreen2(context, 1, _nameController.text, res.email!, res.role!);
   }
  else if(res.role=="Admin") {
     // ignore: use_build_context_synchronously
     _selectScreen2(context, 2, _nameController.text, res.email!, res.role!);
   }
   else {
     // ignore: use_build_context_synchronously
     _selectScreen2(context, 3, _nameController.text, res.email!, res.role!);
   }

}
else if(res.message=="username not found"){
   // ignore: use_build_context_synchronously
   dialogs.alertLogin(context,'Login Failed',"Username incorrect, try entering it again ");
  _nameController.clear();

}
else {
 // ignore: use_build_context_synchronously
 dialogs.alertLogin(context,'Login Failed',"Password incorrect, try entering it again ");
  _passwordController.clear();

}



}




void _selectScreen(BuildContext ctx ){
  Navigator.of(ctx).pushNamed(
  '/Register'
   


  );
}
void _selectScreen2(BuildContext ctx, int n , String a , String b ,String c ){
 Navigator.of(ctx).pushReplacement(
MaterialPageRoute(builder: (_){
  if(n==1){
 return  StudentHome(title: '', userName:a,email: b, role: c);
  } 
 else if(n==2){
 return AdminHome(title: '', userName: a, email: b, role: c); 
 }
 else {
   return InstHome(title: '', userName: a, email:b , role: c );
 }
   


}
)
 );
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
        
           
            const SizedBox(height: 100,),
           Container(
           width:400,
           height:400,
           decoration: BoxDecoration(
                  gradient: const  LinearGradient(
                    begin: Alignment.topLeft,
                    end:Alignment.bottomRight,
                    colors: [Colors.blueGrey,Color.fromARGB(255, 14, 78, 110)],
                    //Color.fromARGB(255, 38, 61, 73)
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
                Text('Login:',
                 style:TextStyle(fontSize: 25,fontWeight: FontWeight.bold,
                 color:Colors.white,decoration: TextDecoration.underline)
                
                )
        
              ],
            ),
            const SizedBox(height: 20,),
                Row(
             children: [
             const  SizedBox(width:10),
              const SizedBox(
                width:107,
                child:  Text('Username:',style: TextStyle(
                           fontSize: 20,
                           fontWeight: FontWeight.bold,
                           color: Colors.white,
                          )
                          ),
              ),
            const SizedBox(width:25),
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
                  fillColor: Color.fromARGB(255, 255, 255, 255)
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
                width:107,
                child: Text('Password:',style: TextStyle(
                           fontSize: 20,
                           fontWeight: FontWeight.bold,
                           color: Colors.white,
                          )
                          ),
              ),
            const SizedBox(width:25),
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
              const SizedBox(height: 20,),
                        Row(
             children: [
              const SizedBox(width:60),
              const Text('new to our App? ',style: TextStyle(
             fontSize: 16,
             color: Colors.white,
             fontStyle: FontStyle.italic
            )
            ),
            
                InkWell       (
                onTap: ()=>_selectScreen(context),
                child: const Text('Register Now',style: TextStyle(
                           fontSize: 16,
                           color: Color.fromARGB(255, 233, 119, 253),
                           decoration: TextDecoration.underline
                          )
                          ),
              ),
             ],
            ),
            const SizedBox(height: 30,),
           OutlinedButton.icon(onPressed: ()async {
            if(_nameController.text=="" ||  _passwordController.text=="" ){
                  dialogs.informationL(context,"Invalid Inputs","please add the username and password to login!");
                  }
                  else {
                    await _handleLogin();
                
                  }
           },
                style: ButtonStyle(
                  backgroundColor: MaterialStateProperty.all(Colors.white)
            
                  ),
                  icon: const Icon(Icons.login_outlined,color: Colors.teal,),
                 label:const Text('Login',style: TextStyle(fontSize: 16,
                 color:Colors.teal),)
                 ),
                
             
        
           ],)
        
        
           ),
            
          ]),
        ),
      
        ),

    );
  }
}