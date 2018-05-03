var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
var port = 3000

app.listen(port)
console.log('running on port ',port)

// send data
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

/*Genre = require('./models/genre')
Book = require('./models/book')
mongoose.connect('mongodb://localhost/bookstore01')
var db = mongoose.connection
*/

app.get('/',function(req, res){
    res.send('SABUY')
})

/*
app.get('/api/genres',function(req, res){
Genre.getGenres((err, genres) => {
if (err) {
throw err
}
res.json(genres)
})
})
app.get('/api/books', (req, res) => {
Book.getBooks((err, books) => {
if (err) {
throw err
}
res.json(books)
})
})
app.get('/api/books/:_id', (req, res) => {
Book.getBookById(req.params._id, (err, book) => {
if (err) {
throw err
}
res.json(book)
})
})
app.post('/api/genres',(req, res)=>{
var genre = req.body
console.log(genre)
Genre.addGenres(genre, (err, genre)=>{
if(err){
throw err
}
res.json(genre)
})

})
app.listen(port)
console.log('running on port', port)
*/