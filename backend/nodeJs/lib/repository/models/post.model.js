const { DataTypes } = require('sequelize');
const sequelize = require('../config/database-config');


const Post = sequelize.define('Post', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
}, {
  tableName: 'post',
  schema: 'your_schema_name',
  timestamps: false,
});

module.exports = Post;
