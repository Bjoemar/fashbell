var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var uid = require('uid-safe');
var users = require('./routes/users');
var products = require('./routes/products');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/fashbelle";
var webSecret = 'fasbelle2019';
var app = express();

app.use(express.static('./'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.use('/v1/users', users);
app.use('/product', products);


/* GET users listing. */
app.post('/getShopItem', function(req, res, next) {
	var secret = req.body.password;
	if (webSecret == secret) {

		MongoClient.connect(url,function(err,db){
		var dbo = db.db('fashbelle');
			if(err) throw err;
			dbo.collection("products").find().sort({_id: -1}).toArray(function(err,result){
				res.json(result);
			})
		})
	} else {
		res.json({'Status' : 'Bad Request'});
	}
});




app.post('/',function(req,res,next){
	console.log('JOemar');
})

// app.use('/api/v1/generate_uid', generate_uid);

module.exports = app;
