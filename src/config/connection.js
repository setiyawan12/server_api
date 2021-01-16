const mysql = require('mysql');

const { DB_HOST, DB_USERNAME, DB_PASSWORD, DB_DATABASE } = process.env;
// console.log(DB_DATABASE);

const db = mysql.createConnection({
    DB_HOST: 'remotemysql.com',
    DB_USERNAME: 'ifiXHA3yGf',
    DB_PASSWORD: 'GEjpyPhvwD',
    DB_DATABASE: 'ifiXHA3yGf'
});

db.connect((err) => {
    if(err) throw err;
    console.log('Connection is successfully');
})

module.exports = db