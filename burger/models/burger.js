var orm = require("../config/orm.js");

var burgers = {
  addBurger: function(nameInput, cb){
    orm.insertOne("burgers", nameInput, cb);
  },
  devourBurger: function(inputId, cb){
    orm.updateOne("burgers", inputId, cb);
  },
  findDevoured: function(cb) {
    orm.selectDevoured("burgers", function(res){
      cb(res);
    });
  },
  findNotDevoured: function(cb) {
    orm.selectNotDevoured("burgers", function(res){
      cb(res);
    });
  },
};

module.exports = burgers;