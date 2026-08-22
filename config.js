require("dotenv").config();

module.exports = {
  port: process.env.PORT || 6589,
  username: process.env.APP_USERNAME,
  password: process.env.APP_PASSWORD,
  token: process.env.APP_TOKEN,
};