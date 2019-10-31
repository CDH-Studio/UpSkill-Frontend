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

models.user.create({ first_name: "Mamadou", last_name: "XML" });

// models.user.findAll().then(res => {
//   console.log(res);
// });

// sequelizedb.model.user.create({ first_name: "trevor" });
