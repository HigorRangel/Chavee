const app = require('../../config/server');
const {criarImobiliaria} = require("../controllers/imobiliaria");
const { listarChaves, inserirChave } = require("../controllers/chave");
const { listarCargos, inserirCargo, atualizarCargo, deletarCargo } = require('../controllers/cargo');

module.exports = {
    imobiliariaInserir:function(){
        app.post("/imobiliaria/inserir",function(req,res){
            criarImobiliaria(app,req,res);
        })
    },

    chavesListar:function(){
        app.get("/chave/listar",function(req,res){
            listarChaves(app,req,res);
        })
    },

    chaveInserir:function(){
        app.post("/chave/inserir",function(req,res){
            inserirChave(app,req,res);
        })
    },

    cargosListar:function(){
        app.get("/cargo/listar",function(req,res){
            listarCargos(app,req,res);
        })
    },

    cargoInserir:function(){
        app.post("/cargo/inserir",function(req,res){
            inserirCargo(app,req,res);
        })
    },

    cargoAtualizar:function(){
        app.put("/cargo/atualizar",function (req,res) {
            atualizarCargo(app,req,res);
        })
    },

    cargoDeletar:function(){
        app.delete("/cargo/deletar",function (req,res){
            deletarCargo(app,req,res);
        })
    }
}