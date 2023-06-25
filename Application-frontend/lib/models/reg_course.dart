

class RegCourse{
  String code;
  String name ;
  String hours;
  List quizes;
  List total;
  String examGrade;
  String examState;
  String examTotal;

  RegCourse({
 required this.code,
 required this.name,
 required this.hours,
required this.quizes,
required this.total,
required this.examGrade,
required this.examState,
required this.examTotal,



  });


  static RegCourse fromJson(json)=>RegCourse(
   code: json['code'],
   name: json['name'],
   hours:json['hours'],
   quizes: json['quizesGrades'],
   total: json['quizesTotal'],
   examGrade: json['examGrade'],
   examState: json['examState'],
   examTotal:json['examTotal'],

  
  );

 


}