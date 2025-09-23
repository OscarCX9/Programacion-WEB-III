//EJERCICIO 2
function invertirCadena(cadena) {
    let invertida = "";
    for (let i = cadena.length - 1; i >= 0; i--) {
      invertida = invertida+cadena[i];
    }
    return invertida;
  }
  
  let cad = invertirCadena("abcd");
  console.log(cad);