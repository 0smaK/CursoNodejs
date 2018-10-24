var numPeticionesSubir = 0;

function iniciar() {
  console.log("Manipulador de peticiÃ³n 'iniciar' ha sido llamado.");
  return "Hola Iniciar";
}

function subir() {
  numPeticionesSubir++;
  console.log("Manipulador de peticiÃ³n 'subir' ha sido llamado.");
  return "Hola Subir ("+numPeticionesSubir+")";
}

exports.iniciar = iniciar;
exports.subir = subir;