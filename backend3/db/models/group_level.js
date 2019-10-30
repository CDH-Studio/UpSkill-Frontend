'use strict';
module.exports = (sequelize, DataTypes) => {
  const group_level = sequelize.define('group_level', {
    description: DataTypes.STRING
  }, {});
  group_level.associate = function(models) {
    // associations can be defined here
  };
  return group_level;
};