const ServiceProvider = require("../../../framework/service_provider");
let location = "";

module.exports = class Reviews {
  constructor(params) {
    //this.dbConnectionService = ServiceProvider.create("dbconnectionService");
    console.log(params.locationNow);
    location = params.locationNow;
  }


  async data() {
    //this.dbConnectionService.establishConnection();
    //let score = await this.dbConnectionService.getValue();
    //console.log(score);
    console.log(location);
    return { title: "reviews", score: "3.5", locationNow: location};
  }
};
