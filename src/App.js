const express = require("express");
const mongoose = require("mongoose");
var cors = require('cors')
var bodyParser = require('body-parser')


// THIS IS WRONG NEVER DO THAT !! Only for the task we put the DB Link here!! NEVER DO THAAAT AGAIN !!
//Check db connection links in README file
const MongoURI =
  "mongodb+srv://Ahmedyo2001:vf17tWhWIGBEpeZr@acl.s266wrp.mongodb.net/?retryWrites=true&w=majority";

//App variables
const app = express();
app.use(cors())
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json())
const port = process.env.PORT || "7000";
const user = require("./Models/User");
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

const Hossamrouter = require("./Routes/moo7a");

const userrouter = require("./Routes/creationAPI");

const Hosnyrouter = require("./Routes/HosnyRoutes");
app.use("/api", Hossamrouter);
const Yehiarouter = require("./Routes/YehiaRoutes");

const hamdyRouter = require("./Routes/HamdyRoutes");

const HosnyandHossamm2 = require("./Routes/HosnyandHossamm2");
const HamdyandEyadm2 = require("./Routes/HamdyandEyadm2");
const Login = require("./Routes/Login");
const m3 = require("./Routes/milestone3");




app.use("/api", HamdyandEyadm2);

app.use("/api", Yehiarouter);
app.use("/api", Hosnyrouter);
app.use("/api", userrouter);
app.use("/api", hamdyRouter);
app.use("/api", HosnyandHossamm2);
app.use("/api", Login);
app.use("/api", m3);





