const db = require('./db/db.service.js');
const user = require('./user/user.service.js');
const skill = require('./skill/skill.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(db);
  app.configure(user);
  app.configure(skill);
};
