var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const getsController = require('./controller/getsController')
const updatesController = require('./controller/updatesController')
const dropsController = require('./controller/dropsController')
const putsController = require('./controller/putsController')

var app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
    next();
});
app.use('/gets', getsController);
app.use('/updates',updatesController);
app.use('/drops',dropsController);
app.use('/puts',putsController);

/**
 * ERROR HANDLER
 */
app.use(function(err, req, res, next) {
    res.status(err.status || 500)
        .json({ error: err.message });
});
module.exports = app;