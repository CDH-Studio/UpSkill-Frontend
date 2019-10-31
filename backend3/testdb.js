const sequelizedb = require("./config/database");
const models = require("./db/models");
const uuid = require("uuid/v1");

// sequelizedb
//   .authenticate()
//   .then(() => {
//     console.log("Connection has been established successfully.");
//   })
//   .catch(err => {
//     console.error("Unable to connect to the database:", err);
//   });

// models.user.destroy({ where: {} });
// models.skill.destroy({ where: {} });

// models.user.create({ first_name: "Trevor" });
// models.user.create({ first_name: "Mamadou" });

// models.skill.create({ description_en: "javascript" });
// models.skill.create({ description_en: "xml" });

models.skill.findOne({ where: { description_en: "xml" } }).then(skill => {
  models.user.findOne({ where: { first_name: "Mamadou" } }).then(user => {
    user.addSkill(skill);
  });
});

// models.user.findAll().then(res => {
//   console.log(res);
// });

// sequelizedb.model.user.create({ first_name: "trevor" });
