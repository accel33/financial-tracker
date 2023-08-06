// @/models.js
const mongoose = require("mongoose");

const ExpenseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  amount: {
    type: String,
    required: true,
  },
  category: {
    type: Number,
    required: true,
  }
},
  { timestamps: true }
);

const Expense = mongoose.model("Expense", ExpenseSchema);

module.exports = { Expense };