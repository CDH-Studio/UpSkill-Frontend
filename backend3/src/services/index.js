const skill = require("./skill/skill.service.js");
const groupLevel = require("./group_level/group_level.service.js");
const db = require('./db/db.service.js');
const school = require('./school/school.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function(app) {
  app.configure(skill);
  app.configure(groupLevel);
  app.configure(db);
  app.configure(school);
};
