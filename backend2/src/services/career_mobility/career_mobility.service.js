// Initializes the `career_mobility` service on path `/career-mobility`
const { CareerMobility } = require('./career_mobility.class');
const createModel = require('../../models/career_mobility.model');
const hooks = require('./career_mobility.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/career-mobility', new CareerMobility(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('career-mobility');

  service.hooks(hooks);
};
