'use strict';
module.exports = (sequelize, DataTypes) => {
  const education = sequelize.define('education', {
    start_date: DataTypes.DATE,
    end_date: DataTypes.DATE
  }, {});
  education.associate = function(models) {
    // associations can be defined here
  };
  return education;
};