const express = require('express')
const router = express.Router()
const { Expense } = require('../models')

router.route('/')
  .get(async (req, res) => {
    res.send(await Expense.find())
  })
  .post(async (req, res) => {
    const { name, amount, category } = req.body
    const expense = await Expense.insertOne({ name, amount, category })
    if (expense) {
      res.status(201).json({ message: 'New expense created' })
    } else {
      res.status(400).json({ message: 'Invalid user data recieved' })
    }
    return res.status(201).json(insertedExpense)
  })

router.route('/:expenseId')
  .get(async (req, res) => {
    res.send(await expense.find({ id: req.params.expenseId }))
  })
  .put(async (req, res) => {
    const { id, name, amount, category } = req.body
    const objectId = new ObjectId(id);
    const expense = await expense.findOne({ _id: objectId })

//     user.name = name
//     user.amount = amount
//     user.category = category

//     if (expense) {
//       const updatedExpense = await user.save()
//       res.status(201).json({ message: 'Expense updated' })
//     } else {
//       res.status(400).json({ message: 'User not found' })
//     }
//   })
//   .delete(async (req, res) => {

  })

module.exports = router