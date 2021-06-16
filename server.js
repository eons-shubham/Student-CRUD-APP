const express = require('express')
const app = express()
const db = require('./db')

const mysql = require('mysql2')
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'todo',
    database: 'todo',
    password: 'todo'
})

app.use(express.urlencoded({extended: true}))
app.set('view engine', 'hbs')

app.get('/', (req, res) => {
    db.getAllPersons()
        .then((data) => {
            res.render('display', {data})
        })
        .catch((err) => {
            res.send(err)
        })
})

app.post('/', (req, res) => {

    var sql = "insert into todotable values(null, "+req.body.studentAge+", '"+req.body.studentName+"')"
    connection.query(sql, function (err) {
        if (err) throw err
        
    })
    res.redirect('/')

})

app.listen(4444, ()=>{
    console.log('running at http://localhost:4444')
})