const mysql = require('mysql');

const { DB_HOST, DB_USERNAME, DB_PASSWORD, DB_DATABASE } = process.env;
// console.log(DB_DATABASE);

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'api'
});

db.connect((err) => {
    if(err) throw err;
    console.log('Connection is successfully');
})

module.exports = db