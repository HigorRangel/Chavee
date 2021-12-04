const {connection, tratarUndefined} = require("../../utils");
const { getOperacoesByImobiliariaId,createOperacao,updateOperacao } = require("../models/operacao");

module.exports.listarOperacoes = function(app,req,res){
    getOperacoesByImobiliariaId(req.params.id_imobiliaria,connection,function(error,result){
        if(!error){
            res.status(200).send(result);
        }else{
            res.status(400).send(error);
        }
    })
}

module.exports.inserirOperacao = function(app,req,res){
    let formattedBody = tratarUndefined(req.body);
    createOperacao(formattedBody,connection,function(error,result){
        if(!error){
            res.status(200).send(result);
        }else{
            res.status(400).send(error);
        }
    })
}

module.exports.atualizarOperacao = function(app,req,res){
    let formattedBody = tratarUndefined(req.body);
    updateOperacao(req.params.id_operacao,formattedBody,connection,function(error,result){
        if(!error){
            res.status(200).send(result);
        }else{
            res.status(400).send(error);
        }
    })
}
