const ServiceProvider = require("../../../framework/service_provider");

let resultScore = 0;

module.exports = class Locations {
  constructor(params) {}
  data() {
    resultScore = getValuesfromDatabase();
    return { title: "reviews", score: resultScore };
  }
};

function getValuesfromDatabase() {
  var mysql = require("mysql");

  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "yelp2_0",
  });

  connection.connect();
  
  con.connect(function (err) {
    if (err) throw err;
    con.query("SELECT score FROM review", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
      resultScore = result;
    });
  });
  
  return resultScore;
}
