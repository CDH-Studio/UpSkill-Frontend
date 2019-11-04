const dotenv = require("dotenv");
const Sequelize = require("sequelize");

dotenv.config();

module.exports = function(app) {
  const sequelize = new Sequelize(
    process.env.PGDATABASE,
    process.env.PGUSERNAME,
    process.env.PGPASS,
    {
      dialect: "postgres",
      logging: false,
      define: {
        freezeTableName: true
      }
    }
  );
  const oldSetup = app.setup;

  app.set("sequelizeClient", sequelize);

  app.setup = function(...args) {
    const result = oldSetup.apply(this, args);

    // Set up data relationships
    const models = sequelize.models;
    Object.keys(models).forEach(name => {
      if ("associate" in models[name]) {
        models[name].associate(models);
      }
    });

    // Sync to the database
    app.set("sequelizeSync", sequelize.sync());

    return result;
  };
};
