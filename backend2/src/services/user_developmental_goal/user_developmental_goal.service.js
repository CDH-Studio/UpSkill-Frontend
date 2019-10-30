// Initializes the `user_developmental_goal` service on path `/user-developmental-goal`
const { UserDevelopmentalGoal } = require('./user_developmental_goal.class');
const createModel = require('../../models/user_developmental_goal.model');
const hooks = require('./user_developmental_goal.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/user-developmental-goal', new UserDevelopmentalGoal(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('user-developmental-goal');

  service.hooks(hooks);
};
