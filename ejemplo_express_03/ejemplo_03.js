var app = require('express')();

app.use(function(req,res,next){
    let tiempo = new Date(Date.now());
    let mensaje = tiempo.getDate()+"/"+(tiempo.getMonth()+1)+"/"+tiempo.getFullYear()+" "+tiempo.getHours()+":"+tiempo.getMinutes()+":"+tiempo.getSeconds();
    console.log('Fecha y hora: %s', mensaje);
    next();
});

app.get('/', function(req, res) {
    res.send('Has solicitado GET!!!');
});
  
app.listen(3000, function() {
    console.log('Aplicación ejemplo 3, escuchando el puerto 3000!');
});