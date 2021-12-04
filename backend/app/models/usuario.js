let sql = "";

module.exports = {
    getUsuariosByImobiliariaId:function (body,connection,callback){
        sql=`SELECT u.* from usuario u
        inner join cargo c on u.cod_cargo = c.id
        inner join imobiliaria i on c.cod_imobiliaria = i.id
        where i.id = ${body.cod_imobiliaria}`;
        connection.query(sql,callback)
    },

    createUsuario:function(body,connection,callback){
        sql =`INSERT INTO usuario (primeiro_nome,nomes_meio,ultimo_nome,email,
        senha,contato,situacao,cod_cargo) VALUES (${body.primeiro_nome}, ${body.nomes_meio},
        ${body.ultimo_nome}, ${body.email}, md5(${body.senha}),
        ${body.contato}, ${body.situacao},${body.cod_cargo})`
        connection.query(sql,callback);
    },

    updateUsuario:function(body,connection,callback){
        sql = `UPDATE usuario SET primeiro_nome = ${body.primeiro_nome},nomes_meio =  ${body.nomes_meio},
        ultimo_nome = ${body.ultimo_nome},email = ${body.email}, senha = md5(${body.senha}),
        contato = ${body.contato}, situacao = ${body.situacao}, cod_cargo = ${body.cod_cargo}
        WHERE id = ${body.id}`
        connection.query(sql,callback);
    }
}