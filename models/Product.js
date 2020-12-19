// import important parts of sequelize library
const { Model, DataTypes } = require("sequelize");
// import our database connection from config.js
const sequelize = require("../config/connection");

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // id
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    //Product name
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    //price
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        // check to make sure the value is a decimal
        isDecimal: true,
      },
    },
    //stock
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
      validate: {
        isNumeric: true,
      },
    },
    //categoty id
    category_id: {
      type: DataTypes.INTEGER, //give data type of col
      references: {
        //set the references
        model: "category", // the model in question
        key: "id", // the field from the model
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "product",
  }
);

module.exports = Product;
