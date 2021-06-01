const Sequelize = require("sequelize");
const database = require("../utils/database");

const Logs = database.define("logs", {
  userId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: "Users",
      key: "userId",
    },
    validate: {
      notEmpty: true,
      isNumeric: true,
      isInt: true,
    },
  },
  timeStamp: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  isInside: {
    type: Sequelize.BOOLEAN,
    allownull: false,
    primaryKey: false,
    validate: {
      notEmpty: true,
    },
  },
});

module.exports = { Logs: Logs };
