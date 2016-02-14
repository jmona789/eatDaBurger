var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

router.get('/', function(req,res) {
  burger.findAll(function(burger_data){
    res.render('index', {burger_data});
  });
});

module.exports = router;