const mongoose = require("mongoose");

const RecurringExpenseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  }
});

const RecurringExpense = mongoose.model("RecurringExpense", RecurringExpenseSchema);

module.exports = { RecurringExpense };