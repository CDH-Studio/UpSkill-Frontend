// Initializes the `security_clearance` service on path `/security-clearance`
const { SecurityClearance } = require('./security_clearance.class');
const createModel = require('../../models/security_clearance.model');
const hooks = require('./security_clearance.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/security-clearance', new SecurityClearance(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('security-clearance');

  service.hooks(hooks);
};
