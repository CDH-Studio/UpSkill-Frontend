'use strict';
module.exports = (sequelize, DataTypes) => {
  const second_language_proficiency = sequelize.define('second_language_proficiency', {
    reading_proficiency: DataTypes.STRING,
    writing_proficiency: DataTypes.STRING,
    oral_proficiency: DataTypes.STRING,
    reading_date: DataTypes.DATE,
    writing_date: DataTypes.DATE,
    oral_date: DataTypes.DATE
  }, {});
  second_language_proficiency.associate = function(models) {
    // associations can be defined here
  };
  return second_language_proficiency;
};