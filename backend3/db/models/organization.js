"use strict";
module.exports = (sequelize, DataTypes) => {
  const organization = sequelize.define("organization", {}, {});
  organization.associate = function(models) {
    // associations can be defined here
  };
  return organization;
};
