const {connection} = require("../../utils");
const {getUsuariosByImobiliariaId,createUsuario,updateUsuario} = require("../models/usuario");
const { tratarUndefined } = require("../../utils");

module.exports.listarUsuarios = function(app,req,res){
    getUsuariosByImobiliariaId(req.body,connection,function(error,result){
        if(!error){
            res.status(200).send(result);
        }else{
            res.status(400).send(error);
        }
    })
}

module.exports.inserirUsuario = function(app,req,res){
    let formattedBody = tratarUndefined(req.body);
    createUsuario(formattedBody,connection,function(error,result){
        if(!error){
            res.status(200).send(result);
        }else{
            res.status(400).send(error);
        }
    })
}

module.exports.atualizarUsuario = function(app,req,res){
    let formattedBody = tratarUndefined(req.body);
    updateUsuario(formattedBody,connection,function(error,result){
        if(!error){
            res.status(200).send(result);
        }else{
            res.status(400).send(error);
        }
    })
}
