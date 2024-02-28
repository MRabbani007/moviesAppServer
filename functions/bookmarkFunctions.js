const Bookmark = require("../dbSchemas/bookmark");
const { ACTIONS } = require("./utils");

const handleBookmarks = async (userID, action) => {
  try {
    switch (action.type) {
      case ACTIONS.GET_BOOKMARKS: {
        console.log(userID, action);
        let data = await Bookmark.find({ userID: userID });
        return data;
      }
      case ACTIONS.ADD_BOOKMARK: {
        const newBookmark = new Bookmark({
          id: crypto.randomUUID(),
          userID: userID,
          movieID: action.movie.id,
          name: action.movie.name,
          image: action.movie.image,
          year: action.movie.year,
          rating: action.movie.rating,
          category: action.movie.category,
          createDate: new Date(),
        });
        await newBookmark.save();
        return "Added";
      }
      case ACTIONS.REMOVE_BOOKMARK: {
        Bookmark.deleteOne({ userID: userID, id: action.movie.id }).exec();
        return "Removed";
      }
      default: {
      }
    }
  } catch (error) {
    return "Error";
  }
};

module.exports = { handleBookmarks };
