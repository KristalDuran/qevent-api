var express = require('express');
var router = express.Router();
var eventManager = require('../manager/updatesManager');
router.get('/updateUser', function(req, res, next) { //post
    try {
        eventManager.updateUser(req.query).then(
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
router.get('/updateEvent', function(req, res, next) { //
    try {
        eventManager.updateEvent(req.query).then(
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
  router.get('/updateInvitado', function(req, res, next) { //
    try {
        eventManager.updateInvitado(req.body).then(
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
  router.get('/updateDislikeEvent', function(req, res, next) { //
    try {
        eventManager.updateDislikeEvent(req.query).then(
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
  router.get('/updateLikeEvent', function(req, res, next) { //
    try {
        eventManager.updateLikeEvent(req.query).then(
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