const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  id: { type: String, required: false },
  userName: { type: String, required: false },
  password: { type: String, required: false },
  email: { type: String, required: false },
  key: { type: String, required: false },
  createDate: { type: Date, required: false },
  lastLoginDate: { type: Date, required: false },
  movieBookMarks: [String],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
