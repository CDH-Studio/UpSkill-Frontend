"use strict";
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define(
    "user",
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
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
  user.associate = function(models) {
    user.belongsToMany(models.skill, { through: "userSkills" });
    user.belongsToMany(models.competency, { through: "userCompetencies" });
    user.belongsTo(models.tenure);
    user.belongsTo(models.groupLevel);
    user.belongsTo(models.securityClearance);
    user.belongsTo(models.careerMobility);
    user.belongsTo(models.talentMatrixResult);
    user.belongsTo(models.keyCompetency);
    user.belongsTo(models.secondLanguageProficiency);
  };
  return user;
};
