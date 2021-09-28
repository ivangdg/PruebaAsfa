var express = require('express');
var app = express();

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

var server = app.listen(5000, function () {
    console.log('Server is running..');
});