const express = require('express')
const router = express.Router()
const { Expense } = require('../models/expense')

router.route('/')
  .get(async (req, res) => {
    const expenses = await Expense.find().exec()
    console.log(expenses);
    if (!expenses) {
      res.status(404).json({ message: 'Expenses not found' })
    } else {
      res.status(200).json(expenses)
    }
  })
  .post(async (req, res) => {
    const { name, amount, category } = req.body

    const newExpense = new Expense({ name, amount, category })
    const insertedExpense = await newExpense.save()
    if (!insertedExpense) {
      return res.status(404).json({ message: 'Fail at creation' })
    }
    return res.status(201).json(insertedExpense)
  })

// router.route('/:expenseId')
//   .get(async (req, res) => {
//     res.send(await expenses.find({ id: req.params.expenseId }))
//   })
//   .put(async (req, res) => {
//     const { id, name, amount, category } = req.body
//     const objectId = new ObjectId(id);
//     const expense = await expense.findOne({ _id: objectId })

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

//   })

module.exports = router