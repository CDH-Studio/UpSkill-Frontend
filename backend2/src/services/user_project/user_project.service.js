// Initializes the `user_project` service on path `/user-project`
const { UserProject } = require('./user_project.class');
const createModel = require('../../models/user_project.model');
const hooks = require('./user_project.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/user-project', new UserProject(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('user-project');

  service.hooks(hooks);
};
