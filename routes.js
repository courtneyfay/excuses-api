let express = require('express')
let bodyParser = require('body-parser')
let getOne = require('./controllers/get-id-route.js')
let app = express()

app.use(bodyParser.json())

//ROUTES
app.get('/', getOne)

module.exports = app