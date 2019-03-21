let mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/chinavis')

let db = mongoose.connection

db.on('open', function () {
  console.log('alex is here')
})
