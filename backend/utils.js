const dbConnection = require("./config/dbserver");
const connection = dbConnection();

function tratarUndefined(value){
    if (value && value !== ""){
        return "'" + value + "'";
    }else{
        return null
    }
}

module.exports = { connection, tratarUndefined };