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
    
    // burger.update({})
    })

module.exports = router