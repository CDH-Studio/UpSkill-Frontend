// Initializes the `user_skill` service on path `/user-skill`
const { UserSkill } = require('./user_skill.class');
const createModel = require('../../models/user_skill.model');
const hooks = require('./user_skill.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/user-skill', new UserSkill(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('user-skill');

  service.hooks(hooks);
};
