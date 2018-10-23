var server = require("./ejemplo_04_server");
var router = require("./ejemplo_04_router");

server.iniciar(router.route);