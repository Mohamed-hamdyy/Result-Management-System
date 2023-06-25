import 'package:flutter/material.dart';




class Dialogs{
  void _selectScreen(BuildContext ctx, int n  ){
    Navigator.pop(ctx);
    Navigator.pop(ctx);


 }
void _selectScreen2(BuildContext ctx ){
 Navigator.of(ctx).pushReplacementNamed(
'/Home'

 );
}


  informationA(BuildContext context ,String title ,String descrip){
    return showDialog(
      context: context, 
      barrierDismissible:false ,
      builder:(BuildContext context){
       return AlertDialog(
        actionsPadding: const EdgeInsets.fromLTRB(0, 5, 30,5),
          title: Text(title,style: const TextStyle(
            fontWeight:FontWeight.bold,
            fontSize: 23,
            color: Colors.red,
          ),),
        content: SingleChildScrollView(
          child: ListBody(
            children: [
               Container(
                width: 60,
                height:60 ,
           decoration: BoxDecoration(
                shape: BoxShape.circle,
                 
                 border: Border.all(width: 2,
                color: Colors.grey
                ),
                ),
                margin: const EdgeInsets.fromLTRB(10,3,3,10),
                child:const Image(image: AssetImage('assets/images/errorDialog.png')),
                ),

            Text(descrip,style: const TextStyle(
            fontSize: 17,
            
          )),
          
            ]),

        ),
      actions: [
 
      OutlinedButton(onPressed: (){
                Navigator.pop(context);
                
                },
              style: ButtonStyle(
                backgroundColor: MaterialStateProperty.all(Colors.tealAccent),
                
                ),
               child:const Text('Edit Inputs',style: TextStyle(color:Colors.redAccent),)
               )
      ],
       );



      }
      
       
      
      
      
      );



  }
confirmationA(BuildContext context ,String title ,String descrip,int n ){
    return showDialog(
      context: context, 
      barrierDismissible:false ,
      builder:(BuildContext context){
       return AlertDialog(
        actionsPadding: const EdgeInsets.fromLTRB(0, 5, 30,5),
          title: Text(title,style: const TextStyle(
            fontWeight:FontWeight.bold,
            fontSize: 23,
            color: Colors.green,
          ),),
        content: SingleChildScrollView(
          child: ListBody(
            children: [
               Container(
                width: 60,
                height:60 ,
           decoration: BoxDecoration(
                 shape: BoxShape.circle,
                 
                 border: Border.all(width: 2,
                color: Colors.grey
                ),
                ),
                margin: const EdgeInsets.fromLTRB(10,3,3,10),
                child: n==1? const Image(image: AssetImage('assets/images/confirm.png'))
                : const  Image(image: AssetImage('assets/images/info2.png'))

  ),
            Text(descrip,style: const TextStyle(
            fontSize: 17,
            
          )),
          
            ]),

        ),
      actions: [
      OutlinedButton(onPressed: (){
                Navigator.pop(context);
                
                },
              style: ButtonStyle(
                backgroundColor: MaterialStateProperty.all(Colors.tealAccent),
                
                ),
               child:const Text('Continue',style: TextStyle(color:Colors.lightGreen),)
               )
      ],
       );



      }
      
       
      
      
      
      );



  }
informationI(BuildContext context ,String title ,String descrip){
    return showDialog(
      context: context, 
      barrierDismissible:false ,
      builder:(BuildContext context){
       return AlertDialog(
        actionsPadding: const EdgeInsets.fromLTRB(0, 5, 30,5),
          title: Text(title,style: const TextStyle(
            fontWeight:FontWeight.bold,
            fontSize: 23,
            color: Colors.red,
          ),),
        content: SingleChildScrollView(
          child: ListBody(
            children: [
               Container(
                width: 60,
                height:60 ,
           decoration: BoxDecoration(
                shape: BoxShape.circle,
                 
                 border: Border.all(width: 2,
                color: Colors.grey
                ),
                ),
                margin: const EdgeInsets.fromLTRB(10,3,3,10),
                child:const Image(image: AssetImage('assets/images/errorDialog.png')),
                ),

            Text(descrip,style: const TextStyle(
            fontSize: 17,
            
          )),
          
            ]),

        ),
      actions: [
      OutlinedButton(onPressed: (){
             Navigator.pop(context);
           },
          style: ButtonStyle(backgroundColor: MaterialStateProperty.all(Colors.tealAccent)),
           child:const Text('Edit Inputs',style: TextStyle(color:Colors.redAccent),)
           ),
      ],
       );



      }
      
       
      
      
      
      );



  }
confirmationI(BuildContext context ,String title ,String descrip,int n ){
    return showDialog(
      context: context, 
      barrierDismissible:false ,
      builder:(BuildContext context){
       return AlertDialog(
        actionsPadding: const EdgeInsets.fromLTRB(0, 5, 30,5),
          title: Text(title,style: const TextStyle(
            fontWeight:FontWeight.bold,
            fontSize: 23,
            color: Colors.green,
          ),),
        content: SingleChildScrollView(
          child: ListBody(
            children: [
               Container(
                width: 60,
                height:60 ,
           decoration: BoxDecoration(
                 shape: BoxShape.circle,
                 
                 border: Border.all(width: 2,
                color: Colors.grey
                ),
                ),
                margin: const EdgeInsets.fromLTRB(10,3,3,10),
                child: n==1? const Image(image: AssetImage('assets/images/confirm.png'))
                : const  Image(image: AssetImage('assets/images/info2.png'))

  ),
            Text(descrip,style: const TextStyle(
            fontSize: 17,
            
          )),
          
            ]),

        ),
      actions: [
      OutlinedButton(onPressed: (){
         
             _selectScreen(context,1);
           },
          style: ButtonStyle(backgroundColor: MaterialStateProperty.all(Colors.tealAccent)),
           child:const Text('Continue',style: TextStyle(color:Colors.lightGreen),)
           ),
      ],
       );



      }
      
       
      
      
      
      );



  }
 informationL(BuildContext context ,String title ,String descrip){
    return showDialog(
      context: context, 
      barrierDismissible:false ,
      builder:(BuildContext context){
       return AlertDialog(
          actionsPadding: const EdgeInsets.fromLTRB(0, 5, 30,5),
            title: Text(title,style: const TextStyle(
              fontWeight:FontWeight.bold,
              fontSize: 23,
              color: Colors.red,
            ),),
          content: SingleChildScrollView(
            child: ListBody(
              children: [
                 Container(
                width: 60,
                height:60 ,
           decoration: BoxDecoration(
                shape: BoxShape.circle,
                 
                 border: Border.all(width: 2,
                color: Colors.grey
                ),
                ),
                margin: const EdgeInsets.fromLTRB(10,3,3,10),
                child:const Image(image: AssetImage('assets/images/errorDialog.png')),
                ),
              
  
              Text(descrip,style: const TextStyle(
              fontSize: 17,
              
            )),
            
              ]),
       
          ),
             actions: [
              
             OutlinedButton(onPressed: (){
                  Navigator.pop(context);
                  
                  },
                style: ButtonStyle(
                  backgroundColor: MaterialStateProperty.all(Colors.tealAccent),
                  
                  ),
                 child:const Text('Edit Inputs',style: TextStyle(color:Colors.redAccent),)
                 )
             ],
         );
       



      }
      
       
      
      
      
      );



  }
  confirmationL(BuildContext context ,String title ,String descrip,int n ){
    return showDialog(
      context: context, 
      barrierDismissible:false ,
      builder:(BuildContext context){
       return AlertDialog(
        actionsPadding: const EdgeInsets.fromLTRB(0, 5, 30,5),
          title: Text(title,style: const TextStyle(
            fontWeight:FontWeight.bold,
            fontSize: 23,
            color: Colors.green,
          ),),
        content: SingleChildScrollView(
          child: ListBody(
            children: [
               Container(
                width: 60,
                height:60 ,
           decoration: BoxDecoration(
                 shape: BoxShape.circle,
                 
                 border: Border.all(width: 2,
                color: Colors.grey
                ),
                ),
                margin: const EdgeInsets.fromLTRB(10,3,3,10),
                child: n==1? const Image(image: AssetImage('assets/images/confirm.png'))
                : const  Image(image: AssetImage('assets/images/info2.png'))

  ),
            Text(descrip,style: const TextStyle(
            fontSize: 17,
            
          )),
          
            ]),

        ),
      actions: [
      OutlinedButton(onPressed: (){
         Navigator.pop(context);
           },
          style: ButtonStyle(backgroundColor: MaterialStateProperty.all(Colors.tealAccent)),
           child:const Text('Continue',style: TextStyle(color:Colors.lightGreen),)
           ),
      ],
       );



      }
      
       
      
      
      
      );



  }
  
