let sql = "";
module.exports = {
    getChavesByImobiliariaId: function (body, connection, callback) {
        sql = `select ch.* from chave ch  inner join usuario u on ch.usuario = u.id
        inner join cargo cg on u.cod_cargo = cg.id
        inner join imobiliaria i on cg.cod_imobiliaria = i.id
        where i.id = ${body.codigo_imobiliaria}`
        connection.query(sql, callback);
    },

    setChave:function (body,connection,callback){
        sql=`INSERT INTO chave (rua,bairro,cidade,estado,numero,
            complemento,situacao,finalidade,categoria_imovel,
            cod_interno,cod_imovel,observacao,usuario)
            VALUES (${body.rua}, ${body.bairro}, ${body.cidade}, ${body.estado}, ${body.numero},
            ${body.complemento}, ${body.situacao}, ${body.finalidade},${body.categoria_imovel},
            ${body.cod_interno}, ${body.cod_imovel}, ${body.observacao},${body.usuario})`
    }
}