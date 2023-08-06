const mongoose = require("mongoose");

const RecurringIncomeSchema = new mongoose.Schema({
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

const RecurringIncome = mongoose.model("RecurringIncome", RecurringIncomeSchema);

module.exports = { RecurringIncome };