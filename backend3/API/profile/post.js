const moment = require("moment");
const Models = require("../../db/models");
const Profile = Models.profile;
const Education = Models.education;
const Experience = Models.experience;
const ProfileOrganization = Models.profileOrganization;

const mappedValues = require("./mappedValues.json");

const createProfile = async (request, response) => {
  const id = request.params.id;
  const body = request.body;
  let dbObject = {};

  for (let [key, value] of Object.entries(body)) {
    dbObject[mappedValues[key] ? mappedValues[key] : key] = value;
  }

  console.log("dbOject", dbObject);

  dbObject.jobTitleEn = dbObject.jobTitle.en;
  dbObject.jobTitleFr = dbObject.jobTitle.fr;

  try {
    const [profile, created] = await Profile.upsert(
      { id, ...dbObject },
      { returning: true }
    );

    profile.addSkills(dbObject.skills);
    profile.addCompetencies(dbObject.competencies);
    profile.addDevelopmentGoal(dbObject.developmentGoals);

    if (dbObject.education)
      dbObject.education.forEach(({ school, diploma, startDate, endDate }) => {
        Education.create({
          schoolId: school,
          diplomaId: diploma,
          startDate,
          endDate
        }).then(education => {
          profile.addEducation(education);
        });
      });

    if (dbObject.experience)
      dbObject.experience.forEach(exp => {
        Experience.create({
          organization: exp.subheader,
          jobTitle: exp.header,
          description: exp.content,
          startDate: exp.startDate,
          endDate: exp.endDate
        }).then(experience => {
          profile.addExperience(experience);
        });
      });

    if (dbObject.projects)
      dbObject.projects.forEach(project => {
        Project.create({
          description: project
        }).then(project => {
          profile.addProfileProject(project);
        });
      });

    if (dbObject.organizations) {
      dbObject.organizations.forEach(({ description: { en, fr }, tier }) => {
        ProfileOrganization.create({
          descriptionEn: en,
          descriptionFr: fr,
          tier
        }).then(organiztion => {
          profile.addProfileOrganization(organiztion);
        });
      });
    }
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
};

module.exports = {
  createProfile
};
