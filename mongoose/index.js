let mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mongo_test');
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.on('connected', () => {
  console.log('MongoDB connected success.');
});
db.on('disconnected', () => {
  console.log('MongoDB disconnected success.');
});

let testSche = new mongoose.Schema({
  // '_id': Number,
  // 'author': String,
  // 'title': String,
  // 'copies': Number
});

let testColl = mongoose.model('kittens', testSche);
testColl.find({}, function (err, data) {
  if (err) return console.error(err);
  console.log('data result: ', data);
})