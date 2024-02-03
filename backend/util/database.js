const Sequelize = require("sequelize");
const dotenv = require("dotenv");

// get config vars
dotenv.config();

const sequelize = new Sequelize('expense', 'root', 'password', {
  dialect: "mysql",
  host: 'localhost',
});

module.exports = sequelize;
