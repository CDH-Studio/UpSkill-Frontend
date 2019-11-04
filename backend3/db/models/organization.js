"use strict";
module.exports = (sequelize, DataTypes) => {
  const organization = sequelize.define(
    "organization",
    {
      startDate: DataTypes.DATE,
      endDate: DataTypes.DATE,
      current: DataTypes.BOOLEAN
    },
    {}
  );
  organization.associate = function(models) {
    // associations can be defined here
  };
  return organization;
};
