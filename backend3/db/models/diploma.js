'use strict';
module.exports = (sequelize, DataTypes) => {
  const diploma = sequelize.define('diploma', {
    description_en: DataTypes.STRING,
    description_fr: DataTypes.STRING
  }, {});
  diploma.associate = function(models) {
    // associations can be defined here
  };
  return diploma;
};