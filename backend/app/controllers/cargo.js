const {connection} = require("../../utils");
const {getCargos, createCargo, updateCargo, deleteCargo} = require("../models/cargo");

module.exports.listarCargos = function(app,req,res){
    getCargos(req.body,connection,function(error,result){
        if(!error){
            res.status(200).send(result);
        }else{
            res.status(400).send(error);
        }
    })
}

module.exports.inserirCargo = function(app,req,res){
    createCargo(req.body,connection,function(error,result){
        if(!error){
            res.status(200).send(result);
        }else{
            res.status(400).send(error);
        }
    })
}

module.exports.atualizarCargo = function(app,req,res){
    updateCargo(req.body,connection,function(error,result){
        if(!error){
            res.status(200).send(result);
        }else{
            res.status(400).send(error);
        }
    })
}

module.exports.deletarCargo = function(app,req,res){
    deleteCargo(req.body,connection,function(error,result){
        if(!error){
            res.status(200).send(result);
        }else{
            res.status(400).send(error);
        }
    })
}