
class Response3{

bool done;



Response3({
required this.done ,


});

  static Response3 fromJson(json)=>Response3(
   done: json['created'],
  

  
  
  );

}