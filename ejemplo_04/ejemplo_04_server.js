var http = require("http");
var url = require("url");

function iniciar(route) {
    var numpeticiones = 0;
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        console.log("Petición ("+(++numpeticiones)+") para " + pathname + " recibida.");
        
        var ruta = route(pathname);

        response.writeHead(200, {"Content-Type": "text/html"});
        response.write("<!DOCTYPE html>");
        response.write("<html>");
        response.write("<head><meta charset='UTF-8'><title>Ejemplo 04</title>");
        response.write("<body><center><h2>"+ruta+"</h2><hr></center></body>");
        response.write("Ejemplo 4")
        response.end("</html>");
    }

    http.createServer(onRequest).listen(3000);
    console.log("Servidor iniciado.");
}

exports.iniciar = iniciar;