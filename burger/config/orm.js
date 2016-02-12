var connectionImport = require("./connection.js");
var mysql = require("mysql");


module.exports = {
  displayDevouredBurgers: function(){
    connection.query("SELECT burger_name FROM burgers WHERE devoured = 1", function(err, results) {
      if(err) {
        throw err;
      }
      var data = {
        burgers: results
      }

      console.log(data.burgers);
      //res.render('noteview', data);
    });
  },
  displayNotDevouredBurgers: function(){
    connection.query("SELECT burger_name FROM burgers WHERE devoured = 0", function(err, results) {
      if(err) {
        throw err;
      }
      var data = {
        burgers: results
      }

      console.log(data.burgers);
      //res.render('noteview', data);
    });
  },
  addBurger: function(burger_name){
    connection.query("INSERT INTO burgers (burger_name) VALUES(?)", burger_name, function(err, results) {
      if(err) {
        throw err;
      }
    });
  }
}