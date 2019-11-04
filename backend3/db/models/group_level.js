"use strict";
module.exports = (sequelize, DataTypes) => {
  const group_level = sequelize.define(
    "group_level",
    {
      description: DataTypes.STRING
    },
    {}
  );
  group_level.associate = function(models) {
    user.hasOne(models.user);
  };
  return group_level;
};
