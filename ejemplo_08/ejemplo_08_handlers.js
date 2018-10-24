var querystring = require("querystring");

function iniciar(response, postData) {
	console.log("Manipulador de peticiÃ³n 'iniciar' fue llamado.");
	var body = '<html>' +
		'<head>' +
		'<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />' +
		'</head>' +
		'<body>' +
		'<center>' +
		'<h1>Formulario de enví­o</h1>' +
		'<form action="/subir" method="post">' +
		'<textarea name="texto" rows="20" cols="60"></textarea></br>' +
		'<input type="submit" value="enviar texto" />' +
		'<input type="reset" value="limpiar texto" />' +
		'</form>' +
		'</center>' +
		'</body>' +
		'</html>';

	response.writeHead(200, { "Content-Type": "text/html" });
	response.write(body);
	response.end();
}

function subir(response, dataPosteada) {
	console.log("Manipulador de Peticion 'subir' fue llamado.");

	var body = '<html>' +
		'<head>' +
		'<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />' +
		'</head>' +
		'<body>' +
		'<center>' +
		'<h1>Texto enviado</h1>' +
		'<h3>' + querystring.parse(dataPosteada).texto + '</h3>' +
		'<a href="/">volver</a>' +
		'</center>' +
		'</body>' +
		'</html>';

	response.writeHead(200, { "Content-Type": "text/html" });
	response.write(body);
	response.end();
}

exports.iniciar = iniciar;
exports.subir = subir;