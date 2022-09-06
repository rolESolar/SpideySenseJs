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
    let restaurants = await this.dbConnectionService.getRestaurants(location);
    console.log(restaurants);
    return { title: "Restaurants", restaurants: restaurants };
  }
};
