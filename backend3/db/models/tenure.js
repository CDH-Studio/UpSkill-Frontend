"use strict";
module.exports = (sequelize, DataTypes) => {
  const tenure = sequelize.define(
    "tenure",
    {
      description_en: DataTypes.STRING,
      description_fr: DataTypes.STRING
    },
    {}
  );
  tenure.associate = function(models) {
    user.hasOne(models.user);
  };
  return tenure;
};
