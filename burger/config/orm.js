var connectionImport = require("./connection.js");
var mysql = require("mysql");


connection.query("SELECT * FROM burgers", function(err, results) {
  if(err) {
    throw err;
  }
  var data = {
    burgers: results
  }

  console.log(data.burgers[0].burger_name);
  //res.render('noteview', data);
});