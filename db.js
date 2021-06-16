const mysql = require('mysql2')
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'todo',
    database: 'todo',
    password: 'todo'
})

connection.connect((err) => {
    if(err){
        console.error(err)
    }
    else{
        console.log('running fine')
    }
})

function getAllPersons() {

    return new Promise ((resolve, reject) => {
        connection.query(`
            SELECT * FROM todotable`,
            function(err, row, col){
                if(err){
                    reject(err)
                }
                else{
                    resolve(row)
                }
            }
            )
    })
}

exports = module.exports = {
    getAllPersons
}
