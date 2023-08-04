const express = require('express')
const router = express.Router()
const { income } = require('../mongoClient')

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


module.exports = router