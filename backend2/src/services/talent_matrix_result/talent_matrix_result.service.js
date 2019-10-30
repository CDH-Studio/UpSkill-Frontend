// Initializes the `talent_matrix_result` service on path `/talent-matrix-result`
const { TalentMatrixResult } = require('./talent_matrix_result.class');
const createModel = require('../../models/talent_matrix_result.model');
const hooks = require('./talent_matrix_result.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/talent-matrix-result', new TalentMatrixResult(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('talent-matrix-result');

  service.hooks(hooks);
};
