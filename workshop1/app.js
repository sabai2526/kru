var server = require("../workshop1/core/server");
//var users = require('./users');
var app = require('express')();
var bodyParser = require('body-parser');
 
//var port = process.env.PORT || 7777;
 
// parse application/json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));