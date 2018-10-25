var express = require('express');
var cookieParser = require('cookie-parser');
var app = express();

app.use(cookieParser());

app.route("/")
  .get(function(req, res) {
      console.log('Cookies: ', req.cookies);
      res.cookie('nombre', 'express', { path: '/', httpOnly: true, secure: false, maxAge: 20000 }); 
      res.send("COOKIE variable 'nombre'=" +req.cookies.nombre);
    })
  .post(function(req, res) {
      console.log('Cookies: ', req.cookies);
      res.clearCookie('nombre'); 
      res.send("COOKIE variable 'nombre'=" +req.cookies.nombre);
    });

app.listen(3000, function() {
  console.log('Aplicación ejemplo 5 cookie, escuchando el puerto 3000!');
});