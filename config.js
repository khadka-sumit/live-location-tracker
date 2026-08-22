require("dotenv").config();

module.exports = {
  port: process.env.PORT || 6589,
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
  token: process.env.TOKEN,
};