// Initializes the `career_journey` service on path `/career-journey`
const { CareerJourney } = require('./career_journey.class');
const createModel = require('../../models/career_journey.model');
const hooks = require('./career_journey.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/career-journey', new CareerJourney(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('career-journey');

  service.hooks(hooks);
};
