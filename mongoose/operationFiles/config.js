// const DATABASE_CONFIG = [
//   {
//     name: 'mongo_test',
//     collections: [
//       'kittens'
//     ]
//   }
// ]

module.exports = {
  dbname: 'mongo_test',
  collection: 'testss',
  schema: {
    title: String,
    description: String,
    by_user: String,
    url: String,
    tags: Array,
    likes: Number
  }
}