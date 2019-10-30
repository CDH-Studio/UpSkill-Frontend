// Initializes the `competency` service on path `/competency`
const { Competency } = require('./competency.class');
const createModel = require('../../models/competency.model');
const hooks = require('./competency.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/competency', new Competency(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('competency');

  service.hooks(hooks);
};
