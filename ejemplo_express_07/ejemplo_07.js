var express = require('express');
var url = require('url');
var app = express();

var existe = false;
app.get('/', function(req, res) {
    res.send("Hola GETTT!!!");
    existe = true;
});

app.post('/', function(req, res) {
    res.send("Hola POSTTT!!!");
});

if(!existe)
app.get('*', function(req, res) {
    var pathname = url.parse(req.url).pathname;
    res.send("<h1>ERROR 404</h1><hr>No existe la página solicitada <b>"+pathname+"</b><br> <a href='http://localhost:3000/'><center><h3>ir a inicio</h3></center></a>");
    existe = true;
});


app.listen(3000, function(){
console.log('Aplicacion ejemplo 07, escuchando en el puerto 3000');
});