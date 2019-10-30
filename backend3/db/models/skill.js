'use strict';
module.exports = (sequelize, DataTypes) => {
  const skill = sequelize.define('skill', {
    description_en: DataTypes.STRING,
    description_fr: DataTypes.STRING
  }, {});
  skill.associate = function(models) {
    // associations can be defined here
  };
  return skill;
};