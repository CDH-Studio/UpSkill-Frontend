'use strict';
module.exports = (sequelize, DataTypes) => {
  const user_organization = sequelize.define('user_organization', {
    start_date: DataTypes.DATE,
    end_date: DataTypes.DATE,
    current: DataTypes.BOOLEAN
  }, {});
  user_organization.associate = function(models) {
    // associations can be defined here
  };
  return user_organization;
};