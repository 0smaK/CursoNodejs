var express = require('express');
var app = express();
app.get('/user/:id([a-z,0-9]{5,10})', function (req, res) {
  res.send('<h2>Bienvenido, <span style="color:blue">'+req.params.id+'</span></h2><hr>');
});

app.get('/user/:id([a-z,0-9]{0,4})', function (req, res) {
  res.send('<h2>ERROR</h2><hr>Introduce un usuario de 5 a 10 caracteres');
});

app.use(function(err, req, res, next) {
  if (res.headersSent) {
    return next(err)
  }
  console.error("ERROR: " + err.message);
  res.status(err.status || 500);
  res.send(err.message);
});

app.listen(3000, function() {
  console.log('Aplicación ejemplo 7b, escuchando el puerto 3000!');
});