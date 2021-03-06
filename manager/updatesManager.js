var sql = require('mssql');
var poolConnection = require('../conection/connection');


exports.updateEvent = async (req) => {
    try {
        const pool = await poolConnection.getConnection();
        let result = await pool.request()
            .input('idEv',              sql.Int, req.id)
            .input('nameEv',              sql.VarChar(50), req.name)
            .input('descripcionEv',               sql.VarChar(300), req.description)
            .input('ubicacion',                sql.VarChar(200), req.address)
            .input('tipo',                sql.VarChar(100),    req.type)
            .input('fecha',                sql.VarChar(10),    req.date)
            .input('hora',                      sql.VarChar(5), req.time)
            .input('restriccion',                sql.VarChar(200), req.restriccion)
            .input('idencargado',                sql.Int,    1)//req.idEncargado
            .input('URLimgEv',                      sql.VarChar(300),   req.URLimgEv)
            .output('Resultado',                sql.Bit)
            .execute('editEvent');        
        sql.close();
        console.log(result);
        return result;

    } catch (err) {
        sql.close();
        console.log(err);
        return "Error en " + err;
    }
}
exports.updateInvitado = async (req) => {
    try {
        const pool = await poolConnection.getConnection();
        let result = await pool.request()
            .input('idInvitado',              sql.Int,    1)//req.idEvento
            .input('nameInv',                sql.VarChar(50),    'Carlitos')//req.nameInv
            .input('descInv',                      sql.VarChar(300),   '88339374')
            .input('correoInv',                sql.VarChar(50),    'otro@gmail.com')
            .input('numeroInv',                sql.VarChar(8),    '88339374')
            .input('URLimgInv',                sql.VarChar(300),    'url.com')
            .output('Resultado',                sql.Bit)
            .execute('editInvitado');
            
        sql.close();
        console.log(result);
        return result;

    } catch (err) {
        sql.close();
        console.log(err);
        return "Error en " + err;
    }
}


exports.updateUser = async (req) => {
    try {
        console.log(req)

        const pool = await poolConnection.getConnection();
        let result = await pool.request()
            .input('id_usuario',            sql.Int,    req.id)
            .input('name',              sql.VarChar(75),   req.name)
            .input('email',               sql.VarChar(50),    req.email)
            .input('rol',                sql.VarChar(15),    req.rol)
            .input('nameuser',                sql.VarChar(10),    req.nameuser)
            .input('password',                sql.VarChar(10),    '12345')
            .input('number',                      sql.VarChar(8),   '88339374')
            .output('Resultado',    sql.Bit)
            .execute('editUser');
            
        sql.close();
        console.log(result);
        return result;

    } catch (err) {
        sql.close();
        console.log(err);
        return "Error en " + err;
    }
};

exports.updateLikeEvent = async (req) => {
    try {
        console.log(req)
        const pool = await poolConnection.getConnection();
        let result = await pool.request()
            .input('idevento',            sql.Int,    req.id)
            .input('idusuario',              sql.Int,   req.userId)
            .output('Resultado',    sql.Bit)
            .execute('likeEvent');
            
        sql.close();
        console.log(result);
        return result;

    } catch (err) {
        sql.close();
        console.log(err);
        return "Error en " + err;
    }
};

exports.updateDislikeEvent = async (req) => {
    try {
        const pool = await poolConnection.getConnection();
        let result = await pool.request()
            .input('idevento',            sql.Int,    req.id)
            .input('idusuario',              sql.Int,   req.userId)
            .output('Resultado',    sql.Bit)
            .execute('dislikeEvent');
            
        sql.close();
        console.log(result);
        return result;

    } catch (err) {
        sql.close();
        console.log(err);
        return "Error en " + err;
    }
};

exports.changeStatusEvent = async (req) => {
    try {
        const pool = await poolConnection.getConnection();
        let result = await pool.request()
            .input('id_evento',              sql.INT,   req.id)
            .output('Resultado',                sql.Bit)
            .execute('ChangeStatusEvent ');
            
        sql.close();
        console.log(result);
        return result;

    } catch (err) {
        sql.close();
        console.log(err);
        return "Error en " + err;
    }
}



