var sql = require('mssql');
var poolConnection = require('../conection/connection');


exports.addEvent = async (req) => {
    try {
        const pool = await poolConnection.getConnection();
        let result = await pool.request()
            .input('nameEv',              sql.VarChar(50),   'Cristian')//req.nameEvento
            .input('descripcionEV',               sql.VarChar(300),    'otro@gmail.com')
            .input('ubicacion',                sql.VarChar(200),    'Alajuela, Costa Rica')
            .input('tipo',                sql.VarChar(100),    'Cultural')//req.tipo
            .input('fecha',                sql.Date,    '2020-02-21')//req.fecha
            .input('hora',                      sql.Time,   '12:30')
            .input('restriccion',                sql.VarChar(200),    'Correr')
            .input('idencargado',                sql.Int,    1)//req.idEncargado
            .input('nameInv',                sql.VarChar(50),    'Carlitos')//req.nameInv
            .input('descInv',                      sql.VarChar(300),   '88339374')
            .input('correoInv',                sql.VarChar(50),    'otro@gmail.com')
            .input('numeroInv',                sql.VarChar(8),    '88339374')
            .input('URLimgInv',                sql.VarChar(300),    'url.com')
            .input('URLimgEv',                      sql.VarChar(300),   'url.com')
            .output('Resultado',                sql.Bit)
            .execute('addEvent');
            
        sql.close();
        console.log(result);
        return result;

    } catch (err) {
        sql.close();
        console.log(err);
        return "Error en " + err;
    }
}
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