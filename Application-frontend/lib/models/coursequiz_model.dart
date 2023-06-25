

class CourseQ{
  int id;
  String code;
  String name ;
  String hours;
  String quizes;
  String? quizW;
  String? examW;
  String? assignW;


  CourseQ({
 required this.id,
 required this.code,
 required this.name,
 required this.hours,
 required this.quizes,
 this.quizW,
 this.examW,
 this.assignW



  });


  static CourseQ fromJson(json)=>CourseQ(
   id: json['courseId'],
   code: json['code'],
   name: json['name'],
   hours:json['hours'],
   quizes: json['quizNo'],
   quizW:json['quizesWeight'],
   examW: json['ExamsWeight'],
   assignW: json['AssignWeight']


  
  
  );

 


}