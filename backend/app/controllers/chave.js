const {connection, tratarUndefined} = require("../../utils");
const { getChavesByImobiliariaId,createChave } = require("../models/chave");

module.exports.listarChaves = function(app,req,res){
    getChavesByImobiliariaId(req.body,connection,function(error,result){
        if(!error){
            res.status(200).send(result);
        }else{
            res.status(400).send(error);
        }
    })
}

module.exports.inserirChave = function(app,req,res){
    let formattedBody = req.body;
    for (var key in formattedBody){
        if(formattedBody.hasOwnProperty(key)){
            formattedBody[key] = tratarUndefined(formattedBody[key]);
        }
    }
    
    createChave(formattedBody,connection,function(error,result){
        if(!error){
            res.status(200).send(result);
        }else{
            res.status(400).send(error);
        }
    })
}