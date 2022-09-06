module.exports = class DbconncectionService {
  // connects to database
  establishConnection() {
    const mysql = require("mysql");
    // wieso this
    this.connection = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "yelp2_0",
    });
  }

  // was macht async ?
  // wieso this

  //
  async getValue() {
    const con = this.connection;
    con.connect();
    const result = await getColour(con);
    con.end();
    return result;
    // Promise als Funktion
    function getColour(con) {
      return new Promise((resolve, reject) => {
        con.query(
          "SELECT score FROM review",

          (err, result) => {
            return err ? reject(err) : resolve(result);
          }
        );
      });
    }
  }
};
