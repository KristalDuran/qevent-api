var sql = require('mssql');
var poolConnection = require('../conection/connection');

exports.getReservations = async (req) => {
    try {
        const pool = await poolConnection.getConnection();
        let result = await pool.request()
            .query('select * from users');
            
        sql.close();
        console.log(result);
        return result;

    } catch (err) {
        console.log(err)
        sql.close();
        return "Error en " + err;   
    }
}