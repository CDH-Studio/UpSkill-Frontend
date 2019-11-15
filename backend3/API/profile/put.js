const moment = require("moment");
const Models = require("../../db/models");
const Profile = Models.profile;
const Education = Models.education;
const Experience = Models.experience;

const mappedValues = require("./mappedValues.json");

const updateProfile = async (request, response) => {
  const id = request.params.id;
  const body = request.body;

  console.log(body);

  let dbObject = {};

  for (let [key, value] of Object.entries(body)) {
    dbObject[mappedValues[key]] = value;
  }

  try {
    let [updated, profile] = await Profile.update(dbObject, {
      where: { id: id },
      returning: true
    });

    if (!profile) {
      profile = await Profile.findOne({ where: { id: id } }).then(res => {
        updated = true;
        return res;
      });
    }

    profile.addSkills(dbObject.skills);
    profile.addCompetencies(dbObject.competencies);
    profile.addDevelopmentGoal(dbObject.developmentGoals);
    console.log("Greeting");

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

    console.log("Hiii");

    dbObject.experience.forEach(exp => {
      console.log("Heloooo");
      console.log(exp);

      Experience.create({
        organizationEn: exp.subheader,
        jobTitleEn: exp.header,
        descriptionEn: exp.content,
        startDate: exp.startDate,
        endDate: exp.endDate
      }).then(experience => {
        profile.addExperience(experience);
      });
    });

    if (updated) {
      return response.status(200).json(profile);
    }
    throw new Error("Profile not found");
  } catch (error) {
    return response.status(500).send(error.message);
  }
};

module.exports = {
  updateProfile
};
