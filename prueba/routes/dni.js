var mysql = require('mysql')
var express = require('express');
var router = express.Router();



var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'pruebas',
  password : 'pruebas',
  database : 'test',
  debug    : ['ComQueryPacket', 'RowDataPacket']
});

connection.connect(function(err){
  if(!err) {
      console.log("Database is connected ...");    
  } else {
      console.log("Error connecting database ...");    
  }
});

router.get('/dni', function(req, res, next) {
    connection.query('SELECT * FROM demo_fichas', 
    function (err, rows, fields) {
        if (err) {
        console.log('Error while performing Query: '+err);
        throw err;
        } 
        
        var numreg = rows.length;
        console.log('Number of records is '+numreg);
        for(let row in rows){
        console.log('Record '+row+' -> '+rows[row]["DNI"]);
        console.log('Record '+row+' -> '+rows[row].DNI);
        }
        rows.forEach(ficha => console.log('Record -> '+ficha.DNI));
    }
    );

    connection.end();
});

router.get('/dni/:dni([a-z,0-9]{9})', function(req, res, next) {
});

module.exports = router;
