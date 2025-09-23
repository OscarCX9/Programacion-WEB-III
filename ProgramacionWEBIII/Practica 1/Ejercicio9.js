//EJERCICIO 9
function msg() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Exito: la promesa se cumplio despues de 3s");
      }, 3000);
    });
  }
  
  msg().then((mensaje) => {
    console.log(mensaje);
  });