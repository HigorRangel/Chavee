const {connection, tratarUndefined} = require("../../utils");
const { getChavesByImobiliariaId,createChave, updateChave } = require("../models/chave");

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
    let formattedBody = tratarUndefined(req.body);
    createChave(formattedBody,connection,function(error,result){
        if(!error){
            res.status(200).send(result);
        }else{
            res.status(400).send(error);
        }
    })
}

module.exports.atualizarChave = function(app,req,res){
    let formattedBody = tratarUndefined(req.body);
    updateChave(formattedBody,connection,function(error,result){
        if(!error){
            res.status(200).send(result);
        }else{
            res.status(400).send(error);
        }
    })
}