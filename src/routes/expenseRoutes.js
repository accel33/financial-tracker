const express = require('express')
const router = express.Router()
const { expense } = require('../mongoClient')

router.route('/expense')
  .get(async (req, res) => {
    res.send(await expenses.find())
  })
  .post(async (req, res) => {

  })

router.route('/expense/:expenseId')
  .get(async (req, res) => {
    res.send(await expenses.find({ id: req.params.expenseId }))
  })
  .put(async (req, res) => {

  })
  .delete(async (req, res) => {

  })

module.exports = router