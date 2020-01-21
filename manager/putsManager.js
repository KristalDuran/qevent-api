var sql = require('mssql');
var poolConnection = require('../conection/connection');

exports.addInvit = async (req) => {
    try {
        const pool = await poolConnection.getConnection();
        let result = await pool.request()
            .input('idevento ', sql.Int,    req.id)//2
            .input('nameInv',    sql.VarChar(50),   "Invitado")//req.nameInv
            .input('descInv',    sql.VarChar(300),   'esta es el invitado mejor invitado')
            .input('correoInv',  sql.VarChar(50),    'invitado@gmail.com')
            .input('numeroInv',  sql.VarChar(8),    '88888888')
            .input('URLimgInv',  sql.VarChar(300),   'algo.com')
            .output('Resultado',  sql.Bit)
            .execute('addInvitado');
            
        sql.close();
        console.log(result);
        return result;

    } catch (err) {
        sql.close();
        console.log(err);
        return "Error en " + err;
    }
}
exports.addEvent = async (req) => {
    try {
        const pool = await poolConnection.getConnection();
        let result = await pool.request()
            .input('nameEv',              sql.VarChar(50),   req.nameEv)//req.nameEvento
            .input('descripcionEV',               sql.VarChar(300),    req.descripcionEV)
            .input('ubicacion',                sql.VarChar(200),    req.ubicacion)
            .input('tipo',                sql.VarChar(100),    req.tipo)//req.tipo
            .input('fecha',                sql.VarChar(10),    req.fecha)//req.fecha
            .input('hora',                      sql.VarChar(5),   req.hora)
            .input('restriccion',                sql.VarChar(200),    req.restriccion)
            .input('idencargado',                sql.Int,    1)//req.idEncargado
            .input('publico',                sql.BIT,    1)//
            .input('URLimgEv',                      sql.VarChar(300),   req.URLimgEv)
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
            .input('name',              sql.VarChar(75),   req.name)
            .input('email',               sql.VarChar(50),    req.email)
            .input('rol',                sql.VarChar(15),    req.rol)
            .input('nameuser',                sql.VarChar(20),    req.nameuser)
            .input('password',                sql.VarChar(20),    req.password)
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
exports.shareEvent = async (req) => {
    try {
        const pool = await poolConnection.getConnection();
        let result = await pool.request()
            .input('idevento',              sql.INT,   req.id)
            .output('Resultado',                sql.Bit)
            .execute('shareEvent');
            
        sql.close();
        console.log(result);
        return result;

    } catch (err) {
        sql.close();
        console.log(err);
        return "Error en " + err;
    }
}
exports.addInscripcion = async (req) => {
    try {
        const pool = await poolConnection.getConnection();
        let result = await pool.request()
            .input('idusuario',              sql.INT,   1)
            .input('idevento',              sql.INT,   1)
            .output('Resultado',                sql.Bit)
            .execute('addInscripcion');
            
        sql.close();
        console.log(result);
        return result;

    } catch (err) {
        sql.close();
        console.log(err);
        return "Error en " + err;
    }
}
exports.evaluateEvent = async (req) => {
    try {
        const pool = await poolConnection.getConnection();
        let result = await pool.request()
            .input('idevento',              sql.INT,   req.id)
            .input('valor',               sql.INT,    req.number)
            .input('descripcion',                sql.VarChar(300),    req.comment)
            .output('Resultado',                sql.Bit)
            .execute('evaluateEvent');
            
        sql.close();
        console.log(result);
        return result;

    } catch (err) {
        sql.close();
        console.log(err);
        return "Error en " + err;
    }
}
