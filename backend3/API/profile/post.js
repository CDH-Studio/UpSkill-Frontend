const moment = require("moment");
const Models = require("../../db/models");
const Profile = Models.profile;

const mappedValues = require("./mappedValues.json");

// const createProfile = async (request, response) => {
//   Profile.create({
//     where: { email: request.body.email },
//     defaults: { name: request.body.name }
//   }).then(([profile, created]) => {
//     console.log(
//       profile.get({
//         plain: true
//       })
//     );
//     //console.log("Is user created: " + created);
//     resData = { user, created };
//     response.status(200).json(resData);
//   });
// };

const createProfile = async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  let dbObject = {};

  for (let [key, value] of Object.entries(body)) {
    dbObject[mappedValues[key]] = value;
  }

  console.log(dbObject);

  try {
    const profile = await Profile.create({ id, ...dbObject }).then(profile => {
      profile.addSkills(dbObject.skills);
      profile.addCompetencies(dbObject.competencies);

      console.log("DevGoals");
      profile.addDevelopmentGoal(dbObject.developmentGoals).then(() => {
        console.log("DevGoals");
      });
    });
    return res.status(201).json({
      profile
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createProfile
};
