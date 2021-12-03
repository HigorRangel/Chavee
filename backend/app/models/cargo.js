let sql = "";

module.exports = {
    getCargos: function (body,connection,callback){
        sql=`SELECT * from cargo WHERE cod_imobiliaria = ${body.cod_imobiliaria}`;
        connection.query(sql,callback)
    },

    createCargo: function (body,connection,callback){
        sql=`INSERT INTO cargo (descricao,nivel_acesso,cod_imobiliaria) 
        VALUES ("${body.descricao}",${body.nivel_acesso},${body.cod_imobiliaria})`;
        connection.query(sql,callback)
    },

    updateCargo: function (body,connection,callback){
        sql=`UPDATE cargo SET descricao = "${body.descricao}" , nivel_acesso = ${body.nivel_acesso} WHERE id = ${body.id}`;
        connection.query(sql,callback)
    },

    deleteCargo: function (body,connection,callback){
        sql=`DELETE FROM cargo WHERE id = ${body.id}`;
        connection.query(sql,callback)
    }
}