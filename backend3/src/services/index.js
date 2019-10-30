const skill = require("./skill/skill.service.js");
const education = require("./education/education.service.js");
const school = require("./school/school.service.js");
const careerMobility = require("./career_mobility/career_mobility.service.js");
const competency = require("./competency/competency.service.js");
const employmentStatus = require("./employment_status/employment_status.service.js");
const secondLanguageProficiency = require("./second_language_proficiency/second_language_proficiency.service.js");
const securityClearance = require("./security_clearance/security_clearance.service.js");
const talentMatrixResult = require("./talent_matrix_result/talent_matrix_result.service.js");
const userCompetency = require("./user_competency/user_competency.service.js");
// eslint-disable-next-line no-unused-vars
module.exports = function(app) {
  app.configure(skill);
  app.configure(education);
  app.configure(school);
  app.configure(careerMobility);
  app.configure(competency);
  app.configure(employmentStatus);
  app.configure(secondLanguageProficiency);
  app.configure(securityClearance);
  app.configure(talentMatrixResult);
  app.configure(userCompetency);
};
