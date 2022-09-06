const ServiceProvider = require("../../../framework/service_provider");

module.exports = class Locations {
  constructor(params) {}
  data() {
    return { title: "reviews" };
  }
};

let mysql = require("mysql");

let connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "yelp2_0",
});

connection.connect(function (err) {
  if (err) {
    return console.error("error: " + err.message);
  }

  console.log("Connected to the MySQL server.");
});
