const mongoose = require('mongoose')
require('dotenv').config()

const MongoDb = ()=>{
    mongoose.Promise = global.Promise;
mongoose
  .connect(
    process.env.MONGODB,
    {
      useNewUrlParser: true,
    }
  )
  .then(console.log("Database connect "))
  .catch(console.error());
}

module.exports = MongoDb()