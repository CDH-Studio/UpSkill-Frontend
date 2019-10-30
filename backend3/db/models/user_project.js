'use strict';
module.exports = (sequelize, DataTypes) => {
  const user_project = sequelize.define('user_project', {
    description: DataTypes.STRING
  }, {});
  user_project.associate = function(models) {
    // associations can be defined here
  };
  return user_project;
};