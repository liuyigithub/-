var express = require('express');
var router = express.Router();  
// var async=require('async');
// 引入 mongodb
var MongoClient = require('mongodb').MongoClient;
var DB_CONN_STR = "mongodb://127.0.0.1:27017/project-maizuo";



/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});








module.exports = router;
