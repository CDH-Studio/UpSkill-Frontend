"use strict";
module.exports = (sequelize, DataTypes) => {
  const userProject = sequelize.define(
    "userProject",
    {
      description: DataTypes.STRING
    },
    {}
  );
  userProject.associate = function(models) {
    userProject.belongsTo(models.user);
  };
  return userProject;
};
