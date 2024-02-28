const mongoose = require("mongoose");

const bookmarkSchema = new mongoose.Schema({
  id: { type: String, required: false },
  userID: { type: String, required: false },
  movieID: { type: String, required: false },
  name: { type: String, required: false },
  image: { type: String, required: false },
  year: { type: String, required: false },
  rating: { type: String, required: false },
  category: [{ type: String, required: false }],
  createDate: { type: Number, required: false },
});

const Bookmark = mongoose.model("Bookmark", bookmarkSchema);

module.exports = Bookmark;
