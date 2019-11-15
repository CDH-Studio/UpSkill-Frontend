const moment = require("moment");
const Models = require("../../db/models");
const Profile = Models.profile;

const mappedValues = require("./mappedValues.json");

const updateProfile = async (request, response) => {
  const id = request.params.id;
  const body = request.body;

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

    console.log("Profile:", profile);

    profile.addSkills(dbObject.skills);
    profile.addCompetencies(dbObject.competencies);
    profile.addDevelopmentGoal(dbObject.developmentGoals);
    if (updated) {
      return response.status(200).json({ profile });
    }
    throw new Error("Profile not found");
  } catch (error) {
    return response.status(500).send(error.message);
  }
};

module.exports = {
  updateProfile
};
