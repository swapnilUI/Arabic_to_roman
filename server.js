var express = require("express");
var app = express();
var mongojs = require("mongojs");
var db = mongojs("mongodb://root:abc123@ds159953.mlab.com:59953/romannumbersdb",['romannumbers']);
var bodyParser = require('body-parser');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

var api = require('./services/services.js')(app, db);

app.listen(process.env.PORT || 3000,function(){
	console.log("server running");
});

