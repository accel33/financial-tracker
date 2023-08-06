const express = require('express')
const router = express.Router()
const { recurringExpenses } = require('../mongoClient')

router.route('/recurringExpense')
  .get(async (req, res) => {
    res.send(await recurringExpenses.find())
  })
  .post(async (req, res) => {
    const { name, amount, category } = req.body
    const recurringExpense = await recurringExpenses.insertOne({ name, amount, category })
    if (recurringExpense) {
      res.status(201).json({ message: 'New recurring expense created' })
    } else {
      res.status(400).json({ message: 'Invalid user data recieved' })
    }
  })

router.route('/recurringExpense/:recurringExpenseId')
  .get(async (req, res) => {
    res.send(await recurringExpenses.find({ id: req.params.recurringExpenseId }))
  })
  .put(async (req, res) => {
    const { id, name, amount, category } = req.body
    const objectId = new ObjectId(id);
    const recurringExpense = await recurringExpenses.findOne({ _id: objectId })

    user.name = name
    user.amount = amount
    user.category = category

    if (recurringExpense) {
      const updatedExpense = await user.save()
      res.status(201).json({ message: 'Recurring expense updated' })
    } else {
      res.status(400).json({ message: 'User not found' })
    }
  })
  .delete(async (req, res) => {

  })

module.exports = router