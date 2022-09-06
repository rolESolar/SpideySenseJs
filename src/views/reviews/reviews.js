const ServiceProvider = require("../../../framework/service_provider");
let locationNow = "";

module.exports = class Reviews {
  constructor(params) {
    this.dbConnectionService = ServiceProvider.create("dbconnectionService");
    console.log(params.locationNow);
    locationNow = params.locationNow;
  }

  async data() {
    this.dbConnectionService.establishConnection();
    let restaurants = await this.dbConnectionService.getRestaurants(
      locationNow
    );
    console.log(restaurants);
    return {
      title: "Restaurants",
      restaurants: restaurants,
      locationShow: restaurants[0].region,
    };
  }
};
