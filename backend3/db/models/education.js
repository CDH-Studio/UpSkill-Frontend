"use strict";
module.exports = (sequelize, DataTypes) => {
  const education = sequelize.define(
    "education",
    {
      start_date: DataTypes.DATE,
      end_date: DataTypes.DATE
    },
    {}
  );
  education.associate = function(models) {
    education.belongsTo(models.user);
    education.hasOne(models.school);
    education.hasOne(models.diploma);
  };
  return education;
};
