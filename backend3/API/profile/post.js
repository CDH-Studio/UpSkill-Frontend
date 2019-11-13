const moment = require("moment");
const Models = require("../../db/models");
const Profile = Models.profile;

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
  let id = req.params.id;
  try {
    const profile = await Profile.create({ id, ...req.body });
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
