const { connect } = require("../../config/server");

let sql = "";

module.exports = {
    getOperacoesByImobiliariaId:function (body,connection,callback){
        sql =`select o.* from operacao o 
        inner join usuario u on o.cod_usuario = u.id
        inner join cargo c on u.cod_cargo = c.id
        inner join imobiliaria i on c.cod_imobiliaria = i.id
        where i.id = ${body.cod_imobiliaria}`;
        connection.query(sql,callback);
    },

    createOperacao:function(body,connection,callback){
        sql = `INSERT INTO operacao (tipo_doc,documento,nome_cliente,descricao_retirada,
        entrega_prevista, cod_chave, cod_usuario) VALUES (${body.tipo_doc},
        ${body.documento}, ${body.nome_cliente}, ${body.descricao_retirada},
        ${body.entrega_prevista}, ${body.cod_chave}, ${body.cod_usuario})`;
        connection.query(sql,callback);
    },

    updateOperacao:function(body,connection,callback){
        sql = `UPDATE operacao SET descricao_devolucao = ${body.descricao_devolucao},
        data_devolucao = now(), situacao = 0
        WHERE id = ${body.id}`;
        connection.query(sql,callback);
    }

}