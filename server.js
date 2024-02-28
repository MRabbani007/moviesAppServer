const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
require("dotenv").config({ path: path.resolve(`${__dirname}/config/.env`) });
// Router for client requests
const routes = require("./routes");
// Connect to mongodb
require("./mongo");

// const signin = require("./signin");
// const signup = require("./signup");

const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", routes);
// app.use("/api", user);

// Default path
app.get("/", (req, res) => {
  res.json("Server Running");
});

app.listen(PORT, () => {
  console.log("server started on port " + PORT);
});
