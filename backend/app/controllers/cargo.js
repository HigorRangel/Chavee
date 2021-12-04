const {connection} = require("../../utils");
const {getCargosByImobiliariaId, createCargo, updateCargo } = require("../models/cargo");

module.exports.listarCargos = function(app,req,res){
    getCargosByImobiliariaId(req.params.id_imobiliaria,connection,function(error,result){
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
    updateCargo(req.params.id_cargo,req.body,connection,function(error,result){
        if(!error){
            res.status(200).send(result);
        }else{
            res.status(400).send(error);
        }
    })
}
