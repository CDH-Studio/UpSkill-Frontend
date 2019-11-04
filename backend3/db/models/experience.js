"use strict";
module.exports = (sequelize, DataTypes) => {
  const experience = sequelize.define(
    "experience",
    {
      organization_en: DataTypes.STRING,
      organization_fr: DataTypes.STRING,
      job_title_en: DataTypes.STRING,
      job_title_fr: DataTypes.STRING,
      description_en: DataTypes.STRING,
      description_fr: DataTypes.STRING,
      start_date: DataTypes.DATE,
      end_date: DataTypes.DATE
    },
    {}
  );
  experience.associate = function(models) {
    experience.belongsTo(model.user);
  };
  return experience;
};
