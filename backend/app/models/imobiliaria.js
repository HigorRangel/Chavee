let sql = "";

module.exports = {
    getAllImobiliarias:function (connection,callback){
        sql = `SELECT *, DATE_FORMAT(data_cadastro, '%d/%m/%Y') data_cadastro from imobiliaria`;
        connection.query(sql,callback);
    },

    setImobiliaria: function (body, connection, callback) {
        sql = `CALL criaImobiliaria ("${body.nome_fantasia}", "${body.razao_social}", "${body.cnpj}", "${body.nome_cargo}",
        "${body.primeiro_nome}", "${body.nomes_meio}", "${body.ultimo_nome}", "${body.email}", 
        "${body.contato}", "${body.senha}");`
        connection.query(sql, callback);
    },

    updateImobiliaria: function(id_imobiliaria,body,connection,callback){
       sql = `UPDATE imobiliaria SET nome_fantasia = "${body.nome_fantasia}" , razao_social = "${body.razao_social}", cnpj = "${body.cnpj}" WHERE id = ${id_imobiliaria}`;
       connection.query(sql,callback); 
    }
    
}