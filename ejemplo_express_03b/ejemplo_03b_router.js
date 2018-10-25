var express = require('express');
var router = express.Router();

router.use(function(rec,res,next){
    let tiempo = new Date(Date.now());
    let mensaje = tiempo.getDate()+"/"+(tiempo.getMonth()+1)+"/"+tiempo.getFullYear()+" "+tiempo.getHours()+":"+tiempo.getMinutes()+":"+tiempo.getSeconds();
    console.log('Fecha y hora: %s', mensaje);
    next(); 
});

router.get('/', function(req,res){
    res.send('Timelog main page');
});

router.get('/about',function(req,res){
    res.send('About Timelog');
});

module.exports = router;