const mongoose = require('mongoose')
mongoose.promise = global.Promise

const Playlist = mongoose.model('Playlist')

//test api
exports.test = async (req, res) => {
  console.log('hello from playlist controller')
  res.send('it works')
  res.end()
}
