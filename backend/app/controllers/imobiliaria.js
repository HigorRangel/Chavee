const {connection} = require("../../utils");
const { setImobiliaria, getAllImobiliarias } = require("../models/imobiliaria");

module.exports.listarImobiliarias = function (app,req,res){
    getAllImobiliarias(connection,function(error,result){
        if(!error){
            res.status(200).send(result);
        }else{
            res.status(400).send(error);
        }
    })
}

module.exports.criarImobiliaria = function (app,req,res){
    
    setImobiliaria(req.body,connection,function(error,result){
        if(!error){
            res.status(200).send(result);
        }else{
            res.status(400).send(error);
        }
    })
}
