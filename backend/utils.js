const dbConnection = require("./config/dbserver");
const connection = dbConnection();
const jwt = require("jsonwebtoken");
const SECRET = "secretKey";

function verifyJWT(req, res, next) {
  const token = req.headers["authorization"];

  jwt.verify(token, SECRET, (error, decoded) => {
    if (error) {
      return res.status(401).send({ message: "Usuário não autenticado!" });
    }

    console.log(req.id);
    req.id = decoded.id;
    next();
  });
}

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

module.exports = { connection, SECRET, jwt, verifyJWT,tratarUndefined };