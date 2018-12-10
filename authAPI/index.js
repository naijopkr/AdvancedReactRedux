const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const router = require('./router')
const mongoose = require('mongoose')

const app = express()

//DB Setup
const mongooseConfig = {
  useNewUrlParser: true,
  useCreateIndex: true
}
mongoose.connect('mongodb://localhost:auth/auth', mongooseConfig)
 
//App Setup
app.use(morgan('combined'))
app.use(bodyParser.json())
router(app)

//Server Setup
const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log('Server is up!')
})