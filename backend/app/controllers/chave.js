const {connection} = require("../../utils");
const { getChavesByImobiliariaId } = require("../models/chave");

module.exports.getAllChaves = function(app,req,res){
    getChavesByImobiliariaId(req.body,connection,function(error,result){
        if(!error){
            res.status(200).send(result);
        }else{
            res.status(400).send(error);
        }
    })
}