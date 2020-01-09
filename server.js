
const express = require('express'),
    app = express(),
    server = require('http').createServer(app);
app.set('port',3000);

app.use(express.json());
/****************************************************************/
/*headers*/
app.use((req, res, next) => {
    // res.header("Access-Control-Allow-Origin", "http://ctec.tec.ac.cr");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

const getsController = require('./controller/getsController')
const updatesController = require('./controller/updatesController')
const dropsController = require('./controller/dropsController')
const putsController = require('./controller/putsController')

app.use('/gets', getsController);
app.use('/updates',updatesController);
app.use('/drops',dropsController);
app.use('/puts',putsController);


server.listen(app.get('port'), function() {
    console.log('Servidor escuchando en el puerto: ' + app.get('port'));
});


