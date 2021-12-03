let sql = "";
module.exports = {
    setImobiliaria: function (body, connection, callback) {
        sql = `CALL criaImobiliaria ("${body.nome_fantasia}", "${body.razao_social}", "${body.cnpj}", "${body.nome_cargo}",
        "${body.primeiro_nome}", "${body.nomes_meio}", "${body.ultimo_nome}", "${body.email}", 
        "${body.contato}", "${body.senha}");`
        connection.query(sql, callback);
    }
}