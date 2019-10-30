// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require("sequelize");
const DataTypes = Sequelize.DataTypes;

module.exports = function(app) {
  const sequelizeClient = app.get("sequelizeClient");
  const education = sequelizeClient.define(
    "education",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        autoIncrement: false
      },
      program: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      start_date: {
        type: DataTypes.STRING,
        type: DataTypes.DATE
      },
      end_date: {
        type: DataTypes.DATE
      }
    },
    {
      hooks: {
        beforeCount(options) {
          options.raw = true;
        }
      }
    }
  );

  // eslint-disable-next-line no-unused-vars
  education.associate = function(models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return education;
};
