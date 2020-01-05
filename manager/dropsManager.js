var sql = require('mssql');
var poolConnection = require('../conection/connection');

exports.deleteUser = async (req) => {
    try {
        console.log(req)
        const pool = await poolConnection.getConnection();
        let result = await pool.request()
            .input('id_usuario',            sql.Int,    req.idUsuario)//1
            .output('Resultado',    sql.Bit)
            .execute('deleteUser');
            
        sql.close();
        console.log(result);
        return result;

    } catch (err) {
        sql.close();
        console.log(err);
        return "Error en " + err;
    }
};
exports.deleteEvent = async (req) => {
    try {
        console.log(req)
        const pool = await poolConnection.getConnection();
        let result = await pool.request()
            .input('id_evento',            sql.Int,    req.idEvento) //1
            .output('Resultado',    sql.Bit)
            .execute('deleteEvent');
            
        sql.close();
        console.log(result);
        return result;

    } catch (err) {
        sql.close();
        console.log(err);
        return "Error en " + err;
    }
};