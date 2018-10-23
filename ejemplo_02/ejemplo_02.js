//Se carga el modulo de HTTP
var http = require("http");
var numpeticiones=0;
/* Creación del servidor HTTP, y se define la escucha
de las peticiones en el puerto 300 */
http.createServer(function(request,response) { 
    console.log(request.rawHeaders);
    //Se define la cabecera HTTP, con el estado HTTP {OK: 200} y el tipo
    response.writeHead(200, {'Content-Type':'text/html'});
    numpeticiones++;
    //Se responde, en el cuerpo de la resupuesta con el mensaje "Hello World"
    response.write('<h1>Hola Mundo!</h1><hr>');
    response.write('<b>Numero de peticiones:</b> '+numpeticiones)
    response.end();
}).listen(3000);

//Se escribe la URL para el acceso al servidor
console.log("Servidor en la url: http://localhost:3000/");
