var express = require('express');
var app = express();

app.route("/")
    .get(function(req, res) {
        res.send("Has solicitado GET");
    })
    .post(function(req,res){
        res.send("Has solicitado POST");
    });

app.put('/user', function (req, res){
    res.send('Has hecho una petición PUT');
});

app.delete('/user', function (req, res){
    res.send('Has hecho una petición DELETE');
});

app.listen(3000, function(){
console.log('Aplicacion ejemplo 02, escuchando en el puerto 3000!');
});
