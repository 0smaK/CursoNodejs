var server = require("./ejemplo_05_server.js");
var router = require("./ejemplo_05_router.js");
var requestHandlers = require("./ejemplo_05_handlers");

var handle = {};
handle["/"] = requestHandlers.iniciar;
handle["/iniciar"] = requestHandlers.iniciar;
handle["/subir"] = requestHandlers.subir;

server.iniciar(router.route, handle);
