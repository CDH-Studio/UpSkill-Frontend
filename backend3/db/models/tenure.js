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
    tenure.hasOne(models.user);
  };
  return tenure;
};
