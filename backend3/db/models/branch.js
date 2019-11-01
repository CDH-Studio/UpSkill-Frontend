"use strict";
module.exports = (sequelize, DataTypes) => {
  const branch = sequelize.define(
    "branch",
    {
      description: DataTypes.STRING,
      acronym_en: DataTypes.STRING,
      acronym_fr: DataTypes.STRING,
      description_en: DataTypes.STRING,
      description_fr: DataTypes.STRING,
      address_en: DataTypes.STRING,
      address_fr: DataTypes.STRING
    },
    {}
  );
  branch.associate = function(models) {
    // associations can be defined here
  };
  return branch;
};