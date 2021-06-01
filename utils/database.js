const Sequelize = require('sequelize');
const sequelize = new Sequelize('avalog', 'maryam3','123456',{dialect:'mysql', host:'localhost'});
try{
     sequelize.authenticate();
    console.log('connected.')
} catch(err){
    console.error('not connected', err)
}

//sequelize.close()
module.exports = sequelize;
