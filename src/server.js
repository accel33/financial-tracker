require('dotenv').config()
const express = require('express')
const mongoose = require("mongoose");
const app = express()
const bodyParser = require('body-parser')
const PORT = 3500

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Hello, World!')
})

app.use('/expense', require('./routes/expenseRoutes'))
// app.use('/recurringExpense', require('./routes/recurringExpenseRoutes'))
// app.use('/income', require('./routes/incomeRoutes'))
// app.use('/incomeExpense', require('./routes/incomeExpenseRoutes'))

const start = async () => {
  try {
    await mongoose.connect(
      process.env.MONGO_CONNECTION_STRING
    );
    app.listen(3500, () => console.log("Server started on port 3500"));
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
};

start()