const skill = require("./skill/skill.service.js");
// eslint-disable-next-line no-unused-vars
module.exports = function(app) {
  app.configure(skill);
};
