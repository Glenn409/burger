const orm = require('../config/orm.js')

const burger = {
    all: function(cb){
        console.log('entering model/burger')
        orm.readAll('burgers',function(res){
            cb(res)
        })
    }
}

module.exports = burger