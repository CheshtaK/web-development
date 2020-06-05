const mysql = require('mysql');

var mysqlConnection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "cheshta",
    database: "crud",
    multipleStatements: true
});

mysqlConnection.connect((err) => {
    if(!err){
        console.log("Connected");
    }
    else{
        console.log(err);
    }
})

module.exports = mysqlConnection;