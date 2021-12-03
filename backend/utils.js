const dbConnection = require("./config/dbserver");
const connection = dbConnection();

module.exports = { connection };