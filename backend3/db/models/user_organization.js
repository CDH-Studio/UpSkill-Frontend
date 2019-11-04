"use strict";
module.exports = (sequelize, DataTypes) => {
  const user_organization = sequelize.define(
    "user_organization",
    {
      start_date: DataTypes.DATE,
      end_date: DataTypes.DATE,
      current: DataTypes.BOOLEAN
    },
    {}
  );
  user_organization.associate = function(models) {
    user_organization.hasOne(models.users);
    user_organization.belongsTo(models.department);
    user_organization.belongsTo(models.sector);
    user_organization.belongsTo(models.branch);
    user_organization.belongsTo(models.division);
    user_organization.belongsTo(models.directorate);
  };
  return user_organization;
};
