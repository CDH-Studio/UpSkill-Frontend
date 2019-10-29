const skill = require("./skill/skill.service.js");
const education = require("./education/education.service.js");
const school = require("./school/school.service.js");
const careerMobility = require('./career_mobility/career_mobility.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function(app) {
  app.configure(skill);
  app.configure(education);
  app.configure(school);
  app.configure(careerMobility);
};
