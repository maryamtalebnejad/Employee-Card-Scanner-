const Sequelize = require('sequelize');

const sequelize = require('../utils/database');

const Users = sequelize.define('users',{
    userId:{
        type: Sequelize.INTEGER,
        autoIncrement : true,
        allowNull: false, 
        primaryKey: true
    },
    firstName:{
        type: Sequelize.STRING,
        allownull: false,
        validate: {
            isAlpha: true,
            notEmpty: false 
        }
    },
    lastName:{
        type: Sequelize.STRING,
        allownull: false,
        validate: {
            isAlpha: true,
            notEmpty: true 
        }
    },
    personalId:{
        type: Sequelize.STRING,
        unique:true,
        validate:{
            isNumeric: true
        }
    }, workingTime:{
        type : Sequelize.STRING,
        validate: {
            isAlpha : true,
        }

    },
    activeMode : {
        type : Sequelize.STRING,
        validate: {
            isAlpha : true,

        }
    }
});

module.exports = {
    Users : Users
}
