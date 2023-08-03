require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const PORT = 5000

const { MongoClient } = require('mongodb')
const client = new MongoClient(process.env.MONGO_CONNECTION_STRING)

const database = client.db('tracker');
const expenses = database.collection('expenses');
const recurringExpenses = database.collection('recurringExpenses');
const income = database.collection('income');
const recurringIncome = database.collection('recurringIncome');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Hello, World!')
})

app.route('/expense')
.get(async (req, res) => {
    res.send(await expenses.find())
})
.post(async (req, res) => {

})

app.route('/expense/:expenseId')
.get(async (req, res) => {
    res.send(await expenses.find({ id: req.params.expenseId }))
})
.put(async (req, res) => {

})
.delete(async (req, res) => {

})

app.route('/recurringExpense')
.get(async (req, res) => {
    res.send(await recurringExpenses.find())
})
.post(async (req, res) => {

})

app.route('/recurringExpense/:recurringExpenseId')
.get(async (req, res) => {
    res.send(await recurringExpenses.find({ id: req.params.recurringExpenseId }))
})
.put(async (req, res) => {

})
.delete(async (req, res) => {

})

app.route('/income')
.get(async (req, res) => {
    res.send(await income.find())
})
.post(async (req, res) => {

})

app.route('/income/:incomeId')
.get(async (req, res) => {
    res.send(await income.find({ id: req.params.incomeId }))
})
.put(async (req, res) => {

})
.delete(async (req, res) => {

})

app.route('/recurringIncome')
.get(async (req, res) => {
    res.send(await recurringIncome.find())
})
.post(async (req, res) => {

})

app.route('/recurringIncome/:recurringIncomeId')
.get(async (req, res) => {
    res.send(await recurringIncome.find({ id: req.params.recurringIncomeId }))
})
.put(async (req, res) => {

})
.delete(async (req, res) => {

})

app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`)
})