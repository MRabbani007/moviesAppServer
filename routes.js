const express = require("express");
const router = express.Router();
// Model for mongodb
const { handleBookmarks } = require("./functions/bookmarkFunctions");
const { getUserID, signIn, signUp } = require("./functions/userFunctions");

router.get("/", (req, res) => {
  res.json("Server is Running");
});

//Get all Method
router.get("/getall", async (req, res) => {
  try {
    res.json("getall");
    // const data = await user.find();
    // res.json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

//Get by ID Method
router.get("/getOne/:id", (req, res) => {
  res.send(req.params.id);
});

//Post Method
router.post("/", (req, res) => {
  res.send("Post API");
});

// Signin User
router.post("/signin", async (req, res) => {
  try {
    let userName = req.body.userName;
    let password = req.body.password;
    console.log("signin req:", userName, password);
    let result = await signIn(userName, password);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json("Error: Signin");
  }
});

// Signup User
router.post("/signup", async (req, res) => {
  try {
    let userName = req.body.userName;
    let password = req.body.password;
    console.log("signup req:", userName, password);
    let result = await signUp(userName, password);
    res.json(result);
  } catch (error) {
    res.json("Error: Signup");
  }
});

// TODO: Remove / add bookmark old
router.post("/user", async (req, res) => {
  // let clientusername = req.body.user;
  // let addedBookMark = req.body.movieBookmark;
  // let bookMarkDirection = req.body.direction;
  // console.log("update req", clientusername, addedBookMark);
  // try {
  //   const data = await user.updateOne(
  //     { userName: clientusername },
  //     { $push: { movieBookMarks: addedBookMark } }
  //   );
  //   console.log("data", data);
  // } catch (error) {
  //   console.log(error);
  // }
  res.json("added");
});

router.post("/bookmarks/", async (req, res) => {
  try {
    let userName = req.body.userName;
    let action = req.body.action;
    let userID = await getUserID(userName);
    console.log("bookmark request:", action.type);
    let response = await handleBookmarks(userID, action);
    res.json(response);
  } catch (error) {
    console.log(error);
    res.json("Error");
  }
});

//Update by ID Method
router.patch("/update/:id", (req, res) => {
  res.send("Update by ID API");
});

//Delete by ID Method
router.delete("/delete/:id", (req, res) => {
  res.send("Delete by ID API");
});

module.exports = router;
