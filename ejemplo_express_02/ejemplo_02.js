var express = require('express');
var app = express();

/*
app.get('/', function(req, res) {
    res.send("Hola GETTT!!!");
});

app.post('/', function(req, res) {
    res.send("Hola POSTTT!!!");
});
*/

app.all('/', function(req, res) {
    res.send("Hola Mundo!!!");
});

app.listen(3000, function(){
console.log('Aplicacion ejemplo 02, escuchando en el puerto 3000');
});