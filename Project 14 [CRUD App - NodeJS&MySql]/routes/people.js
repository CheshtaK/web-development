const express = require('express');
const mySqlConnection = require('../connection');

const Router = express.Router();
Router.get("/", (req, res) =>{
    mySqlConnection.query("SELECT * from people", (err, rows, fields) => {
        if(!err){
            res.send(rows);
        }
        else{
            console.log(err);
        }
    })
})

module.exports = Router;