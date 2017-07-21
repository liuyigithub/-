var express = require('express');
var router = express.Router();
var http = require('http');

// 引入 mongodb
var MongoClient = require('mongodb').MongoClient;
var DB_CONN_STR = "mongodb://127.0.0.1:27017/project-maizuo";


router.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
// localhost:8080/login
router.get('/login',function(req, res){
  
console.log(req.query);
  MongoClient.connect(DB_CONN_STR,function(err,db){
    if(err){
      res.send('网络异常，请稍候重试');      
    }else{
      var conn=db.collection('client');
      conn.save(req.query,function(err,num){
        if(err){
          res.send("用户名或密码错误");
        }else{
          res.send('OK!');
        }
        db.close();
      })
    }
  })

})




// 轮播的接口

// localhost:8080/lunbo
router.get('/lunbo', function(req, res) {

  var page = req.query.page;
  var count = req.query.count;
  // 要去请求  卖座网的接口

  // http://m.maizuo.com/v4/api/billboard/home?__t=1500253189212
  var time = new Date().getTime();

  http.get('http://m.maizuo.com/v4/api/billboard/home?__t=' + time, function(response) {

    var data = '';
    response.on('data', function(chunk) {
      data += chunk;
    })

    response.on('end', function() {
      res.send(data);
    })

  })

})

// 热映电影接口

// localhost:8080/hitmovies
router.get('/hitmovies', function(req, res) {

  var page = req.query.page;
  var count = req.query.count;
  // 要去请求  卖座网的接口

  // http://m.maizuo.com/v4/api/film/now-playing?__t=1500255083057&page=1&count=5
  var time = new Date().getTime();

  http.get('http://m.maizuo.com/v4/api/film/now-playing?__t' + time,function(response) {
    console.log(response)
    var data = '';
    response.on('data', function(chunk) {
      data += chunk;
    })

    response.on('end', function() {
      res.send(data);
    })

  })

})

// 即将上映电影接口

// localhost:8080/comingmovies
router.get('/comingmovies', function(req, res) {

  var page = req.query.page;
  var count = req.query.count;
  // 要去请求  卖座网的接口

  // http://m.maizuo.com/v4/api/film/now-playing?__t=1500255083057&page=1&count=5
  var time = new Date().getTime();

  http.get('http://m.maizuo.com/v4/api/film/coming-soon?__t' + time+'&page=1&count=3',function(response) {
    console.log(response)
    var data = '';
    response.on('data', function(chunk) {
      data += chunk;
    })

    response.on('end', function() {
      res.send(data);
    })

  })

})

// 正在热映电影接口

// localhost:8080/now-playing
router.get('/now-playing', function(req, res) {

  var page = req.query.page;
  var count = req.query.count;
  // 要去请求  卖座网的接口

  // http://m.maizuo.com/v4/api/film/now-playing?page=1&count=7

  http.get('http://m.maizuo.com/v4/api/film/now-playing?page=1&count=7',function(response) {
    console.log(response)
    var data = '';
    response.on('data', function(chunk) {
      data += chunk;
    })

    response.on('end', function() {
      res.send(data);
    })

  })

})
// 即将上映电影接口

// localhost:8080/coming-soon
router.get('/coming-soon', function(req, res) {

  var page = req.query.page;
  var count = req.query.count;
  // 要去请求  卖座网的接口

  // http://m.maizuo.com/v4/api/film/now-playing?page=1&count=7

  http.get('http://m.maizuo.com/v4/api/film/coming-soon?page=1&count=7',function(response) {
    console.log(response)
    var data = '';
    response.on('data', function(chunk) {
      data += chunk;
    })

    response.on('end', function() {
      res.send(data);
    })

  })

})

// 详情页接口

// localhost:8080/film-detail
router.get('/film-detail', function(req, res) {

  var id=req.query.id;
  // 要去请求  卖座网的接口
  var time = new Date().getTime();
  // http://m.maizuo.com/v4/api/film/now-playing?page=1&count=7

  http.get('http://m.maizuo.com/v4/api/film/'+id+'?__t='+ time,function(response) {
    console.log(response)
    var data = '';
    response.on('data', function(chunk) {
      data += chunk;
    })

    response.on('end', function() {
      res.send(data);
    })

  })

})


// 影院接口

// localhost:8080/cinema
router.get('/cinema', function(req, res) {


  // 要去请求  卖座网的接口

  // http://m.maizuo.com/v4/api/cinema?__t=1500536833672
  var time = new Date().getTime();
  http.get('http://m.maizuo.com/v4/api/cinema?__t' + time,function(response) {
    console.log(response)
    var data = '';
    response.on('data', function(chunk) {
      data += chunk;
    })

    response.on('end', function() {
      res.send(data);
    })

  })

})



module.exports = router;
