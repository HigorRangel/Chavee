const app = require('../../config/server');
const { criarImobiliaria } = require("../controllers/imobiliaria");
const { listarChaves, inserirChave, atualizarChave } = require("../controllers/chave");
const { listarCargos, inserirCargo, atualizarCargo } = require('../controllers/cargo');
const { listarUsuarios, inserirUsuario, atualizarUsuario } = require('../controllers/usuario');
const { listarOperacoes, inserirOperacao, atualizarOperacao } = require('../controllers/operacao');

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

    chaveAtualizar:function(){
        app.put("/chave/atualizar",function(req,res){
            atualizarChave(app,req,res);
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

    usuariosListar:function(){
        app.get("/usuario/listar",function(req,res){
            listarUsuarios(app,req,res);
        })
    },

    usuarioInserir:function(){
        app.post("/usuario/inserir",function(req,res){
            inserirUsuario(app,req,res);
        })
    },

    usuarioAtualizar:function(){
        app.put("/usuario/atualizar",function (req,res) {
            atualizarUsuario(app,req,res);
        })
    },

    operacoesListar:function(){
        app.get("/operacao/listar",function(req,res){
            listarOperacoes(app,req,res);
        })
    },

    operacaoInserir:function(){
        app.post("/operacao/inserir",function(req,res){
            inserirOperacao(app,req,res);
        })
    },

    operacaoAtualizar:function(){
        app.put("/operacao/atualizar",function (req,res) {
            atualizarOperacao(app,req,res);
        })
    },
}