const { users, readUsers, writeUsers } = require("./users");

const verUser = (userName) => {
  let verUserName = true;
  let result = "accepted";
  // Check UserName Criteria
  // Check if empty
  if (userName === "") {
    verUserName = false;
    result = "username cannot be empty";
  }
  // Check Length
  if ([...userName].length < 1) {
    verUserName = false;
    result = "username should be at least 6 characters long";
  }
  // Check if contains special characters

  // Check if already exist
  users.forEach((user, index) => {
    if (user.username === userName) {
      verUserName = false;
      result = "username already exist";
    }
  });

  return { verUserName: verUserName, result: result };
};

const verPass = (password) => {
  let verPassword = true;
  let result = "accepted";
  if (password === "") {
    verPassword = false;
    result = "password cannot be empty";
  }
  // Check Length
  if ([...password].length < 1) {
    verPassword = false;
    result = "password should be at least 6 characters long";
  }
  return { verPassword: verPassword, resultP: result };
};

const signup = (userName, password) => {
  readUsers();
  let verUserName = true;
  let verPassword = true;
  let result = "";
  let resultP = "";
  ({ verUserName, result } = verUser(userName));
  ({ verPassword, resultP } = verPass(password));
  if (verUserName && verPassword) {
    users.push({ username: userName, pass: password });
    console.log(users);
    writeUsers([...users]);
  }
  return { verUserName: verUserName, result: result };
};

module.exports = signup;
