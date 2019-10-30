"use strict";
module.exports = (sequelize, DataTypes) => {
  const user_skill = sequelize.define("user_skill", {}, {});
  user_skill.associate = function(models) {
    // associations can be defined here
  };
  return user_skill;
};
