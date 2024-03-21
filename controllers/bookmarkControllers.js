const ACTIONS = require("../data/actions");
const Bookmark = require("../db_schemas/bookmark");
const { getUserID } = require("./userControllers");

const handleBookmark = async (req, res) => {
  try {
    const action = req?.body?.action;
    const userName = action?.payload?.userName;
    const { type, payload } = action;

    let userID = await getUserID(userName);
    if (!userID) {
      return res.sendStatus(401);
    }

    console.log("Bookmark Request:", type);
    switch (type) {
      case ACTIONS.BOOKMARKS_GET: {
        const data = await Bookmark.find({ userID: userID });
        if (!data) {
          return res.status(200).json([]);
        } else {
          return res.status(200).json(data);
        }
      }
      case ACTIONS.BOOKMARKS_ADD: {
        const { movieID, name, image, year, rating, category } =
          payload.bookmark;
        const newBookmark = new Bookmark({
          id: crypto.randomUUID(),
          userID: userID,
          movieID,
          name,
          image,
          year,
          rating,
          category,
          createDate: new Date(),
        });
        const data = await newBookmark.save();

        return res
          .status(200)
          .json({ status: "success", message: "Bookmark Added" });
      }
      case ACTIONS.BOOKMARKS_DELETE: {
        const data = await Bookmark.deleteOne({
          userID: userID,
          id: payload.bookmarkID,
        }).exec();

        return res
          .status(200)
          .json({ status: "success", message: "List updated" });
      }
      default: {
        return res
          .status(204)
          .json({ status: "failed", message: "action not found" });
      }
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: "error", message: "Server Error" });
  }
};

const handleGetAll = async (req, res) => {
  try {
    const action = req?.body?.action;
    const userName = action?.payload?.userName;
    const { type, payload } = action;

    let userID = await getUserID(userName);
    if (!userID) return res.sendStatus(401);

    console.log("Bookmark Request:", type);

    let data = await Bookmark.find({});
    if (!data) {
      return res.status(200).json([]);
    } else {
      return res.status(200).json(data);
    }
  } catch (error) {
    console.log(error);
    return res.status(500);
  }
};

module.exports = { handleBookmark, handleGetAll };
