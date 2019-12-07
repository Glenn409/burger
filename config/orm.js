const connection = require('./connection.js')

const orm = {
    readAll: function(table,cb){
        console.log("entering orm")
        const query = `SELECT * FROM ${table};`
        connection.query(query,function(err,result){
            if (err) throw err
            cb(result)
        }) 
    },
    update: function(id,table,cb){
        let query = 'UPDATE '
        query += table
        query += ' SET devoured = true WHERE id = '
        query += id
        connection.query(query, function(err,data){
            if(err) throw err
            cb(data)
            })
        },
        create: function(burger,cb){
            let records = [
                [burger.burger,false]
            ]
            connection.query('INSERT INTO burgers (burger,devoured) VALUES ?',[records],function(err,data){
                if(err) throw err
                cb(data)
            })
        }
    }


module.exports = orm