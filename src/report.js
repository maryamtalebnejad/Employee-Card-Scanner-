const Logs = require("../models/log").Logs;
const Cards = require("../models/card").Cards;
const Users = require("../models/user").Users;
const Sequelize = require("sequelize");

class Report {
  async reporter(firstName, lastName) {
    try {
      const currentUser = Users.findOne({
        where: {
          firstName: firstName,
          lastName: lastName,
        },
      });
      const usr = await Logs.findAll({
        where: { userId: 11 },
      });
      console.log(usr)
      for (i in usr) {
        console.log(usr[i]);
      }
    } catch (err) {
      return err;
    }
  }
}

const x = new Report();
x.reporter("mary", "xxx");

module.exports = { Report: Report };
