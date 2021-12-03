const {connection} = require("../../utils");
const { getChavesByImobiliariaId,setChave } = require("../models/chave");

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
    setChave(req.body,connection,function(error,result){
        if(!error){
            res.status(200).send(result);
        }else{
            res.status(400).send(error);
        }
    })
}