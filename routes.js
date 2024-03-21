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
