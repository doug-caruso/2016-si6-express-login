var express = require('express');
var bodyParser = require('body-parser');
var consign = require('consign');
var app = express();

app.set('view engine', 'ejs');
app.set('views', "./app/views");

app.use(bodyParser.urlencoded({extended: true}));

consign().include('app/routes').into(app);

module.exports = app;