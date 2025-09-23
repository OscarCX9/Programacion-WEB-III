//EJERCICIO 8
function ejecutar(callback) {
    setTimeout(() => {
      callback();
    }, 2000);
  }
  
  ejecutar(() => {
    console.log("Callback ejecutado despues de 2s");
  });