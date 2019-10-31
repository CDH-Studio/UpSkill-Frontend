"use strict";
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define(
    "user",
    {
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      email: DataTypes.STRING,
      job_title: DataTypes.STRING,
      phone: DataTypes.STRING,
      mobile: DataTypes.STRING,
      location: DataTypes.STRING,
      manager: DataTypes.STRING,
      team: DataTypes.STRING,
      first_language: DataTypes.STRING,
      second_language: DataTypes.STRING,
      year_service: DataTypes.INTEGER,
      linkedin: DataTypes.STRING,
      github: DataTypes.STRING
    },
    {}
  );
  user.associate = function(models) {
    user.belongsToMany(models.skill, { through: "user_skills" });
  };
  return user;
};
