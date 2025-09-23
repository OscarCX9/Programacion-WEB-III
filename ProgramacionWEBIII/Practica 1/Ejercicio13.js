//EJERCICIO 13
function obtenerUsuario() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Usuario: Oscar"), 1000);
  });
}

function obtenerPedidos(usuario) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(`${usuario} → Pedidos obtenidos`), 1000);
  });
}

function procesarPedidos(pedidos) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(`${pedidos} → Pedidos procesados`), 1000);
  });
}

// Anidamiento con promesas
obtenerUsuario()
  .then((usuario) => {
    return obtenerPedidos(usuario).then((pedidos) => {
      return procesarPedidos(pedidos).then((res) => {
        console.log(res);
      });
    });
  });

//Con async/await (más limpio):
async function main() {
  const usuario = await obtenerUsuario();
  const pedidos = await obtenerPedidos(usuario);
  const resultado = await procesarPedidos(pedidos);
  console.log(resultado);
}

main();