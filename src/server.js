require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const PORT = 3500

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Hello, World!')
})

app.use('/expense', require('./routes/expenseRoutes'))
app.use('/recurringExpense', require('./routes/recurringExpenseRoutes'))
app.use('/income', require('./routes/incomeRoutes'))
app.use('/incomeExpense', require('./routes/incomeExpenseRoutes'))

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`)
})