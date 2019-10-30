// Initializes the `skill` service on path `/skill`
const { Skill } = require('./skill.class');
const createModel = require('../../models/skill.model');
const hooks = require('./skill.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/skill', new Skill(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('skill');

  service.hooks(hooks);
};
