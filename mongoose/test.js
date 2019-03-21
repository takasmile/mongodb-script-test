const mongoose = require('mongoose')
const schema = {
  SRCIP: String,
  DESIP: String
}

const collection = {
  dbname: 'chinavis',
  collection: '2016merge'
}

let monSchema = new mongoose.Schema(schema)
let resultColl = mongoose.model(collection, monSchema)
mongoose.connect(
  'mongodb://localhost:27017/chinavis', 
  { useNewUrlParser: true }
)

resultColl.find({})
  .limit(100)
  .exec((err, data) => {
    console.log(data)
  })
