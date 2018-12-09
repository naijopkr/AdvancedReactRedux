const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const app = express()

//App Setup
app.use(morgan('combined'))
app.use(bodyParser.json())

//Server Setup
const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log('Server up and listening to port', port)
})
