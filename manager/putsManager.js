var sql = require('mssql');
var poolConnection = require('../conection/connection');

exports.addUser = async (req) => {
    try {
        const pool = await poolConnection.getConnection();
        let result = await pool.request()
            .input('name',              sql.VarChar(75),   'Cristian Nodal')
            .input('email',               sql.VarChar(50),    'otro@gmail.com')
            .input('rol',                sql.VarChar(15),    'Miembro')
            //.input('nameuser',                sql.VarChar(10),    'crnodal')
            //.input('password',                sql.VarChar(10),    '12345')
            .input('number',                      sql.VarChar(8),   '88339374')
            .output('Resultado',                sql.Bit)
            .execute('addUser');
            
        sql.close();
        console.log(result);
        return result;

    } catch (err) {
        sql.close();
        console.log(err);
        return "Error en " + err;
    }
}