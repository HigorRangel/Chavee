const app = require('../../config/server');
const dbConnection = require('../../config/dbServer');
const {criarImobiliaria} = require("../controllers/imobiliaria");

module.exports = {
    imobiliariaInserir:function(){
        app.post("/imobiliaria/inserir",function(req,res){
            criarImobiliaria(app,req,res);
        })
    }
}