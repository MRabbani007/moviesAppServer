const User = require("../dbSchemas/user");

// TODO: implement validation
const validateUserName = (username) => {};
const validatePassword = (password) => {};
const validateEmail = (email) => {};

const getUserID = async (userName) => {
  try {
    let data = await User.find({ userName: userName });
    if (data.length !== 0) {
      return data[0].id;
    } else {
      return "123";
    }
  } catch (error) {
    return "Error: get username";
  }
};

const signIn = async (username, password) => {
  try {
    let data = await User.find({ userName: username });
    if (data.length === 0) {
      return "User not found";
    } else if (data[0].userName === username) {
      if (data[0].password === password) {
        return "accepted";
      } else {
        return "Wrong Password";
      }
    } else {
      return "Wrong Details";
    }
  } catch (error) {
    return "Error: signin";
  }
};

const signUp = async (username, password) => {
  try {
    // TODO: Validate username and password
    const data = await User.find({ userName: username });
    // check if already registered
    if (data.length !== 0) {
      if (data[0].userName === username) {
        return "already registered";
      } else {
        // TODO: check
        return "already registered";
      }
    } else {
      // if username not in db register new user
      // save data into db model
      const newUser = new User({
        id: crypto.randomUUID(),
        userName: username,
        password: password,
        email: "",
        createDate: new Date(),
        key: "",
        lastLoginDate: new Date("1900-01-01"),
      });
      // save request to db
      await newUser.save();
      return "registered";
    }
  } catch (error) {
    return "Error: signup";
  }
};

module.exports = { getUserID, signIn, signUp };
