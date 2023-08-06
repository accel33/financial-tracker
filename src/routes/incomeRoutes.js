const express = require('express')
const router = express.Router()
const { income } = require('../mongoClient')

router.route('/income')
  .get(async (req, res) => {
    res.send(await income.find())
  })
  .post(async (req, res) => {
    const { name, amount, category } = req.body
    const income = await income.insertOne({ name, amount, category })
    if (income) {
      res.status(201).json({ message: 'New income created' })
    } else {
      res.status(400).json({ message: 'Invalid user data recieved' })
    }
  })

router.route('/income/:incomeId')
  .get(async (req, res) => {
    res.send(await income.find({ id: req.params.incomeId }))
  })
  .put(async (req, res) => {
    const { id, name, amount, category } = req.body
    const objectId = new ObjectId(id);
    const income = await income.findOne({ _id: objectId })

    user.name = name
    user.amount = amount
    user.category = category

    if (income) {
      const updatedIncome = await user.save()
      res.status(201).json({ message: 'Income updated' })
    } else {
      res.status(400).json({ message: 'User not found' })
    }
  })
  .delete(async (req, res) => {

  })


module.exports = router