const express = require("express");
const mongoose = require("mongoose");
var cors = require('cors')
var bodyParser = require('body-parser')


// THIS IS WRONG NEVER DO THAT !! Only for the task we put the DB Link here!! NEVER DO THAAAT AGAIN !!
//Check db connection links in README file
const MongoURI =
  "mongodb+srv://mohamedhamdyy83:wOrbTxhJ8OwzPr33@cluster0.e1t6ay9.mongodb.net/?retryWrites=true&w=majority";

//App variables
const app = express();
app.use(cors())
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json())
const port = process.env.PORT || "7000";
// #Importing the userController

// configurations
// Mongo DB
mongoose
  .connect(MongoURI)
  .then(() => {
    console.log("MongoDB is now connected!");
    // Starting server
    app.listen(port, () => {
      console.log(`Listening to requests on http://localhost:${port}`);
    });
  })
  .catch((err) => console.log(err));
/*
                                                    Start of your code
*/
app.get("/home", (req, res) => {
  res.status(200).send("You have everything installed!");
});

// #Routing to userController here


const Login = require("./Routes/Login");

const CreateRouter = require("./Routes/Creation");
const StudentRouter = require("./Routes/StudentRoutes");
const AdminRouter = require("./Routes/AdminRoutes");


app.use("/",CreateRouter);
app.use("/",StudentRouter);
app.use("/",AdminRouter);
app.use("/", Login);





