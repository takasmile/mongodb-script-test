let mongoose = require('mongoose');

let connection = require('./connection');
let collection = require('./collection');
let { dbname } = require('./config');
let { originData } = require('./originData');

let url = `mongodb://localhost:27017/${dbname}`;

connection(url);

for (let i in originData) {
  let temp = new collection(originData[i]);
  temp.save(err => { if (err) return console.error(err); });
}