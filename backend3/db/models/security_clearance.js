"use strict";
module.exports = (sequelize, DataTypes) => {
  const security_clearance = sequelize.define(
    "security_clearance",
    {
      description_en: DataTypes.STRING,
      description_fr: DataTypes.STRING
    },
    {}
  );
  security_clearance.associate = function(models) {
    security_clearance.hasOne(models.user);
  };
  return security_clearance;
};
