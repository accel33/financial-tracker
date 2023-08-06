const mongoose = require("mongoose");

const ExpenseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  breed: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  isGoodBoy: {
    type: Boolean,
    required: false,
    default: true,
  },
});

Expense = mongoose.model("Expense", ExpenseSchema);

module.exports = Expense;