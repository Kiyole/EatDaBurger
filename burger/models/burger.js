// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.selectAll("burgers", cb);
  },
  // The variables cols and vals are arrays.
  create: function(userInput, cb) {
    orm.insertOne("burgers", userInput, cb);
  },
  update: function(userInput, condition, cb) {
    orm.updateOne("burgers", userInput, condition, cb);
  },
  delete: function(condition, cb) {
    orm.delete("burgers", condition, cb);
  }
};

// Export the database functions for the controller (burgersController.js).
module.exports = burger;
