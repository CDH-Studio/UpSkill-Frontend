"use strict";
module.exports = (sequelize, DataTypes) => {
  const skill = sequelize.define(
    "skill",
    {
      descriptionEn: DataTypes.STRING,
      descriptionFr: DataTypes.STRING
    },
    {}
  );
  skill.associate = function(models) {
    skill.belongsToMany(models.user, { through: "userSkills" });
  };
  return skill;
};
