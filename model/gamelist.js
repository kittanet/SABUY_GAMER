const mongoose = require('mongoose')

const GameListSchma = mongoose.Schema({
    gameName:{
        type: String,
        require: true
    },
    gameQuantity:{
        type: Number,
        require: true
    },
    gameBought:{
        type: Boolean,
        require: true
    }
})

const List = module.exports = mongoose.model('List', GameListSchma)