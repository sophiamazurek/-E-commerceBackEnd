// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
    // {
  //   id: DataTypes.INTEGER,
  //   allowNull: false,
  // },
  {
    product_name: DataTypes.STRING,
    allowNull: false,
  },
  {
    price: DataTypes.DECIMAL,
    allowNull: false,
    //add decimal validation
  },
  {
    stock: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 10,
    //validate that it is a num
  },
  {
    category_id: DataTypes.INTEGER,
   
    //References the category model's id


  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
