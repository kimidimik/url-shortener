const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  uniqueID: String,
  url: String,
  shortUrl: String
})

module.export = mongoose.model('User', userSchema)
