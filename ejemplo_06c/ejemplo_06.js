var server = require("./ejemplo_06_server.js");
var router = require("./ejemplo_06_router.js");
var requestHandlers = require("./ejemplo_06c_handlers");

var handle = {};
handle["/"] = requestHandlers.iniciar;
handle["/iniciar"] = requestHandlers.iniciar;
handle["/subir"] = requestHandlers.subir;

server.iniciar(router.route, handle);
