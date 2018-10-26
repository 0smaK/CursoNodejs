var mysql = require('mysql')
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'web',
  password : 'web',
  database : 'test1',
  debug    : ['ComQueryPacket', 'RowDataPacket']
});

connection.connect(function(err){
  if(!err) {
      console.log("La base de datos está conectada...");    
  } else {
      console.log("Error al conectarse a la base de datos...");    
  }
});
  
connection.query('SELECT * FROM demo_fichas', 
  function (err, rows, fields) {
    if (err) {
      console.log('Error while performing Query: '+err);
      throw err;
    } 
    
    var numreg = rows.length;
    console.log('El numero de registros es '+numreg);
    for(let row in rows){
      console.log('Registro '+row+' -> '+rows[row]["DNI"]);
      console.log('Registro '+row+' -> '+rows[row].DNI);
    }
    rows.forEach(ficha => console.log('Registro -> '+ficha.DNI));
  }
);

connection.end();