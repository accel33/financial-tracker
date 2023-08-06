const mongoose = require("mongoose");

const RecurringExpenseSchema = new mongoose.Schema({
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

const RecurringExpense = mongoose.model("RecurringExpense", RecurringExpenseSchema);

module.exports = { RecurringExpense };