'use strict';
module.exports = (sequelize, DataTypes) => {
  const employment_status = sequelize.define('employment_status', {
    description_en: DataTypes.STRING,
    description_fr: DataTypes.STRING
  }, {});
  employment_status.associate = function(models) {
    // associations can be defined here
  };
  return employment_status;
};