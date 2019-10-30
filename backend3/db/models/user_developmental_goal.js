"use strict";
module.exports = (sequelize, DataTypes) => {
  const user_developmental_goal = sequelize.define(
    "user_developmental_goal",
    {},
    {}
  );
  user_developmental_goal.associate = function(models) {
    // associations can be defined here
  };
  return user_developmental_goal;
};
