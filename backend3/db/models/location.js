"use strict";
module.exports = (sequelize, DataTypes) => {
  const location = sequelize.define(
    "location",
    {
      addressEn: DataTypes.STRING,
      addressFr: DataTypes.STRING,
      city: DataTypes.STRING,
      provinceEn: DataTypes.STRING,
      provinceFr: DataTypes.STRING,
      country: DataTypes.STRING
    },
    {}
  );
  location.associate = function(models) {
    // associations can be defined here
  };
  return location;
};
