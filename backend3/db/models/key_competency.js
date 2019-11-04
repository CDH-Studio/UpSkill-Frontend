"use strict";
module.exports = (sequelize, DataTypes) => {
  const key_competency = sequelize.define(
    "key_competency",
    {
      description_en: DataTypes.STRING,
      description_fr: DataTypes.STRING
    },
    {}
  );
  key_competency.associate = function(models) {
    user.hasOne(models.user);
  };
  return key_competency;
};
