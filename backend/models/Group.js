const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Group = sequelize.define('Group', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  active: DataTypes.BOOLEAN,
  avatar: DataTypes.STRING,
  name: DataTypes.STRING
}, {
  tableName: 'groups',
  timestamps: false
});

module.exports = Group;
