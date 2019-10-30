// Initializes the `user_competency` service on path `/user-compentency`
const { UserCompentency } = require("./user_competency.class");
const createModel = require("../../models/user_competency.model");
const hooks = require("./user_competency.hooks");

module.exports = function(app) {
  const options = {
    Model: createModel(app),
    paginate: app.get("paginate")
  };

  // Initialize our service with any options it requires
  app.use("/user-compentency", new UserCompentency(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service("user-compentency");

  service.hooks(hooks);
};
