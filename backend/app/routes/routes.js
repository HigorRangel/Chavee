const app = require('../../config/server');
const dbConnection = require('../../config/dbServer');
const {criarImobiliaria} = require("../controllers/imobiliaria");
const {getAllChaves} = require("../controllers/chave");

module.exports = {
    imobiliariaInserir:function(){
        app.post("/imobiliaria/inserir",function(req,res){
            criarImobiliaria(app,req,res);
        })
    },

    chavesListar:function(){
        app.get("/chave/listar",function(req,res){
            getAllChaves(app,req,res);
        })
    }
}