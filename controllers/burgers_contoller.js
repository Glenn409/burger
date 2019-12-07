const express = require("express")
const router = express.Router()
const burger = require('../models/burger')

router.get('/',function(req,res){
    burger.all(function(data){
        let burgerObject = {
            burgers:data
        }
        console.log(burgerObject)
        res.render('index',burgerObject)
    })
})


router.put('/api/burgers/:id',function(req,res){
    const id = req.params.id
    const devoured = req.body.devoured
    
    burger.eat(id,function(data){
        console.log(data)
    if (data.changedRows == 0) {
        return res.status(404).end();
        } else {
        return res.status(200).end();
        }
    })
})

router.post('/api/burgers/new',function(req,res){
    let newBurger = req.body.burger
    console.log('recieved obj: '+newBurger)

    burger.create({burger:newBurger},function(data){
        if (data.changedRows == 0) {
            return res.status(404).end();
          } else {
            return res.status(200).end();
          }
    })
})
module.exports = router