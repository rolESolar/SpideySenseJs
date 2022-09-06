module.exports = class DbconncectionService {
  // connects to database
  establishConnection() {
    const mysql = require("mysql");
    this.connection = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "yelp2_0",
    });
  }

  async getRegions() {
    const con = this.connection;
    con.connect();
    const result = await getStatement(con);
    con.end();
    return result;
    // Promise als Funktion
    function getStatement(con) {
      return new Promise((resolve, reject) => {
        con.query(
          `SELECT * FROM region`,

          (err, result) => {
            return err ? reject(err) : resolve(result);
          }
        );
      });
    }
  }

  async getRestaurant(a) {
    const con = this.connection;
    con.connect();
    const result = await getStatement(con);
    con.end();
    return result;
    // Promise als Funktion
    function getStatement(con) {
      return new Promise((resolve, reject) => {
        con.query(
          `SELECT name FROM restaurant WHERE region = "${a}"`,

          (err, result) => {
            return err ? reject(err) : resolve(result);
          }
        );
      });
    }
  }
};
