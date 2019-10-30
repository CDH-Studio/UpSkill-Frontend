// Initializes the `education` service on path `/education`
const { Education } = require('./education.class');
const createModel = require('../../models/education.model');
const hooks = require('./education.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/education', new Education(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('education');

  service.hooks(hooks);
};
