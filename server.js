var express = require("express");
var app = express();
var mongojs = require("mongojs");
var db = mongojs("romannumbersdb",['romannumbers']);
var bodyParser = require('body-parser');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

var api = require('./services/services.js')(app, db);

app.listen(3000,function(){
	console.log("server running");
});

