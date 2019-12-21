var sql = require('mssql');
var poolConnection = require('../conection/connection');
/*
exports.DeleteEvent = async (req) => {
    try {
        console.log(req)
        const pool = await poolConnection.getPoolConnection();
        let result = await pool.request()
            .input('Id',            sql.Int,    req.Id)
            .output('Resultado',    sql.Bit)
            .execute('SP_Eliminar_Evento');
            
        sql.close();
        console.log(result);
        return result;

    } catch (err) {
        sql.close();
        console.log(err);
        return "Error en " + err;
    }
};*/