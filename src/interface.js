const User = require("../src/user").User;
const Log = require("../src/log").Log;
const prompt = require("prompt-sync")();
const clear = require("clear");
const card = require("../models/card");

function mainBoard() {
  clear();
  console.log("1. add user");
  console.log("2. delete user");
  console.log("3. log user");
  console.log("4. update user");
  console.log("5. quit");
  let key = prompt("Choose your key: ");
  selection(key);
}
async function userAdd() {
  console.log(
    "===================== Enter user information ====================="
  );
  var firstName = prompt("Enter firstName : ");
  var lastName = prompt("Enter lastName : ");
  var personalId = prompt("Enter personalId : ");
  var cardId = prompt("Enter cardId : ");
  const user = new User();
  await user.addUser(firstName, lastName, personalId, cardId);
  let back = prompt("press -q- to back to mainBoard and -a- to continue: ");
  if (back === "q") return  mainBoard();
  else if (back == "a") return await userAdd();
}
async function recordLog() {
    while (true) {
    const log = new Log();
    let cardId = prompt("==================Enter your card====================== : ");
    await log.login(cardId);
    if (cardId === "q") {
      return  mainBoard();
    }
  }
}

async function userDelete(){
  console.log("==============Enter user information to unhire================")
  var firstName = prompt("Enter firstName : ");
  var lastName = prompt("Enter lastName : ");
  var personalId = prompt("Enter personalId : ");
  const user = new User();
  await user.deleteUser(firstName, lastName, personalId);
  let back = prompt("press -q- to back to mainBoard and -d- to continue: ");
  if (back === "q") return  mainBoard();
  else if (back == "d") return await userDelete();
}
async function userUpdate(){
  console.log("=============change card id====================")
  const oldCardId = prompt("Enter old card id:");
  const newCardId = prompt("Enter new card id:");
  const user = new User();
  await user.updateUser(oldCardId, newCardId);
  let back = prompt("press -q- to back to mainBoard and -u- to continue: ");
  if (back === "q") return  mainBoard();
  else if (back == "u") return await userUpdate();
}
function selection(key) {
  switch (key) {
    case "1":
      userAdd();
      break;

    case "2":
      userDelete();
      break;

    case "3":
      recordLog();
      break;

    case "4":
      userUpdate();
      break;
    case "5":
      console.log("Bye.")
      break;
  }
}

mainBoard();
