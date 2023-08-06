const express = require('express')
const router = express.Router()
const { recurringIncome } = require('../mongoClient')

router.route('/')
  .get(async (req, res) => {
    res.send(await recurringIncome.find())
  })
  .post(async (req, res) => {
    const { name, amount, category } = req.body
    const recurringIncome = await recurringIncome.insertOne({ name, amount, category })
    if (recurringIncome) {
      res.status(201).json({ message: 'New recurring income created' })
    } else {
      res.status(400).json({ message: 'Invalid user data recieved' })
    }
  })

router.route('/:recurringIncomeId')
  .get(async (req, res) => {
    res.send(await recurringIncome.find({ id: req.params.recurringIncomeId }))
  })
  .put(async (req, res) => {
    const { id, name, amount, category } = req.body
    const objectId = new ObjectId(id);
    const recurringIncome = await recurringIncome.findOne({ _id: objectId })

    user.name = name
    user.amount = amount
    user.category = category

    if (recurringIncome) {
      const updatedRecurringIncome = await user.save()
      res.status(201).json({ message: 'Recurring income updated' })
    } else {
      res.status(400).json({ message: 'User not found' })
    }
  })
  .delete(async (req, res) => {

  })

module.exports = router