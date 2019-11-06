"use strict";
module.exports = (sequelize, DataTypes) => {
  const profile = sequelize.define(
    "profile",
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      jobTitle: DataTypes.STRING,
      phone: DataTypes.STRING,
      mobile: DataTypes.STRING,
      location: DataTypes.STRING,
      manager: DataTypes.STRING,
      team: DataTypes.STRING,
      firstLanguage: DataTypes.STRING,
      secondLanguage: DataTypes.STRING,
      yearService: DataTypes.INTEGER,
      linkedin: DataTypes.STRING,
      github: DataTypes.STRING
    },
    {}
  );
  profile.associate = function(models) {
    profile.belongsToMany(models.skill, { through: "profileSkills" });
    profile.belongsToMany(models.competency, { through: "userCompetencies" });
    profile.belongsTo(models.tenure);
    profile.belongsTo(models.groupLevel);
    profile.belongsTo(models.securityClearance);
    profile.belongsTo(models.careerMobility);
    profile.belongsTo(models.talentMatrixResult);
    profile.belongsTo(models.keyCompetency);
    profile.belongsTo(models.secondLanguageProficiency);
  };
  return profile;
};
