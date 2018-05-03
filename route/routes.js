var express = require('express')
var router = express.Router()

const List = require('../model/gamelist')

router.get('/lists',function(req, res, next){
    List.find(function(err, list){
        if(err){
            res.json(err)
        }else{
            res.json(list)
        }
    })
})

// inserting new data
router.post('/list',function(req, res, next){
    let newGameList = new List({
        gameName: req.body.gameName,
        gameQuantity: req.body.gameQuantity,
        gameBought: req.body.gameBought
    })
    newGameList.save(function(err, list){
        if(err){
            res.json(err)
        }else{
            res.json({msg: 'list has been added successfully'})
        }
    })
})

// updating the data
router.put('/list/:id',function(req, res, next){
    List.findByIdAndUpdate({_id: req.params.id},{
        $set:{
            gameName: req.body.gameName,
            gameQuantity: req.body.gameQuantity,
            gameBought: req.body.gameBought
        }
    },function(err, result){
        if(err){
            res.json(err)
        }else{
            res.json(result)
        }
    })
})

// deleting the data
router.delete('/list/:id',function(req, res, next){
    List.findByIdAndRemove({_id: req.params.id},function(err, result){
        if(err){
            res.json(err)
        }else{
            res.json(result)
        }
    })
})

module.exports = router