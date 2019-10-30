"use strict";
module.exports = (sequelize, DataTypes) => {
  const career_mobility = sequelize.define(
    "career_mobility",
    {
      description_en: DataTypes.STRING,
      description_fr: DataTypes.STRING
    },
    {}
  );
  career_mobility.associate = function(models) {
    // associations can be defined here
  };
  return career_mobility;
};
