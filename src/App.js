const express = require("express");
const mongoose = require("mongoose");
// THIS IS WRONG NEVER DO THAT !! Only for the task we put the DB Link here!! NEVER DO THAAAT AGAIN !!
//Check db connection links in README file
const MongoURI =
  "mongodb+srv://Ahmedyo2001:vf17tWhWIGBEpeZr@acl.s266wrp.mongodb.net/?retryWrites=true&w=majority";

//App variables
const app = express();
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

const userrouter = require("./Routes/creationAPI");

const Hosnyrouter = require("./Routes/HosnyRoutes");

app.use("/", Hosnyrouter);
app.use("/", userrouter);
