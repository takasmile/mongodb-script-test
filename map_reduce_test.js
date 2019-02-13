var url = 'localhost:27017/mongo_test';
var db = connect(url);
var cName = 'Persons';

var mapFunction = function () {
  emit(this.index, this.name);
};

var reduceFunction = function (keyCustId, valuesPrices) {
  return Array.sum(valuesPrices);
};

var result = db.getCollection(cName)
  .mapReduce(
    mapFunction,
    reduceFunction,
    {
      out: 'map_reduce_example'
    }
  );

printjson(result);