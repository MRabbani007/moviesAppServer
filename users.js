const fs = require("fs");

let users = [];

const readUsers = () => {
  try {
    fs.readFile("users.txt", (err, inputD) => {
      if (err) throw err;
      users = JSON.parse(inputD);
    });
  } catch (error) {
    console.log(error);
  }
};

const writeUsers = (users) => {
  // let fInput = "You are reading the content from Tutorials Point";
  let fInput = JSON.stringify(users);
  try {
    fs.writeFile("users.txt", fInput, (err) => {
      if (err) {
        console.log(err.message);
        throw err;
      }
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { users, readUsers, writeUsers };
