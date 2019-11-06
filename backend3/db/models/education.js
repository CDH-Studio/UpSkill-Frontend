"use strict";
module.exports = (sequelize, DataTypes) => {
  const education = sequelize.define(
    "education",
    {
      startDate: DataTypes.DATE,
      endDate: DataTypes.DATE
    },
    {}
  );
  education.associate = function(models) {
    education.belongsTo(models.profile);
    education.hasOne(models.school);
    education.hasOne(models.diploma);
  };
  return education;
};
