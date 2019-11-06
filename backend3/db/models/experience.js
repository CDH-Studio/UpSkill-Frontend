"use strict";
module.exports = (sequelize, DataTypes) => {
  const experience = sequelize.define(
    "experience",
    {
      organizationEn: DataTypes.STRING,
      organizationFr: DataTypes.STRING,
      jobTitleEn: DataTypes.STRING,
      jobTitleFr: DataTypes.STRING,
      descriptionEn: DataTypes.STRING,
      descriptionFr: DataTypes.STRING,
      startDate: DataTypes.DATE,
      endDate: DataTypes.DATE
    },
    {}
  );
  experience.associate = function(models) {
    experience.belongsTo(models.profile);
  };
  return experience;
};
