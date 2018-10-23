var http = require("http");
var url = require("url");

function iniciar(route) {
    var numpeticiones = 0;
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        console.log("Petición ("+(++numpeticiones)+") para " + pathname + " recibida.");

        response.writeHead(200, {"Content-Type": "text/html"});
        response.write("<!DOCTYPE html>");
        response.write("<html>");
        response.write("<head><meta charset='UTF-8'><title>Ejemplo 04</title>");
        response.write("<body><center><h2>ruteando...</h2>");
        
        route(pathname, response);

        response.end("</center></body></html>");
    }

    http.createServer(onRequest).listen(3000);
    console.log("Servidor iniciado.");
}

exports.iniciar = iniciar;