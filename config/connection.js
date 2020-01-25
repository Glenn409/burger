const mysql = require('mysql')

let connection =  mysql.createConnection('mysql://m92bsjk1supk5hmt:uc0axiefhlg1k32m@jlg7sfncbhyvga14.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/awmai39kfq2czxe3')
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