var express = require('express')
var bodyParser = require('body-parser')
var app = express()
var port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

var routes = require('./api/routes/OtpGeneratorRoutes') // importing route

routes(app) // register the route

app.listen(port)

console.log('OTP Generator RESTful API server started on: ' + port)
