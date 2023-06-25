
class Response2{

bool done;



Response2({
required this.done ,


});

  static Response2 fromJson(json)=>Response2(
   done: json['Removed'],
  

  
  
  );

}