const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const User = sequelize.define('User', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  avatar: DataTypes.STRING,
  login: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  },
  online: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  created: DataTypes.STRING
}, {
  tableName: 'users',
  timestamps: false
});

module.exports = User;
