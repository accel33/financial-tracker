const express = require('express')
const router = express.Router()
const { expense } = require('../mongoClient')

router.route('/expense')
  .get(async (req, res) => {
    res.send(await expenses.find())
  })
  .post(async (req, res) => {
    const { name, amount, category } = req.body
    const expense = await expense.insertOne({ name, amount, category })
    if (expense) {
      res.status(201).json({ message: 'New expense created' })
    } else {
      res.status(400).json({ message: 'Invalid user data recieved' })
    }
  })

router.route('/expense/:expenseId')
  .get(async (req, res) => {
    res.send(await expenses.find({ id: req.params.expenseId }))
  })
  .put(async (req, res) => {
    const { id, name, amount, category } = req.body
    const objectId = new ObjectId(id);
    const expense = await expense.findOne({ _id: objectId })

    user.name = name
    user.amount = amount
    user.category = category

    if (expense) {
      const updatedExpense = await user.save()
      res.status(201).json({ message: 'Expense updated' })
    } else {
      res.status(400).json({ message: 'User not found' })
    }
  })
  .delete(async (req, res) => {

  })

module.exports = router