const app = require('../../config/server');
const {check, validationResult } = require("express-validator");
const { verifyJWT } = require("../../utils");
const { criarImobiliaria,listarImobiliarias, atualizarImobiliaria } = require("../controllers/imobiliaria");
const { listarChaves, inserirChave, atualizarChave } = require("../controllers/chave");
const { listarCargos, inserirCargo, atualizarCargo } = require('../controllers/cargo');
const { listarUsuarios, inserirUsuario, atualizarUsuario, loginController } = require('../controllers/usuario');
const { listarOperacoes, inserirOperacao, atualizarOperacao } = require('../controllers/operacao');

module.exports = {
    imobiliariasListar:function(){
        app.get("/imobiliaria/listar", function(req,res){
            listarImobiliarias(app,req,res);
        })
    },

    imobiliariaInserir:function(){
        app.post("/imobiliaria/inserir",function(req,res){
            criarImobiliaria(app,req,res);
        })
    },

    imobiliariaAtualizar:function(){
        app.put("/imobiliaria/atualizar/:id_imobiliaria",verifyJWT, function(req,res){
            atualizarImobiliaria(app,req,res);
        })
    },

    chavesListar:function(){
        app.get("/chave/listar/:id_imobiliaria",function(req,res){
            listarChaves(app,req,res);
        })
    },

    chaveInserir:function(){
        app.post("/chave/inserir",verifyJWT,function(req,res){
            inserirChave(app,req,res);
        })
    },

    chaveAtualizar:function(){
        app.put("/chave/atualizar/:id_chave",verifyJWT,function(req,res){
            atualizarChave(app,req,res);
        })
    },

    cargosListar:function(){
        app.get("/cargo/listar/:id_imobiliaria",function(req,res){
            listarCargos(app,req,res);
        })
    },

    cargoInserir:function(){
        app.post("/cargo/inserir",verifyJWT,function(req,res){
            inserirCargo(app,req,res);
        })
    },

    cargoAtualizar:function(){
        app.put("/cargo/atualizar/:id_cargo",verifyJWT,function (req,res) {
            atualizarCargo(app,req,res);
        })
    },

    usuariosListar:function(){
        app.get("/usuario/listar/:id_imobiliaria",function(req,res){
            listarUsuarios(app,req,res);
        })
    },

    usuarioInserir:function(){
        app.post("/usuario/inserir",verifyJWT,function(req,res){
            inserirUsuario(app,req,res);
        })
    },

    usuarioAtualizar:function(){
        app.put("/usuario/atualizar/:id_usuario",verifyJWT,function (req,res) {
            atualizarUsuario(app,req,res);
        })
    },

    loginUsuario: function (app) {
        app.post("/login",
        [check('email').isEmail().withMessage('O campo deve ser prenchido com um email válido.')],
        async (req, res) => {
          let erros = validationResult(req);
          loginController(app, req, res, erros);
        });
      },

    operacoesListar:function(){
        app.get("/operacao/listar/:id_imobiliaria",function(req,res){
            listarOperacoes(app,req,res);
        })
    },

    operacaoInserir:function(){
        app.post("/operacao/inserir",verifyJWT,function(req,res){
            inserirOperacao(app,req,res);
        })
    },

    operacaoAtualizar:function(){
        app.put("/operacao/atualizar/:id_operacao",verifyJWT,function (req,res) {
            atualizarOperacao(app,req,res);
        })
    },
}