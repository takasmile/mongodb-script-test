var url = 'localhost:27017/mongo_test';
var db = connect(url);
var cName = 'foo';

var result = db.getCollection(cName)
  .aggregate([
    { $group: { _id: '$author', total: { $sum : '$copies'}} },
  ])
  // .forEach(printjson);

result.forEach(printjson)

// db.getCollection(cName)
//   .find({})
//   .forEach(printjson);