'use strict';
module.exports = (sequelize, DataTypes) => {
  const diploma = sequelize.define('diploma', {
    descriptionEn: DataTypes.STRING,
    descriptionFr: DataTypes.STRING
  }, {});
  diploma.associate = function(models) {
    // associations can be defined here
  };
  return diploma;
};