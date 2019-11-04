"use strict";
module.exports = (sequelize, DataTypes) => {
  const organization = sequelize.define(
    "organization",
    {
      start_date: DataTypes.DATE,
      end_date: DataTypes.DATE,
      current: DataTypes.BOOLEAN
    },
    {}
  );
  organization.associate = function(models) {
    // associations can be defined here
  };
  return organization;
};
