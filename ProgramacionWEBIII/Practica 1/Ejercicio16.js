//EJERCICIO 16
function obtenerUsuario() {
    return new Promise((resolve) => {
      setTimeout(() => resolve("Usuario: Oscar"), 1000);
    });
  }
  
  obtenerUsuario().then((usuario) => {
    console.log(usuario);
  });
  
  //Versión con async/await:
  function obtenerUsuario() {
    return new Promise((resolve) => {
      setTimeout(() => resolve("Usuario: Oscar"), 1000);
    });
  }
  
  async function main() {
    let usuario = await obtenerUsuario();
    console.log(usuario);
  }
  
  main();