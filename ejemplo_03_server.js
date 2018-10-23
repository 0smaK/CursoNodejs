var http = require("http");
var url = require("url");

function iniciar() {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        console.log("Petición para " + pathname + " recibida.");
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write("<!DOCTYPE html>");
        response.write("<html>");
        response.write("<head><meta charset='UTF-8'><title>Ejemplo 3 [server]</title>");
        response.write("<body><center><h2>Servidor con Node.js</h2><hr></center></body>");
        response.write("Ejemplo 3")
        response.end("</html>");
    }

    http.createServer(onRequest).listen(3000);
    console.log("Servidor iniciado.");
}

exports.iniciar = iniciar;