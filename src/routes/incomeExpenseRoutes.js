const express = require('express')
const router = express.Router()
const { recurringIncome } = require('../mongoClient')

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

module.exports = router