// Initializes the `group_level` service on path `/group-level`
const { GroupLevel } = require('./group_level.class');
const createModel = require('../../models/group_level.model');
const hooks = require('./group_level.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/group-level', new GroupLevel(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('group-level');

  service.hooks(hooks);
};
