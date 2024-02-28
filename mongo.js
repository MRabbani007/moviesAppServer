//  MongoDB connection via mongoose
const mongoose = require("mongoose");
require("dotenv").config();

const p = "Ol2x9DwoWM0tkMmH";
const MONGODB_URI =
  "mongodb+srv://mrabbani:Ol2x9DwoWM0tkMmH@cluster0.je8fiem.mongodb.net/?retryWrites=true&w=majority";

const uri = `mongodb+srv://mnrabbani:Ol2x9DwoWM0tkMmH@myivi.xhjrir2.mongodb.net/?retryWrites=true&w=majority`;

// mongoose.set("strictQuery", false);

const Main = async () => {
  //process.env.MONGODB_URI
  await mongoose
    .connect(MONGODB_URI, {})
    .then((dbo) => {
      console.log("mongodb connected");
    })
    .catch(() => {
      console.log("Mongo.js: failed");
    });
};

Main().catch((err) => console.log(err));
