const mongoose = require("mongoose");

const IncomeSchema = new mongoose.Schema({
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

const Income = mongoose.model("Income", IncomeSchema);

module.exports = { Income };