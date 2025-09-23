//EJERCICIO 15
function sumarCallback(a, b, callback) {
  setTimeout(() => {
    let suma = a + b;
    callback(null, suma);
  }, 1000);
}

function sumarPromesa(a, b) {
  return new Promise((resolve, reject) => {
    sumarCallback(a, b, (err, resultado) => {
      if (err) reject(err);
      else resolve(resultado);
    });
  });
}

sumarPromesa(5,7).then((res) => console.log("Suma:", res));