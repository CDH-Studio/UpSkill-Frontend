"use strict";
module.exports = (sequelize, DataTypes) => {
  const groupLevel = sequelize.define(
    "groupLevel",
    {
      description: DataTypes.STRING
    },
    {}
  );
  groupLevel.associate = function(models) {
    groupLevel.hasOne(models.profile);
  };
  return groupLevel;
};
