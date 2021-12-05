let sql = "";

module.exports = {
    getChavesByImobiliariaId: function (id_imobiliaria, connection, callback) {
        sql = `select ch.id,COALESCE(ch.cod_imovel, "n/D") as imovel, CONCAT (ch.rua,' ',ch.numero,', ',ch.bairro,' ',ch.cidade) as endereco, ch.situacao,CONCAT(u.primeiro_nome,' ',u.ultimo_nome) as funcionario from chave ch 
        inner join usuario u on ch.usuario = u.id
        inner join cargo cg on u.cod_cargo = cg.id
        inner join imobiliaria i on cg.cod_imobiliaria = i.id
        where i.id = ${id_imobiliaria}`
        connection.query(sql, callback);
    },

    createChave:function (body,connection,callback){
        sql=`INSERT INTO chave (rua,bairro,cidade,estado,numero,
            complemento,situacao,finalidade,categoria_imovel,
            cod_interno,cod_imovel,observacao,usuario,proprietario,contato)
            VALUES (${body.rua}, ${body.bairro}, ${body.cidade}, ${body.estado}, ${body.numero},
            ${body.complemento}, ${body.situacao}, ${body.finalidade},${body.categoria_imovel},
            ${body.cod_interno}, ${body.cod_imovel}, ${body.observacao},${body.usuario},
            ${body.proprietario},${body.contato})`
        connection.query(sql, callback);
    },

    updateChave:function (id_chave, body,connection, callback){
        sql=`UPDATE chave SET rua =  ${body.rua}, bairro = ${body.bairro}, cidade = ${body.cidade},
        estado = ${body.estado}, numero = ${body.numero}, complemento = ${body.complemento}, situacao = ${body.situacao},
        finalidade= ${body.finalidade}, categoria_imovel = ${body.categoria_imovel}, cod_interno = ${body.cod_interno},
        cod_imovel = ${body.cod_imovel}, observacao = ${body.observacao}, proprietario = ${body.proprietario}, contato = ${body.contato}
        WHERE id = ${id_chave}`;
        connection.query(sql,callback);
    }
}