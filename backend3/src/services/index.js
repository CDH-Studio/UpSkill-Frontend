const skill = require("./skill/skill.service.js");
const education = require('./education/education.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function(app) {
  app.configure(skill);
  app.configure(education);
};
