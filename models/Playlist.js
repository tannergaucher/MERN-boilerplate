const mongoose = require('mongoose')
mongoose.Promise = global.Promise

//create schema
const playlistSchema = new mongoose.Schema({
  name: {
    type: String
  }
})

module.exports = mongoose.model('Playlist', playlistSchema)
