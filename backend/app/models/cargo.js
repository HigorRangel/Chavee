let sql = "";

module.exports = {
    getCargosByImobiliariaId: function (id_imobiliaria,connection,callback){
        sql=`SELECT id,descricao,nivel_acesso,situacao from cargo WHERE cod_imobiliaria = ${id_imobiliaria} `;
        connection.query(sql,callback)
    },

    createCargo: function (body,connection,callback){
        sql=`INSERT INTO cargo (descricao,nivel_acesso,cod_imobiliaria) 
        VALUES ("${body.descricao}",${body.nivel_acesso},${body.id_imobiliaria})`;
        connection.query(sql,callback)
    },

    updateCargo: function (id_cargo, body, connection,callback){
        sql=`UPDATE cargo SET descricao = "${body.descricao}" , nivel_acesso = ${body.nivel_acesso}, situacao = ${body.situacao} WHERE id = ${id_cargo}`;
        connection.query(sql,callback)
    }
    
}