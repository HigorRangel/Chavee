const {connection,SECRET,  tratarUndefined} = require("../../utils");
const {getUsuariosByImobiliariaId,createUsuario,updateUsuario, getUsuarioByEmail} = require("../models/usuario");
const md5 = require('md5');
const jwt = require("jsonwebtoken");

module.exports.listarUsuarios = function(app,req,res){
    getUsuariosByImobiliariaId(req.params.id_imobiliaria,connection,function(error,result){
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
    updateUsuario(req.params.id_usuario,formattedBody,connection,function(error,result){
        if(!error){
            res.status(200).send(result);
        }else{
            res.status(400).send(error);
        }
    })
}

module.exports.loginController =  async function (app, req, res, errors) {
    if (!errors.isEmpty()) {
      errors = errors.array();
      const erros = {
        message: "Campo email invalido",
        erros: errors,
      };
      res.send(erros);
    }

    getUsuarioByEmail(req.body.email, connection, function (error, result) {
      if (error) {
        res.send("Não foram encontradas contas com este e-mail.");
      } else {
        if (result[0]) {
          if(md5(req.body.senha) == result[0].senha){
              const token = jwt.sign(
                {
                  id: result[0].id,
                  email: result[0].email,
                  nivel_acesso: result[0].nivel_acesso,
                  id_imobiliaria: result[0].id_imobiliaria
                },
                SECRET,
                {
                  expiresIn: "1h",
                }
              );

              res.status(200).send({
                auth: true,
                id: result[0].id,
                email: result[0].email,
                primeiro_nome: result[0].primeiro_nome,
                nomes_meio: result[0].nomes_meio,
                ultimo_nome: result[0].ultimo_nome,
                contato: result[0].contato,
                cod_cargo: result[0].cod_cargo,
                nivel_acesso: result[0].nivel_acesso,
                id_imobiliaria: result[0].id_imobiliaria,
                token: token,
              });
            } else {
              res.status(401).send({ message: "Senha inválida!" });
            }
          }else {
          res.status(404).send({ message: "Usuário inválido!" });
        }
      }
    });
}