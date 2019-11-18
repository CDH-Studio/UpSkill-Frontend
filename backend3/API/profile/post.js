const moment = require("moment");
const Models = require("../../db/models");
const Profile = Models.profile;
const Education = Models.education;
const Experience = Models.experience;

const mappedValues = require("./mappedValues.json");

const createProfile = async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  let dbObject = {};

  for (let [key, value] of Object.entries(body)) {
    dbObject[mappedValues[key]] = value;
  }

  console.log(dbObject);
  try {
    const [profile, created] = await Profile.upsert(
      { id, ...dbObject },
      { returning: true }
    );

    profile.addSkills(dbObject.skills);
    profile.addCompetencies(dbObject.competencies);
    profile.addDevelopmentGoal(dbObject.developmentGoals);
    res.status(201).send("Created: " + created);

    dbObject.education.forEach(edu => {
      Education.create({
        organizationEn: exp.subheader,
        jobTitleEn: exp.header,
        descriptionEn: exp.content,
        startDate: exp.startDate,
        endDate: exp.endDate
      }).then(education => {
        profile.addEducation(education);
      });
    });

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
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createProfile
};
