

class Quiz{
  List n;



  Quiz({
 required this.n,



  });


  static Quiz fromJson(json)=>Quiz(
   n: json['a'],
  

  
  
  );

 


}