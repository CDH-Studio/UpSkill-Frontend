const Models = require("../../db/models");
const User = Models.user;
const axios = require("axios");

const getGedsAssist = (request, response) => {
  id = request.params.id;
  User.findOne({ where: { id } }).then(res => {
    let user = res.dataValues;

    axios
      .get("http://localhost:8080/api/geds/" + encodeURI(user.name))
      .then(data => {
        response.status(200).send(data.data);
      })
      .catch(err => {
        throw err;
      });
  });
};

module.exports = {
  getGedsAssist
};
