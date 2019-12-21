var express = require('express');
var router = express.Router();
var eventManager = require('../manager/getsManager');
router.get('/getReservation', function(req, res, next) {

    try {
        eventManager.getReservations(req.body).then(
            (data) => {
                let response = {
                    content: data.recordset,
                    success: data.output,
                    code: 200
                };
                res.send(JSON.stringify(response));
            }
        );
    }
    catch (err) {
        let response = {
            content: err,
            code: 500
        };
        res.send(JSON.stringify(response));
    }
});
module.exports = router;