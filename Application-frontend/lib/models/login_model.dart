

class LoginModel{
  String message;
  String? token;
  String? role;
  String? email;


  LoginModel({
 required this.message,
 this.token,
 this.role,
 this.email



  });


  static LoginModel fromJson(json)=>LoginModel(
   message: json['message'],
   token: json['token'],
   role: json['role'],
   email:json['email'],

  );

 


}