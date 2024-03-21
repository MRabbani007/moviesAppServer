const express = require("express");
const verifyRoles = require("../middleware/verifyRoles");
const {
  handleBookmark,
  handleGetAll,
} = require("../controllers/bookmarkControllers");
const bookmarkRouter = express();

bookmarkRouter.post("/getUser", handleBookmark);
bookmarkRouter.post("/add", handleBookmark);
bookmarkRouter.post("/delete", handleBookmark);

bookmarkRouter.post("/getAll", handleGetAll);

module.exports = bookmarkRouter;
