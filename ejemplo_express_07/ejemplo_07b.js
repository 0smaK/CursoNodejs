var express = require('express');
var app = express();

/* 
app.get('/user/:id([0-9]{5})', function (req, res, next) {
  if(req.params.id>10000){
      var err = new Error('User not found...');
      err.status = 404;
      next(err);
  } else {
      res.send('Got a GET request at /user with ID:'+req.params.id);
  }
});
*/   

app.get('/user/:id([0-9]{5})', function (req, res) {
  if(req.params.id>10000){
       throw new Error('User not found...');
  } else {
      res.send('Has solicitado GET a /user con ID: '+req.params.id);
  }
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