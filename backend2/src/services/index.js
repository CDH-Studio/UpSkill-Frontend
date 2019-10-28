const users = require('./users/users.service.js');
const db = require('./db/db.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(db);
};
