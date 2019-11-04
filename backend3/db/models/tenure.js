"use strict";
module.exports = (sequelize, DataTypes) => {
  const tenure = sequelize.define(
    "tenure",
    {
      descriptionEn: DataTypes.STRING,
      descriptionFr: DataTypes.STRING
    },
    {}
  );
  tenure.associate = function(models) {
    tenure.hasOne(models.user);
  };
  return tenure;
};
