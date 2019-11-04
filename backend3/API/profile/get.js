const User = require("../../db/models").user;
const Tenure = require("../../db/models").tenure;

const getProfile = async (request, response) => {
  response.status(200).json(await User.findAll());
};

const getProfileById = async (request, response) => {
  const id = request.params.id;
  let data = await User.findOne({ where: { id: id } });

  data.dataValues.tenure = await Tenure.findAll({
    where: { id: data.dataValues.tenureId }
  });
  response.status(200).json(data);
};

module.exports = {
  getProfile,
  getProfileById
};
