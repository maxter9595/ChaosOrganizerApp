const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Message = sequelize.define('Message', {
  mesID: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  time: DataTypes.STRING,
  message: DataTypes.TEXT,
  encryption: DataTypes.BOOLEAN,
  userName: DataTypes.STRING,
  userID: DataTypes.UUID,
  password: DataTypes.STRING,
  fileType: DataTypes.STRING,
  fileName: DataTypes.STRING,
  originalName: DataTypes.STRING,
  groupId: DataTypes.UUID,
  dialogId: DataTypes.UUID
}, {
  tableName: 'messages',
  timestamps: false
});

module.exports = Message;
