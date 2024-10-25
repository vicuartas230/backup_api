import mysql from 'mysql';

const conn = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    connectTimeout: 30000
});

// console.log("CONNECTION", conn);

conn.connect();

conn.query('SELECT User FROM mysql.user', (err, rows, fields) => {
    if (err) {
        console.log(err);
    }
    console.log(rows);
    conn.end();
});
