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

module.exports = router