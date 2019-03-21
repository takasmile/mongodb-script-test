let test01 = {
  schema: {
    title: String,
    description: String,
    by_user: String,
    url: String,
    tags: Array,
    likes: Number
  },
  originData: [
    {
      title: 'MongoDB Overview',
      description: 'MongoDB is no sql database',
      by_user: 'runoob.com',
      url: 'http://www.runoob.com',
      tags: ['mongodb', 'database', 'NoSQL'],
      likes: 100
    },
    {
      title: 'NoSQL Overview',
      description: 'No sql database is very fast',
      by_user: 'runoob.com',
      url: 'http://www.runoob.com',
      tags: ['mongodb', 'database', 'NoSQL'],
      likes: 10
    },
    {
      title: 'Neo4j Overview',
      description: 'Neo4j is no sql database',
      by_user: 'Neo4j',
      url: 'http://www.neo4j.com',
      tags: ['neo4j', 'database', 'NoSQL'],
      likes: 750
    },
  ]
}

let test02 = {
  schema: {
    product: String,
    total: Number,
    customer: String
  },
  originData: [
    { product: 'toothbrush', total: 4.75, customer: 'Mike' },
    { product: 'guitar', total: 199.9, customer: 'Tom' },
    { product: 'milk', total: 11.22, customer: 'Mike' },
    { product: 'pizza', total: 8.50, customer: 'Karen' },
    { product: 'toothbrush', total: 4.75, customer: 'Karen' },
    { product: 'pizza', total: 4.75, customer: 'Dave' },
    { product: 'toothbrush', total: 4.75, customer: 'Mike' },
    { product: 'toothbrush', total: 4.75, customer: 'Alex' },
  ]
}

let test03 = {
  schema: {
    FILEAFFIX: String,
    SRCIP: String,
    DSTIP: String
  },
  originData: []
}


module.exports = test03
