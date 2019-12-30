var sql = require('mssql');
var poolConnection = require('../conection/connection');

exports.getUsers = async (req) => {
    try {
        const pool = await poolConnection.getConnection();
        let result = await pool.request()
            .output('Resultado', sql.Bit)
            .execute('getUsers');
        sql.close();
        console.log(result);
        return result;

    } catch (err) {
        console.log(err)
        sql.close();
        return "Error en " + err;   
    }
}
exports.getEvents = async (req) => {
    try {
        const pool = await poolConnection.getConnection();
        let result = await pool.request()
            .output('Resultado', sql.Bit)
            .execute('getEvents');
        sql.close();
        console.log(result);
        return result;

    } catch (err) {
        console.log(err)
        sql.close();
        return "Error en " + err;   
    }
}