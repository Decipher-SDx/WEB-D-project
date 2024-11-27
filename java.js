const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'yourpassword',
    database: 'restaurant_db'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL!');
});


connection.query('SELECT * FROM menu', (err, results) => {
    if (err) throw err;
    console.log(results);
});
