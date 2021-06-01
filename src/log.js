const Logs = require("../models/log").Logs;
const Cards = require("../models/card").Cards;
const Users = require("../models/user").Users;
// const sequelize = require("../utils/database");
const JalaliDateTime = require("jalali-date-time").JalaliDateTime;
const jalali = JalaliDateTime();

const time = jalali.now({
  // timezone: "+03:30",
  fullTextFormat: "W, D N Y H:I:S",
  titleFormat: "W, D N Y",
  dateFormat: "Y-M-D",
  timeFormat: "H:I:S",
});

class Log {
  
  async personInside(userId) {
     return await Logs.findOne({
      limit: 1,
      where: { userId: userId },
      order: [["createdAt", "DESC"]],
    })
      .then((user) => {
        if (user == null || user.isInside == false  )  console.log("Welcome");
        else console.log("Bye");

        if(user == null) return false;
        else return user.isInside;
      })
      .catch((err) => {
        return err;
      });
  }

  async login(cardId) {
    return await Cards.findByPk(cardId)
      .then(async (cardOwner) => {
       return Logs.create({
          userId: cardOwner.userId,
          timeStamp: time,
          isInside: !(await this.personInside(cardOwner.userId)),
        });
      })
      .then((record) => {
        return record
      })
      .catch((err) => {
        return err;
      })
}
}

const log = new Log();
// const userLog =log.login("144");
module.exports = { Log: Log };

