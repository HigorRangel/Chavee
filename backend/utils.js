const dbConnection = require("./config/dbserver");
const connection = dbConnection();

function tratarUndefined(body){

    let formattedBody = body;
    for (var key in formattedBody){
        if (formattedBody[key] && formattedBody[key] !== ""){
            formattedBody[key] =  "'" + formattedBody[key] + "'";
        }else{
            formattedBody[key] =  null
        }
    }
    return formattedBody
}

module.exports = { connection, tratarUndefined };