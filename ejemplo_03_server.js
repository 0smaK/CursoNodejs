var http = require("http");
var url = require("url");

function iniciar() {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        console.log("Peticion para " + pathname + " recibida.");
        response.writeHead(200, {"Content-Type":"text/html"});
        response.write("<!DOCTYPE html>");
        response.write("<html>");
        response.write("<head><meta charset='UTF-8'><title>Ejemplo 3 [server]</title>");
        response.write("<body><center><h2>Hola Mundo</h2><hr></body>");
        response.write("</html>")
    }

    http.createServer(onRequest).listen(300);
    console.log("Servidor iniciado.");
}

exports.iniciar = iniciar;