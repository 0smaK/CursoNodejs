var express = require('express');
var app = express();

// var bodyParser = require('body-parser');
// for parsing application/json
// app.use(bodyParser.json());
// for parsing application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }));
// no es necesario desde la v4.16.0
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.route("/")
    .get(function(req,res) {
        console.log(req.query.nombre);
        res.send("Petición GET<br>Hola, "+req.query.nombre);
    })
    .post(function(req,res){
        console.log(req.body.nombre);
        res.send("Petición POST<br>Hola, "+req.body.nombre);
    });

    app.listen(3000, function(){
        console.log("Aplicacion ejemplo 05, escuchando en el puerto 3000");
    })