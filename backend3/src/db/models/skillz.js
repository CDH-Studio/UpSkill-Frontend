'use strict';
module.exports = (sequelize, DataTypes) => {
  const skillz = sequelize.define('skillz', {
    id: DataTypes.UUID,
    description: DataTypes.STRING
  }, {});
  skillz.associate = function(models) {
    // associations can be defined here
  };
  return skillz;
};