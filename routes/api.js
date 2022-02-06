// Created 6:30 PM 10/28/2021 Nik Hendricks
// routes/api.js

var datastore = require('../db/datastores.js')
var uniqid = require('uniqid')
var mysql = require('mysql');

var con = mysql.createPool({
    connectionLimit : 100, //important
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
        API.post('/send_sql', (req, res) => {
            var sql = req.body.sql;
            var new_sql = sql.replace(/(\r\n|\n|\r)/gm, " ").replace(';', '');
            console.log(new_sql)


            con.query(new_sql, function (err, result) {
                if (err){
                    res.json({'error': err})
                }else{
                    console.log("Result: " + result);
                    res.json({'success':result});
                }
            });      
        })
    return API;
})();