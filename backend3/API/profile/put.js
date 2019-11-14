const moment = require("moment");
const Models = require("../../db/models");
const Profile = Models.profile;

const mappedValues = require("./mappedValues.json");

const updateProfile = async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  let dbObject = {};
  console.log(body);

  for (let [key, value] of Object.entries(body)) {
    dbObject[mappedValues[key]] = value;
  }

  try {
    const [updated, profile] = await Profile.update(dbObject, {
      where: { id: id },
      returning: true
    });
    profile.addSkills(dbObject.skills);
    profile.addCompetencies(dbObject.competencies);
    profile.addDevelopmentGoal(dbObject.developmentGoals);
    if (updated) {
      return res.status(200).json({ profile });
    }
    throw new Error("Profile not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  updateProfile
};
