"use strict";
module.exports = (sequelize, DataTypes) => {
  const career_journey = sequelize.define(
    "career_journey",
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
  career_journey.associate = function(models) {
    career_journey.belongsTo(model.user);
  };
  return career_journey;
};
