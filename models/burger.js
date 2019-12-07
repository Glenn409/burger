const orm = require('../config/orm.js')

const burger = {
    all: function(cb){
        orm.readAll('burgers',function(res){cb(res)})
    },
    eat: function(id,cb){
        orm.update(id,'burgers', function(res){cb(res)})
    },
    create: function(burger,cb){
        orm.create(burger, function(res){cb(res)})
    }
}

module.exports = burger