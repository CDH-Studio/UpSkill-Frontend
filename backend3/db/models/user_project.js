"use strict";
module.exports = (sequelize, DataTypes) => {
  const user_project = sequelize.define(
    "user_project",
    {
      description: DataTypes.STRING
    },
    {}
  );
  user_project.associate = function(models) {
    user_project.belongsTo(models.user);
  };
  return user_project;
};
