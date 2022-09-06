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
    let restaurantLocation = await this.dbConnectionService.getRestaurant(
      location
    );

    console.log(location);
    return {
      title: "reviews",
      restaurantLocation: restaurantLocation[1].restaurantLocation,
    };
  }
};
