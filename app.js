var express = require('express')
var router = require('./router')
var path = require('path')


var app = express()
app.engine('html',require('express-art-template'))

app.use('/public/',express.static(path.join(__dirname,'/public/')))
app.use('/node_modules/', express.static(path.join(__dirname, './node_modules/')))
app.set('views', path.join(__dirname, './views/'))


app.use(router)



app.listen(3000, function () {
  console.log('running...')
})