const {connection, tratarUndefined} = require("../../utils");
const { getChavesByImobiliariaId,createChave, updateChave,updateChaveSituacao } = require("../models/chave");

module.exports.listarChaves = function(app,req,res){
    getChavesByImobiliariaId(req.params.id_imobiliaria,connection,function(error,result){
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
    updateChave(req.params.id_chave,formattedBody,connection,function(error,result){
        if(!error){
            res.status(200).send(result);
        }else{
            res.status(400).send(error);
        }
    })
}

module.exports.situacaoChave = function(app,req,res){
    updateChaveSituacao(req.params.id_chave,req.body,connection,function(error,result){
        if(!error){
            res.status(200).send(result);
        }else{
            res.status(400).send(error);
        }
    })
}
