module.exports = {
    getChavesByImobiliariaId: function (body, connection, callback) {
        sql = `select ch.* from chave ch  inner join usuario u on ch.usuario = u.id
        inner join cargo cg on u.cod_cargo = cg.id
        inner join imobiliaria i on cg.cod_imobiliaria = i.id
        where i.id = ${body.codigo_imobiliaria}`
        connection.query(sql, callback);
    }
}