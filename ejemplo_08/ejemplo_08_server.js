var http = require("http");
var url = require("url");

function iniciar(route, handle) {
  function onRequest(request, response) {
    let dataPosteada = "";
    //let dataPosteada = [];
    let pathname = url.parse(request.url).pathname;
    console.log("Peticion para " + pathname + " recibida.");

    request.setEncoding("utf8");

    request.addListener("data", function(trozoPosteado) {
      dataPosteada += trozoPosteado;
      // dataPosteada.push(trozoPosteado);
      console.log("Recibido trozo POST '" + trozoPosteado + "'.");
    });

    request.addListener("end", function() {
      //dataPosteada = Buffer.concat(dataPosteada).toString();
      route(handle, pathname, response, dataPosteada);
    });

  }

  http.createServer(onRequest).listen(3000);
  console.log("Servidor Iniciado.");
}

exports.iniciar = iniciar;