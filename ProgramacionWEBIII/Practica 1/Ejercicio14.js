//EJERCICIO 14
function obtenerNumero() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(35), 1000);
  });
}

function obtenerNumeroCallback(callback) {
  obtenerNumero()
    .then((resultado) => callback(null, resultado))
    .catch((error) => callback(error, null));
}

obtenerNumeroCallback((err, num) => {
  if (err) console.log("Error:", err);
  else console.log("Número obtenido:", num);
});