const { MongoClient } = require('mongodb')
const client = new MongoClient(process.env.MONGO_CONNECTION_STRING)

const database = client.db('tracker');
const expenses = database.collection('expenses');
const recurringExpenses = database.collection('recurringExpenses');
const income = database.collection('income');
const recurringIncome = database.collection('recurringIncome');

module.exports = { database, expenses, recurringExpenses, income, recurringIncome }