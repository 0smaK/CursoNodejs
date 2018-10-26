var mysql = require('mysql')
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'web',
    password : 'web',
    database : 'test1',
  });

connection.connect(function(err){
    if(!err) {
        console.log("La base de datos está conectada...");    
    } else {
        console.log("Error al conectar con la ddbb...");    
    }
});
  
connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
  if (err) throw err;

  console.log('La solución es: ', rows[0].solution);
})

connection.end();