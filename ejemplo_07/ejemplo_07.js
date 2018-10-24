var server = require("./ejemplo_07_server");
var router = require("./ejemplo_07_router");
var requestHandlers = require("./ejemplo_07_handlers");

var handle = {}
handle["/"] = requestHandlers.iniciar;
handle["/iniciar"] = requestHandlers.iniciar;
handle["/subir"] = requestHandlers.subir;

server.iniciar(router.route, handle);