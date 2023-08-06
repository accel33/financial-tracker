const { MongoClient } = require('mongodb')

async function mongoConnect() {
  try {
    const client = new MongoClient(process.env.MONGO_CONNECTION_STRING)
    await client.connect()

    const database = client.db('tracker')

    return {
      database: database,
      expense: database.collection('expenses'),
      recurringExpense: database.collection('recurringExpenses'),
      income: database.collection('income'),
      recurringIncome: database.collection('recurringIncome')
    }
  } catch (e) {
    console.log(e)
    process.exit(1)
  }
}

module.exports = mongoConnect()
