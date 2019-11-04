// Initializes the `branch` service on path `/branch`
const { Branch } = require('./branch.class');
const createModel = require('../../models/branch.model');
const hooks = require('./branch.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/branch', new Branch(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('branch');

  service.hooks(hooks);
};
