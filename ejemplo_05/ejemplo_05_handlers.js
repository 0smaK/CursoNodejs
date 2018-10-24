var numPeticionesSubir = 0;

function iniciar() {
  console.log("Manipulador de petición 'iniciar' ha sido llamado.");
}

function subir() {
  numPeticionesSubir++;
  console.log("Manipulador de petición 'subir' ha sido llamado "+numPeticionesSubir+" veces.");
}

exports.iniciar = iniciar;
exports.subir = subir;