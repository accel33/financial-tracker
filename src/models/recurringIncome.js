const mongoose = require("mongoose");

const RecurringIncomeSchema = new mongoose.Schema({
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

const RecurringIncome = mongoose.model("RecurringIncome", RecurringIncomeSchema);

module.exports = { RecurringIncome };