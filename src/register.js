const Restaurants = require("./views/restaurants/restaurants"); 
const Location = require("./views/location/location"); 
const Home = require("./views/home/home");
const ServiceProvider = require("../framework/service_provider");

module.exports = function () {
  ServiceProvider.register("home", (params) => {
    return new Home(params);
  });
 ServiceProvider.register("location", (params) => {return new Location(params);});
 
 ServiceProvider.register("restaurants", (params) => {return new Restaurants(params);});
};