//EJERCICIO 11
function paso1() {
    return new Promise((resolve) => {
      setTimeout(() => resolve("Paso 1 completado"), 1000);
    });
  }
  
  function paso2(mensaje) {
    return new Promise((resolve) => {
      setTimeout(() => resolve(mensaje + " → Paso 2 completado"), 1000);
    });
  }
  
  function paso3(mensaje) {
    return new Promise((resolve) => {
      setTimeout(() => resolve(mensaje + " → Paso 3 completado"), 1000);
    });
  }
  
  paso1()
    .then((r) => paso2(r))
    .then((r) => paso3(r))
    .then((r) => console.log(r));