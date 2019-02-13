let mongoose = require('mongoose');

let { collection } = require('./config')
let { schema } = require('./originData')

let monSchema = new mongoose.Schema(schema);

let resultColl = mongoose.model(collection, monSchema);

module.exports = resultColl;