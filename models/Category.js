const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  // {
  //   id: DataTypes.INTEGER,
  //   allowNull: false,
  // },
  {
    category_name: DataTypes.STRING,
    allowNull: false,
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
