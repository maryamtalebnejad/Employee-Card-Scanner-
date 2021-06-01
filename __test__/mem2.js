var SequelizeMock = require("sequelize-mock");

// Setup the mock database connection
var DBConnectionMock = new SequelizeMock();

// Define our Model
var UserMock = DBConnectionMock.define("logs", {
  userId: 121,
  timeStamp: "1400-01-01 23:23:23",
  isInside: true,
});

// From there we can start using it like a normal model
UserMock.findOne({
  where: {
    userId: 121,
  },
}).then(function (user) {
  // `user` is a Sequelize Model-like object
  return user.get("timeStamp");
});
