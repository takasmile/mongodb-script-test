let mongoose = require('mongoose');

function checkConnection (conn) {
  conn.on('error', console.error.bind(console, 'connection error:'));
  conn.on('connected', () => {
    console.log('MongoDB connected success.');
  });
  conn.on('disconnected', () => {
    console.log('MongoDB disconnected success.');
  });
}

module.exports = function (url) {
  mongoose.connect(url);
  checkConnection(mongoose.connection);
}