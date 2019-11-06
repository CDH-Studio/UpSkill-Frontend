"use strict";
module.exports = (sequelize, DataTypes) => {
  const securityClearance = sequelize.define(
    "securityClearance",
    {
      descriptionEn: DataTypes.STRING,
      descriptionFr: DataTypes.STRING
    },
    {}
  );
  securityClearance.associate = function(models) {
    securityClearance.hasOne(models.profile);
  };
  return securityClearance;
};
