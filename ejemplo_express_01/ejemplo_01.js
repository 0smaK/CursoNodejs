var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send("Hola GETTT!!!");
});

app.post('/', function(req, res) {
    res.send("Hola POSTTT!!!");
});

app.listen(3000, function(){
console.log('Aplicacion ejemplo 01, escuchando en el puerto 3000');
});