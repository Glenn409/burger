const mysql = require('mysql')
let connection = mysql.createConnection(process.env.JAWSDB_MARIA_URL)
// if(process.env.JAWSDB_URL){
//     connection = mysql.createConnection(process.env.JAWSDB_URL)
// } else {
//     connection = mysql.createConnection({
//         host: 'localhost',
//         port:3306,
//         user:'root',
//         password:'password',
//         database:'burgers_db'
//     })
// }

connection.connect(function(err){
    if(err) {
        console.log('failed to connect to DB')
    } else {
        console.log("Connected to DB")
    }
})
module.exports = connection