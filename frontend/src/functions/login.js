const post = require("axios").post;

const createUser = (email, name) => {
  return post("http://localhost:8080/api/user/", {
    email,
    name
  })
    .then(res => {
      console.log(res);

      localStorage.setItem("userId", res.data.user.id);
      return { res, hasProfile: res.data.hasProfile };
    })
    .catch(err => {
      throw err;
    });
};

module.exports = { createUser };
