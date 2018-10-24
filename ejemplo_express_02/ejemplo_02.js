var express = require('express');
var app = express();

app.all('/', function(req, res) {
    res.send("Hola Mundo!!!<br>Escuchando todos los puertos!!!");
});

app.listen(3000, function(){
console.log('Aplicacion ejemplo 02, escuchando en el puerto 3000');
});