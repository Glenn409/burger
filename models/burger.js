const orm = require('../config/orm.js')

const burger = {
    readAll: function(){
        console.log('entering model/burger')
        orm.readAll('burgers')
    }
}

module.exports = burger