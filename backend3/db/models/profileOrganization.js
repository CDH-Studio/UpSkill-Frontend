"use strict";
module.exports = (sequelize, DataTypes) => {
  const profileOrganization = sequelize.define(
    "profileOrganization",
    {
      organization: DataTypes.STRING,
      tier: DataTypes.INTEGER
    },
    {}
  );
  profileOrganization.associate = function(models) {
    profileOrganization.belongsTo(models.profile);
  };
  return profileOrganization;
};
