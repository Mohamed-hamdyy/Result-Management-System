import 'package:flutter/material.dart';
import 'package:rms_app/home/home.dart';
import 'admin/admin_add_course.dart';
import 'admin/admin_remove_course.dart';
import 'admin/admin_add_weight.dart';
import 'admin/admin_add_user.dart';
import 'admin/admin_add_admin.dart';
import 'admin/admin_add_inst.dart';
import 'Instructor/inst_add_grade.dart';
import 'home/register.dart';
import 'home/login.dart';

void main() { 
  runApp(const MyApp()); 
} 

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return  MaterialApp(
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
      fontFamily: 'times',    

      ),
      home: const Home(title: 'Welcome'),

      routes: {
      '/admin/addCourse':(context) => const AdminAddCourse(title:'Admin'),
      '/admin/addUser':(context) => const AdminAddUser(title: 'Admin'),
      '/admin/addWeight':(context) => const AdminAddWeight(title: 'Admin'),
      '/admin/removeCourse':(context) => const AdminRemoveCourse(title: 'Admin'),
      '/admin/addInst':(context) => const AdminAddInst(title: 'Admin'),
      '/admin/addAdmin':(context) => const AdminAddAdmin(title: 'Admin'),
       '/Inst/addGrade':(context) => const InstAddGrade(title: 'Instructor'),
       '/Register':(context) => const Register(title: ''),
       '/Login':(context) => const Login(title: ''),
       '/Home':(context) => const Home(title: 'Welcome'),
       },



    );
  }
}


class MyHomePage extends  StatefulWidget {
  const MyHomePage({super.key, required this.title});


  final String title;

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  int _counter = 0;

  void _incrementCounter() {
    setState(() {
    
      _counter++;
    });
  }

  @override
  Widget build(BuildContext context) {
   
    return Scaffold(
      appBar: AppBar(
       
        backgroundColor: Colors.blueAccent,
        // Here we take the value from the MyHomePage object that was created by
        // the App.build method, and use it to set our appbar title.
        title: Text(widget.title),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            const Text(
              'You have pushed the button this many times:',
            ),
            Text(
              '$_counter',
              style: Theme.of(context).textTheme.headlineMedium,
            ),
          ],
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: _incrementCounter,
        tooltip: 'Increment',
        child: const Icon(Icons.add),
      ), 
    );
  }
}
