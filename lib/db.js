const mysql = require('mysql');

const connection = mysql.createConnection({
    host :  'database-1.cafbqq6ifdlx.ap-northeast-2.rds.amazonaws.com',
    user : 'admin',
    password : '11111111',
    database : 'dadok',
    port : '3306',
});

connection.connect();
module.exports = connection;