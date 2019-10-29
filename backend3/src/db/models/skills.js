'use strict';
module.exports = (sequelize, DataTypes) => {
  const skills = sequelize.define('skills', {
    name: DataTypes.UUID
  }, {});
  skills.associate = function(models) {
    // associations can be defined here
  };
  return skills;
};