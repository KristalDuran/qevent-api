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
exports.getEvent = async (req) => {
    try {
        const pool = await poolConnection.getConnection();
        let result = await pool.request()
            .input('id_evento',req.id)//2
            .output('Resultado', sql.Bit)
            .execute('getEvent');
        sql.close();
        console.log(result);
        return result;

    } catch (err) {
        console.log(err)
        sql.close();
        return "Error en " + err;   
    }
}
exports.getUser = async (req) => {
    try {
        const pool = await poolConnection.getConnection();
        let result = await pool.request()
            .input('id_user',req.id)//2
            .output('Resultado', sql.Bit)
            .execute('getUser');
        sql.close();
        console.log(result);
        return result;

    } catch (err) {
        console.log(err)
        sql.close();
        return "Error en " + err;   
    }
}