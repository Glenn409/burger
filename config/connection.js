const mysql = require('mysql')

let connection =  mysql.createConnection('mysql://stdbqc45lrwi3h0w:rqgacd52el88zt67@ui0tj7jn8pyv9lp6.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/nza7gasbdcxr05oq')
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