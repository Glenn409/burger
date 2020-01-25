const mysql = require('mysql')

const connection = mysql.createConnection('mysql://sft36g6rbqbt885w:q5487vtlh86rzso9@wp433upk59nnhpoh.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/burgers_db')
// const connection = mysql.createConnection({
//     host: 'localhost',
//     port:3306,
//     user:'root',
//     password:'password',
//     database:'burgers_db'
// })

connection.connect(function(err){
    if(err) {
        console.log('failed to connect to DB')
    }
    console.log("Connected to DB")
})
module.exports = connection