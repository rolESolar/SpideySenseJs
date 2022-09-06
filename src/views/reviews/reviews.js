const ServiceProvider = require("../../../framework/service_provider");

module.exports = class Reviews {
  constructor(params) {
    this.dbConnectionService = ServiceProvider.create("dbconnectionService");
  }

  async data() {
    this.dbConnectionService.establishConnection();
    let score = await this.dbConnectionService.getValue();
    console.log(score);
    return { title: "reviews", score: score[0].score };
  }
};
