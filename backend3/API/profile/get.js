const User = require("../../db/models").user;

const getProfile = (request, response) => {
  const id = request.params.id;
  response.status(200).json(User.findAll());
};

module.exports = {
  getProfile
};
