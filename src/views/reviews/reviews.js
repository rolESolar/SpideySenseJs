const ServiceProvider = require("../../../framework/service_provider");
let location = "";

module.exports = class Reviews {
  constructor(params) {
    this.dbConnectionService = ServiceProvider.create("dbconnectionService");
    console.log(params.locationNow);
    location = params.locationNow;
  }

  async data() {
    this.dbConnectionService.establishConnection();
    let score = await this.dbConnectionService.getValue();
    console.log(score);
    console.log(location);
    return { title: "reviews", score: score[0].score, locationNow: location };
  }

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
