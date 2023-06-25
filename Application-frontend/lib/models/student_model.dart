
class Student{

String name;
String phone;



Student({
required this.name ,
required this.phone,


});

  static Student fromJson(json)=>Student(
   name: json['userName'],
   phone: json['phoneNumber'],

  
  
  );

}