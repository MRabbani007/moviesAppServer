const express = require("express");
const verifyJWT = require("../middleware/verifyJWT");

const router = express();

// Routers for client requests
const userRouter = require("./userRouter");
const bookmarkRouter = require("./bookmarkRouter");

// Handle user registration and authentication
router.use("/user", userRouter);

// Verify JWT Middleware applies to website content
router.use(verifyJWT);

router.use("/bookmarks", bookmarkRouter);

module.exports = router;
