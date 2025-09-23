//EJERCICIO 12
function tarea1(callback) {
  setTimeout(() => {
    console.log("Tarea 1 lista");
    callback();
  }, 1000);
}

function tarea2(callback) {
  setTimeout(() => {
    console.log("Tarea 2 lista");
    callback();
  }, 1000);
}

function tarea3(callback) {
  setTimeout(() => {
    console.log("Tarea 3 lista");
    callback();
  }, 1000);
}

tarea1(() => {
  tarea2(() => {
    tarea3(() => {
      console.log("Todas las tareas listas");
    });
  });
});

//Con async/await (más limpio):
function tarea(ms, nombre) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`${nombre} lista`);
      resolve();
    }, ms);
  });
}

async function ejecutar() {
  await tarea(1000, "Tarea 1");
  await tarea(1000, "Tarea 2");
  await tarea(1000, "Tarea 3");
  console.log("Todas las tareas listas");
}

ejecutar();