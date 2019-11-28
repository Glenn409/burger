const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    port:3306,
    user:'root',
    password:'password',
    database:'burgers_db'
})

connection.connect(function(err){
    if(err) {
        console.log('failed to connect to DB')
    }
    console.log("Connected to DB")
})
module.exports = connection