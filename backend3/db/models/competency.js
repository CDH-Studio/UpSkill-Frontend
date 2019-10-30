'use strict';
module.exports = (sequelize, DataTypes) => {
  const competency = sequelize.define('competency', {
    name_en: DataTypes.STRING,
    name_fr: DataTypes.STRING
  }, {});
  competency.associate = function(models) {
    // associations can be defined here
  };
  return competency;
};