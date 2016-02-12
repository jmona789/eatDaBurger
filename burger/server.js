var express = require("express");
var methodoverride = require("method-override");
var bodyparser = require("body-parser");
var app = express();
var expressHandlebars = require('express-handlebars');

app.listen(PORT, function() {
  console.log('Listening on %s', PORT);
});