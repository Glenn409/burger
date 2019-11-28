const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const exphbs = require('express-handlebars')
const routes = require('./controllers/burgers_contoller')
app.use(express.static('public'))

app.use(express.urlencoded({extended:true}))    
app.use(express.json())

app.engine('handlebars',exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.use(routes)

app.get('/',function(req,res){
    res.render('main')
})

app.listen(PORT,function(){
    console.log('Listening on PORT: '+PORT)
})