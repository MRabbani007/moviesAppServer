const { users, readUsers, writeUsers } = require("./users");

const signInUser = (username, password, data) => {
  readUsers();
  let verUserName = false;
  let verPassword = false;
  let userIndex = -1;
  users.forEach((user, index) => {
    if (username === user.username) {
      verUserName = true;
      userIndex = index;
      if (user.pass === password) {
        verPassword = true;
      }
    }
  });
  if (verUserName && verPassword) {
    users[userIndex].key = crypto.randomUUID();
    writeUsers();
    return "success";
  } else if (verUserName) {
    return "Wrong Password";
  } else {
    return "Wrong UserName";
  }
};

module.exports = signInUser;
