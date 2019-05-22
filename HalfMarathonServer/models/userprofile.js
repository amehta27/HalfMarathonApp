'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserProfile = sequelize.define('UserProfile', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    emailaddress: DataTypes.STRING,
    streetaddress: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zipcode: DataTypes.INTEGER,
    cellphone: DataTypes.STRING,
    gender: DataTypes.STRING,
    dateofbirth: DataTypes.STRING,
    colorgroup: DataTypes.STRING,
    timeperiod: DataTypes.INTEGER,
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  UserProfile.associate = function(models) {
    // associations can be defined here
  };
  return UserProfile;
};