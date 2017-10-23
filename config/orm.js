var connection = require("./connection.js");

var orm = {
	selectAll: function() {
		var queryString = "SELECT * FROM burgers;";
		connection.query(queryString, function(err, result) {
			if (err) {
				throw err;
			}
			console.log(result);
		});
	},

	instertOne: function() {
		var queryString = "INSERT INTO burgers;"
		connection.query(queryString, function(err, result) {
			if (err) {
				throw err;
			}
			console.log(queryString);
		}

// updateOne: function() {

// }
}

orm.selectAll();
orm.instertOne();

module.exports = orm;