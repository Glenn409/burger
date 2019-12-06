const connection = require('./connection.js')

const orm = {
    readAll: function(table,cb){
        console.log("entering orm")
        const query = `SELECT * FROM ${table};`
        connection.query(query,function(err,result){
            if (err) throw err
            cb(result)
        }) 
    }
}

module.exports = orm