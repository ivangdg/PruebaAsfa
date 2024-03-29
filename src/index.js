const express = require('express');
const app = express();
const path = require('path');

// settings
app.set('port', 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

// middlewares

// routes
app.use(require('./routes/index'));

// static files
app.use(express.static(path.join(__dirname, 'public')));

// listening the server
app.listen(app.get('port'), () => {
    console.log('Servidor en el puerto', app.get('port'));
});

app.get('/', function (req, res) {

    var sql = require("mssql");

    // config for your database
    var config = {
        user: 'magicAdmin',
        password: 'Entrad@01',
        server: 'mssql-28872-0.cloudclusters.net',

        port: 28872,
        database: 'CarteraNET',
        options: {
            encrypt: true, // for azure
            trustServerCertificate: true
        }
    };

    // connect to your database
    sql.connect(config, function (err) {

        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();

        // query to the database and get the records
        request.query('select * from cat_CRT_Conceptos', function (err, recordset) {

            if (err) console.log(err)

            // send records as a response
            res.send(recordset);

        });
    });
});