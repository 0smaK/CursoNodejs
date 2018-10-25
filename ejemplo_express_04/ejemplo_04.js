var express = require('express');
var path = require('path');
var app = express();

app.use(express.static('public'));
app.use('/info', express.static(__dirname + '/public'));
app.use('/files', express.static((path.join(__dirname, '/public'))));

app.listen(3000, function(){
    console.log("Apliacación ejemplo 04, escuchando en el puerto 3000");
});
