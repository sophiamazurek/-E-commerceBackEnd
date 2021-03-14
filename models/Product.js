// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');
const Category = require('./Category');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
  
    product_name:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  price:{
    type: DataTypes.DECIMAL,
    allowNull: false,
    //add decimal validation
  },
  stock:{
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 10,
    //validate that it is a num
  },
  category_id:{
    type: DataTypes.INTEGER,
   
    //References the category model's id
    references:{
      model:Category,
      key:'id'
    }


  },
},
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Product',
  }
);

module.exports = Product;
