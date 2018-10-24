var numPeticionesSubir = 0;

function iniciar() {
  console.log("Manipulador de peticiÃ³n 'iniciar' ha sido llamado.");
}

function subir() {
  numPeticionesSubir++;
  console.log("Manipulador de peticiÃ³n 'subir' ha sido llamado "+numPeticionesSubir+" veces.");
}

exports.iniciar = iniciar;
exports.subir = subir;