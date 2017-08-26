var express = require("express");
var app = express();
var mongojs = require("mongojs");
var config = require("./config");
var db = mongojs(config.database,['romannumbers']);
var bodyParser = require('body-parser');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

var api = require('./services/services.js')(app, db);

app.listen(config.port,function(){
	console.log("server running");
});

