// Initializes the `department` service on path `/department`
const { Department } = require('./department.class');
const createModel = require('../../models/department.model');
const hooks = require('./department.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/department', new Department(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('department');

  service.hooks(hooks);
};
