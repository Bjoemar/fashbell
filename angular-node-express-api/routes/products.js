var express = require('express');
var router = express.Router();
var uid = require('uid-safe');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/fashbelle";
/* GET users listing. */
router.post('/saveProduct', function(req, res, next) {

	console.log(req.body.object_thumb);
	// var productName = req.body.productName;
	// var productPrice = req.body.productPrice;
	// var productImage = '/storage/image/'+req.body.productImage;
 // 	var itemUid = uid.sync(18);
	

	// var itemObject = {
	// 	'productUid' : itemUid,
	// 	'productName' : productName,
	// 	'productPrice' : productPrice,
	// 	'productImage' : productImage,
	// };


	// MongoClient.connect(url,function(err,db){
	// 	var dbo = db.db('fashbelle');
	// 	dbo.collection("products").insertOne(itemObject);
	// });
});

module.exports = router;
