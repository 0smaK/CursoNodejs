var express = require('express');
var cookieParser = require('cookie-parser');
var app = express();

app.use(cookieParser());

app.use(session({
  secret: 'token-secreto',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));

app.get('/', function(req, res) {
    console.log('Cookies: ', req.cookies.vecesVisitada);
    if(typeof req.cookies.vecesVisitada === 'undefined'){
      res.cookie('vecesVisitada', 1, { path: '/', httpOnly: true, secure: false, maxAge: 20000 }); 
      res.send("Bienvenido a mi pagina<br>Has visitado esta pagina <b>"+req.cookie.vecesVisitada+"</b> veces");
    }else{
      res.cookie('vecesVisitada', ++req.cookies.vecesVisitada, { path: '/', httpOnly: true, secure: false, maxAge: 200000 }); 
      res.send("Has visitado esta página " +req.cookies.vecesVisitada+ " veces...");
    }
    });

    app.get('/borrar', function(req, res) {
      console.log('Cookies: ', req.cookies);
      res.clearCookie('vecesVisitada'); 
      res.send("Contador inicializado...");
    });

app.listen(3000, function() {
  console.log('Aplicación ejemplo 6 cookie, escuchando el puerto 3000! http://localhost:3000');
});