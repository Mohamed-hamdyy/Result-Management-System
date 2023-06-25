
class Response4{

bool done;



Response4({
required this.done ,


});

  static Response4 fromJson(json)=>Response4(
   done: json['Created'],
  

  
  
  );

}