 alertLogin(BuildContext context ,String title ,String descrip){
    return showDialog(
      context: context, 
      barrierDismissible:false ,
      builder:(BuildContext context){
       return AlertDialog(
        actionsPadding: const EdgeInsets.fromLTRB(0, 5, 30,5),
          title: Text(title,style: const TextStyle(
            fontWeight:FontWeight.bold,
            fontSize: 23,
            color: Colors.green,
          ),),
        content: SingleChildScrollView(
          child: ListBody(
            children: [
               Container(
                width: 60,
                height:60 ,
           decoration: BoxDecoration(
                 shape: BoxShape.circle,
                 
                 border: Border.all(width: 2,
                color: Colors.grey
                ),
                ),
                margin: const EdgeInsets.fromLTRB(10,3,3,10),
                child:const  Image(image: AssetImage('assets/images/info2.png'))

  ),
            Text(descrip,style: const TextStyle(
            fontSize: 17,
            
          )),
          
            ]),

        ),
      actions: [
      OutlinedButton(onPressed: (){
         Navigator.pop(context);
           },
          style: ButtonStyle(backgroundColor: MaterialStateProperty.all(Colors.tealAccent)),
           child:const Text('Edit Data',style: TextStyle(color:Colors.lightGreen),)
           ),
      ],
       );



      }
      
       
      
      
      
      );



  }
 alertLogout(BuildContext context ,String title ,String descrip){
    return showDialog(
      context: context, 
      barrierDismissible:false ,
      builder:(BuildContext context){
       return AlertDialog(
        actionsPadding: const EdgeInsets.fromLTRB(0, 5, 30,5),
          title: Text(title,style: const TextStyle(
            fontWeight:FontWeight.bold,
            fontSize: 23,
            color: Colors.green,
          ),),
        content: SingleChildScrollView(
          child: ListBody(
            children: [
               Container(
                width: 60,
                height:60 ,
           decoration: BoxDecoration(
                 shape: BoxShape.circle,
                 
                 border: Border.all(width: 2,
                color: Colors.grey
                ),
                ),
                margin: const EdgeInsets.fromLTRB(10,3,3,10),
                child:const  Image(image: AssetImage('assets/images/info2.png'))

  ),
            Text(descrip,style: const TextStyle(
            fontSize: 17,
            
          )),
          
            ]),

        ),
      actions: [
        OutlinedButton(onPressed: (){
         _selectScreen2(context);
           },
          style: ButtonStyle(backgroundColor: MaterialStateProperty.all(Colors.tealAccent)),
           child:const Text('Yes',style: TextStyle(color:Colors.lightGreen),)
           ),

      OutlinedButton(onPressed: (){
         Navigator.pop(context);
           },
          style: ButtonStyle(backgroundColor: MaterialStateProperty.all(Colors.tealAccent)),
           child:const Text('No',style: TextStyle(color:Colors.lightGreen),)
           ),
      ],
       );



      }
      
       
      
      
      
      );



  }



}