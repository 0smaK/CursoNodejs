var app = require('express')();
var timeLog = require('./ejemplo_03b_router.js');

app.use(timeLog);
//app.use('/time', timeLog);

app.listen(3000, function() {
  console.log('Aplicación ejemplo 3b, escuchando el puerto 3000!');
});