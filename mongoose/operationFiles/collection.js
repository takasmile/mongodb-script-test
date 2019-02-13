let mongoose = require('mongoose');

let { collection, schema } = require('./config')

let monSchema = new mongoose.Schema(schema);

let resultColl = mongoose.model(collection, monSchema);

module.exports = resultColl;