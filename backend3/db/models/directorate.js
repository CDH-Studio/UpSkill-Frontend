"use strict";
module.exports = (sequelize, DataTypes) => {
  const directorate = sequelize.define(
    "directorate",
    {
      acronym_en: DataTypes.STRING,
      acronym_fr: DataTypes.STRING,
      description_en: DataTypes.STRING,
      description_fr: DataTypes.STRING,
      address_en: DataTypes.STRING,
      address_fr: DataTypes.STRING
    },
    {}
  );
  directorate.associate = function(models) {
    // associations can be defined here
  };
  return directorate;
};
