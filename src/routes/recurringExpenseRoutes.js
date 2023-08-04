const express = require('express')
const router = express.Router()
const { recurringExpenses } = require('../mongoClient')

app.route('/recurringExpense')
  .get(async (req, res) => {
    res.send(await recurringExpenses.find())
  })
  .post(async (req, res) => {
    const { name, amount, category } = req.body

  })

app.route('/recurringExpense/:recurringExpenseId')
  .get(async (req, res) => {
    res.send(await recurringExpenses.find({ id: req.params.recurringExpenseId }))
  })
  .put(async (req, res) => {

  })
  .delete(async (req, res) => {

  })

module.exports = router