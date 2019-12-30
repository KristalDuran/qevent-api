var express = require('express');
var router = express.Router();
var eventManager = require('../manager/putsManager');

router.get('/addUser', function(req, res, next) {//post
    try {
        eventManager.addUser(req.body).then(
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