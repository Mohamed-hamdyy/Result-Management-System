

class Course{
  int id;
  String code;
  String name ;
  String hours;
  String quizNO;

  Course({
 required this.id,
 required this.code,
 required this.name,
 required this.hours,
 required this.quizNO
  });


  static Course fromJson(json)=>Course(
   id: json['courseId'],
   code: json['code'],
   name: json['name'],
   hours:json['hours'],
   quizNO: json['quizNo'],
  
  
  );

 


}