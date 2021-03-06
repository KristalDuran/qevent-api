var sql = require('mssql');
var poolConnection = require('../conection/connection');

exports.getUsers = async (req) => {
    try {
        const pool = await poolConnection.getConnection();
        let result = await pool.request()
            .output('Resultado', sql.Bit)
            .execute('getUsers');
        sql.close();
        //console.log(result);
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
        //console.log(result);
        return result;

    } catch (err) {
        console.log(err)
        sql.close();
        return "Error en " + err;   
    }
}

exports.searchEvent = async (req) => {
    try {
        const pool = await poolConnection.getConnection();
        let result = await pool.request()
            .input('filtro', sql.VarChar(300), req.filter)//2
            .output('Resultado', sql.Bit)
            .execute('searchEvent');
        sql.close();
        //console.log(result);
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
            .input('id_evento', sql.Int, req.idevento)//2
            .output('Resultado', sql.Bit)
            .execute('getEvent');
        sql.close();
        //console.log(result);
        return result;

    } catch (err) {
        console.log(err)
        sql.close();
        return "Error en " + err;   
    }
}
exports.getComments = async (req) => {
    try {
        const pool = await poolConnection.getConnection();
        let result = await pool.request()
            .input('id_evento', sql.Int, req.idevento)//2
            .output('Resultado', sql.Bit)
            .execute('getComments');
        sql.close();
        //console.log(result);
        return result;

    } catch (err) {
        console.log(err)
        sql.close();
        return "Error en " + err;   
    }
}
exports.getRegistered = async (req) => {
    try {
        const pool = await poolConnection.getConnection();
        let result = await pool.request()
            .input('id_evento', sql.Int, req.idevento)//2
            .output('Resultado', sql.Bit)
            .execute('getRegistered');
        sql.close();
        //console.log(result);
        return result;

    } catch (err) {
        console.log(err)
        sql.close();
        return "Error en " + err;   
    }
}
exports.getInvitadosEvent = async (req) => {
    try {
        const pool = await poolConnection.getConnection();
        let result = await pool.request()
            .input('id_evento', sql.Int, req.id)//2
            .output('Resultado', sql.Bit)
            .execute('getInvitadosEvento');
        sql.close();
        //console.log(result);
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
            .input('id_user', sql.Int, req.id)//2
            .output('Resultado', sql.Bit)
            .execute('getUser');
        sql.close();
        return result;

    } catch (err) {
        console.log(err)
        sql.close();
        return "Error en " + err;   
    }
}
exports.getMyEvents= async (req) => {
    try {
        const pool = await poolConnection.getConnection();
        let result = await pool.request()
            .input('idusuario', sql.Int, req.id)//2
            .output('Resultado', sql.Bit)
            .execute('getMyEvents');
        sql.close();
        return result;

    } catch (err) {
        console.log(err)
        sql.close();
        return "Error en " + err;   
    }
}
exports.getAcces= async (req) => {
    try {
        const pool = await poolConnection.getConnection();
        let result = await pool.request()
            .input('nameuser',                sql.VarChar(20),    req.nameuser)
            .input('password',                sql.VarChar(20),    req.password)
            .output('Resultado', sql.Bit)
            .execute('getAcces');
        sql.close();
        return result;

    } catch (err) {
        console.log(err)
        sql.close();
        return "Error en " + err;   
    }
}
exports.isRegistered= async (req) => {
    try {
        const pool = await poolConnection.getConnection();
        let result = await pool.request()
            .input('idusuario', sql.Int, 4)
            .input('idevento', sql.Int, 3)
            .output('Resultado', sql.Bit)
            .execute('isRegistered');
        sql.close();
        return result;

    } catch (err) {
        console.log(err)
        sql.close();
        return "Error en " + err;   
    }
}