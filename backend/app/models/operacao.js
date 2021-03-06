let sql = "";

module.exports = {
    getOperacoesByImobiliariaId:function (id_imobiliaria,connection,callback){
        sql =`select o.*,DATE_FORMAT(o.data_retirada, '%d/%m/%Y') data_retirada,
        DATE_FORMAT(o.entrega_prevista, '%d/%m/%Y') entrega_prevista,
        DATE_FORMAT(o.data_devolucao, '%d/%m/%Y') data_devolucao,
        COALESCE(ch.cod_imovel, "n/D") as cod_imovel,ch.id as id_chave,
        CONCAT (ch.rua,' ',ch.numero,', ',ch.bairro,' ',ch.cidade) as endereco from operacao o 
		inner join chave ch on o.cod_chave = ch.id
        inner join usuario u on o.cod_usuario = u.id
        inner join cargo c on u.cod_cargo = c.id
        inner join imobiliaria i on c.cod_imobiliaria = i.id
        where i.id = ${id_imobiliaria}
        order by o.situacao DESC`;
        connection.query(sql,callback);
    },

    createOperacao:function(body,connection,callback){
        sql = `INSERT INTO operacao (tipo_doc,documento,nome_cliente,descricao_retirada,
        entrega_prevista, cod_chave, cod_usuario) VALUES (${body.tipo_doc},
        ${body.documento}, ${body.nome_cliente}, ${body.descricao_retirada},
        ${body.entrega_prevista}, ${body.cod_chave}, ${body.cod_usuario})`;
        connection.query(sql,callback);
    },

    updateOperacao:function(id_operacao,body,connection,callback){
        sql = `UPDATE operacao SET descricao_devolucao = ${body.descricao_devolucao},
        data_devolucao = now(), situacao = 0
        WHERE id = ${id_operacao}`;
        connection.query(sql,callback);
    }

}