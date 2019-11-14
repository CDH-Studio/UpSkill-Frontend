// const Models = require("../../db/models");
// const Profile = Models.profile;

// let { searchValue } = req.query;

// //Make lowercase
// searchValue = searchValue.toLowerCase();

// Profile.findAll({
//   where: { firstName: { [Op.like]: "%" + searchValue + "%" } }
// })
//   .then(profiles => res.render("gigs", { profiles }))
//   .catch(err => console.log(err));

// const getProfile = async (request, response) => {
//   response.status(200).json(await Profile.findAll());
// };
