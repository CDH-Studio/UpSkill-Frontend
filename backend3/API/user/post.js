const Models = require("../../db/models");
const User = Models.user;

const createUser = async (request, response) => {
  User.findOrCreate({
    where: { email: request.body.email },
    defaults: { name: request.body.name }
  }).then(([user, created]) => {
    console.log(
      user.get({
        plain: true
      })
    );
    console.log("Is user created: " + created);
    resData = { user, created };
    response.status(200).json(resData);
  });
};

module.exports = {
  createUser
};
