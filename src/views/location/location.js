const ServiceProvider = require("../../../framework/service_provider");

module.exports = class Reviews {
  constructor(params) {
    this.dbConnectionService = ServiceProvider.create("dbconnectionService");
  }
  //
  async data() {
    this.dbConnectionService.establishConnection();
    let locations = await this.dbConnectionService.getRegions();
    console.log(locations);
    return { title: "Location", locations: locations };
  }
};
