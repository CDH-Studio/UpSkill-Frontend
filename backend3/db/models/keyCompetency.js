"use strict";
module.exports = (sequelize, DataTypes) => {
  const keyCompetency = sequelize.define(
    "keyCompetency",
    {
      descriptionEn: DataTypes.STRING,
      descriptionFr: DataTypes.STRING
    },
    {}
  );
  keyCompetency.associate = function(models) {
    keyCompetency.hasOne(models.user);
  };
  return keyCompetency;
};
