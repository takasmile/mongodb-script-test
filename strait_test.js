var url = 'localhost:27017/mongo_test';
var db = connect(url);
var cName = 'Persons';

// var result = db.getCollection(cName)
  // .count({ product: 'toothbrush' });
  // .distinct('product')

var result = db.getCollection(cName)
  .aggregate(
    [
      // {$match: {'index': {$lt: 19}}},
      {$project: {
          'name': 1,
          '_id': 0,
          'index': 1,
          'country': '$company.location.country',
          // $add, $subtract, $multiply, $divide, $mod
          // $substr, $concat, $toLower, $toUpper
          // $and, $or, $not, $cond, $ifNull
          total: { 
            '$add': ['$age', '$index']
          }
        }
      },
      // $sum, $avg, $min, $max, $push, $addToSet, $first, $last
      // {$group: {_id: '$name', total: {$sum: '$total'}}},
      {$sort: {'index': 1}},
      {$limit: 10},
      // {$group: {_id: '$country', count: {$sum: 1}}}
    ]
  )
  .forEach(printjson);

// printjson(result);
// .forEach(printjson);