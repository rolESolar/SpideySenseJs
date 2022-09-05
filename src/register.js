const Reviews = require("./views/reviews/reviews"); 
const Location = require("./views/location/location"); 
const Home = require("./views/home/home");
const ServiceProvider = require("../framework/service_provider");

module.exports = function () {
  ServiceProvider.register("home", (params) => {
    return new Home(params);
  });
 ServiceProvider.register("location", (params) => {return new Location(params);});
 
 ServiceProvider.register("reviews", (params) => {return new Reviews(params);});
};