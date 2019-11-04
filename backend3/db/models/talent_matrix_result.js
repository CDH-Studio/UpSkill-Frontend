"use strict";
module.exports = (sequelize, DataTypes) => {
  const talent_matrix_result = sequelize.define(
    "talent_matrix_result",
    {
      description_en: DataTypes.STRING,
      description_fr: DataTypes.STRING
    },
    {}
  );
  talent_matrix_result.associate = function(models) {
    talent_matrix_result.hasOne(models.user);
  };
  return talent_matrix_result;
};
