const user = require("../src/user").User;
const Log = require("../src/log").Log;
const Logs = require("../models/log").Logs;
const Cards = require("../models/card").Cards;
const Users = require("../models/user").Users;
const database = require("../utils/database");
var SequelizeMock = require("sequelize-mock");

var DBConnectionMock = new SequelizeMock();

test("should record a login", async () => {

  newRecord = recordLog('123', '1400-01-01 23:23:23', false);
  const user = await newRecord.findOne({ where: {userId: '123'}})
  expect(user.get('userId')).toEqual('123')
  expect(user.get('timeStamp')).toEqual('1400-01-01 23:23:23')
  expect(user.get('isInside')).toEqual(false)
});

function recordLog(userId,timeStamp, isInside){
  var UserMock = DBConnectionMock.define("logs", {
    userId: userId,
    timeStamp: timeStamp,
    isInside: isInside,
  });
  return UserMock;
}

UserMock.findOne({
  where: {
    userId: 121,
  },
}).then(function (user) {
  return user.get("timeStamp");
});
