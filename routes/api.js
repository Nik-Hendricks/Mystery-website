// Created 6:30 PM 10/28/2021 Nik Hendricks
// routes/api.js

var datastore = require('../db/datastores.js')
var uniqid = require('uniqid')
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "newuser",
  password: "password",
  database:"MysterySQL"
});


//private functions


module.exports = (() => {
    'use strict';
    var API = require('express').Router();

    API.use( ( req, res, next ) => {
        next()
    })   

    //public routes here
    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        API.post('/send_sql', (req, res) => {
            var sql = req.body.sql;
            console.log(sql)

            con.query(sql, function (err, result) {
                if (err){
                    res.json({'error': err})
                }else{
                    console.log("Result: " + result);
                    res.json({'success':result});
                }
            });      
        })
    });
    
    return API;
})();