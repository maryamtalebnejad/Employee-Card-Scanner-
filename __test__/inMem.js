const Sequelize = require('sequelize');
const SequelizeSimpleCache = require('sequelize-simple-cache');
 
const sequelize = new Sequelize('avalog', 'maryam3','123456',{dialect:'mysql', host:'localhost'});
const Lo = require('../models/log').Logs

// initialize cache
const cache = new SequelizeSimpleCache({
  Lo: { ttl: 1 * 60 }, // 1 minutes
//   Page: { }, // default ttl is 1 hour
});
 
// add your models to the cache like this

// console.log(Loog)
// const Page = cache.init(sequelize.import('./models/page'));
 
// no caching for this one (because it's not configured to be cached)
// will only add dummy decorators to the model for a homogeneous interface to all models
// const Order = cache.init(sequelize.import('./models/order'));
 
// the Sequelize model API is fully transparent, no need to change anything.
// first time resolved from database, subsequent times from local cache.
// const fred = await Loog.findOne({ where: { userId: 1 }});
const logc = async function(){
  await Sequelize.sync()
  const Loog = await cache.init(Lo)
const x = await Loog.cache().create({
    userId: 1,
    timeStamp: '1399-10-03 17:33:33',
    inInside: true
})
cache.clear();
}
console.log( logc())
