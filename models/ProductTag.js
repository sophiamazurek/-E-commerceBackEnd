const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
   // {
  //   id: DataTypes.INTEGER,
  //   allowNull: false,
  // },
  {
    product_id: DataTypes.INTEGER,
    //References the product model's id

  },
  {
    tag_id: DataTypes.INTEGER,
    //References the tag model's id
    
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
