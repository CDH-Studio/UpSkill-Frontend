// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require("sequelize");
const DataTypes = Sequelize.DataTypes;

module.exports = function(app) {
  const sequelizeClient = app.get("sequelizeClient");
  const secondLanguageProficiency = sequelizeClient.define(
    "second_language_proficiency",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        autoIncrement: false
      },
      reading_proficiency: {
        type: DataTypes.CHAR
      },
      writing_proficiency: {
        type: DataTypes.CHAR
      },
      oral_proficiency: {
        type: DataTypes.CHAR
      },
      reading_date: {
        type: DataTypes.CHAR
      },
      writing_date: {
        type: DataTypes.CHAR
      },
      oral_date: {
        type: DataTypes.CHAR
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
  secondLanguageProficiency.associate = function(models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return secondLanguageProficiency;
};
