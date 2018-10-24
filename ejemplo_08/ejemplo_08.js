var server = require("./ejemplo_08_server");
var router = require("./ejemplo_08_router");
var requestHandlers = require("./ejemplo_08_handlers");

var handle = {}
handle["/"] = requestHandlers.iniciar;
handle["/iniciar"] = requestHandlers.iniciar;
handle["/subir"] = requestHandlers.subir;

server.iniciar(router.route, handle);