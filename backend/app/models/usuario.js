let sql = "";

module.exports = {
    getUsuariosByImobiliariaId:function (id_imobiliaria,connection,callback){
        sql=`SELECT u.id, CONCAT (u.primeiro_nome,' ',  COALESCE (u.nomes_meio, ''), ' ', u.ultimo_nome) as nome_completo,u.email,u.contato,c.descricao,u.situacao from usuario u
        inner join cargo c on u.cod_cargo = c.id
        inner join imobiliaria i on c.cod_imobiliaria = i.id
        where i.id = ${id_imobiliaria}`;
        connection.query(sql,callback)
    },

    getUsuarioByEmail: function (email, connection, callback) {
        sql = `select u.*,c.nivel_acesso,i.id as id_imobiliaria from usuario u
        inner join cargo c on u.cod_cargo = c.id
        inner join imobiliaria i on c.cod_imobiliaria = i.id
        where u.email = '${email}'`;
        connection.query(sql, callback);
    },

    createUsuario:function(body,connection,callback){
        sql =`INSERT INTO usuario (primeiro_nome,nomes_meio,ultimo_nome,email,
        senha,contato,cod_cargo) VALUES (${body.primeiro_nome}, ${body.nomes_meio},
        ${body.ultimo_nome}, ${body.email}, md5(${body.senha}),
        ${body.contato},${body.cod_cargo})`
        connection.query(sql,callback);
    },

    updateUsuario:function(id_usuario,body,connection,callback){
        sql = `UPDATE usuario SET primeiro_nome = ${body.primeiro_nome},nomes_meio =  ${body.nomes_meio},
        ultimo_nome = ${body.ultimo_nome},email = ${body.email}, senha = md5(${body.senha}),
        contato = ${body.contato}, situacao = ${body.situacao}, cod_cargo = ${body.cod_cargo}
        WHERE id = ${id_usuario}`
        connection.query(sql,callback);
    }
}