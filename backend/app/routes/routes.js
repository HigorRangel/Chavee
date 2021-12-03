const app = require('../../config/server');
const dbConnection = require('../../config/dbServer');
const {criarImobiliaria} = require("../controllers/imobiliaria");
const {getAllChaves, inserirChave} = require("../controllers/chave");

module.exports = {
    imobiliariaInserir:function(){
        app.post("/imobiliaria/inserir",function(req,res){
            criarImobiliaria(app,req,res);
        })
    },

    chaveInserir:function(){
        app.post("/chave/inserir",function(req,res){
            inserirChave(app,req,res);
        })
    },

    chavesListar:function(){
        app.get("/chave/listar",function(req,res){
            listarChaves(app,req,res);
        })
    }

}