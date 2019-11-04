// Initializes the `second_language_proficiency` service on path `/second-language-proficiency`
const { SecondLanguageProficiency } = require('./second_language_proficiency.class');
const createModel = require('../../models/second_language_proficiency.model');
const hooks = require('./second_language_proficiency.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/second-language-proficiency', new SecondLanguageProficiency(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('second-language-proficiency');

  service.hooks(hooks);
};
