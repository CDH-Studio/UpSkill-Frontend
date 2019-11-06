"use strict";
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define(
    "user",
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING
    },
    {}
  );
  user.associate = function(models) {
    user.belongsToMany(models.skill, { through: "profileSkills" });
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
