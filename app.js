var express = require('express')
var app = express()
var bodyparser = require('body-parser')
var mongoose = require('mongoose')
var cors = require('cors')
var port = 3000

const route = require('./route/routes')

mongoose.connect('mongodb://localhost/sabuygamer')

mongoose.connection.on('connected', function(){
    console.log('MongoDB connected at port 27017')
})

mongoose.connection.on('error',function(err){
    console.log(err)
})

app.use(cors())

app.use(bodyparser.json())

app.use('/api',route)


app.get('/',function(req, res){
    res.send('foobar')
})

app.listen(port,function(){
    console.log('Server has been started at port',port)
})