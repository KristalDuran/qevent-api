var express = require('express');
var router = express.Router();
var eventManager = require('../manager/dropsManager');


router.get('/deleteUser', function(req, res, next) { //post

    try {
        eventManager.deleteUser(req.query).then(
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
  router.get('/deleteEvent', function(req, res, next) { //post

    try {
        eventManager.deleteEvent(req.query).then(
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

