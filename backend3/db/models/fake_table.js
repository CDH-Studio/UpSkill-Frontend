'use strict';
module.exports = (sequelize, DataTypes) => {
  const fake_table = sequelize.define('fake_table', {
    description: DataTypes.STRING
  }, {});
  fake_table.associate = function(models) {
    // associations can be defined here
  };
  return fake_table;
};