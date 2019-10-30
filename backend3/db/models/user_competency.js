"use strict";
module.exports = (sequelize, DataTypes) => {
  const user_competency = sequelize.define("user_competency", {}, {});
  user_competency.associate = function(models) {
    // associations can be defined here
  };
  return user_competency;
};
