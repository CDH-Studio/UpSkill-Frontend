// Initializes the `employment_status` service on path `/employment-status`
const { EmploymentStatus } = require('./employment_status.class');
const createModel = require('../../models/employment_status.model');
const hooks = require('./employment_status.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/employment-status', new EmploymentStatus(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('employment-status');

  service.hooks(hooks);
};
