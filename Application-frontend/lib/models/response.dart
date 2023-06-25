
class Response{

bool done;



Response({
required this.done ,


});

  static Response fromJson(json)=>Response(
   done: json['Added'],
  

  
  
  );

}