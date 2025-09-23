//EJERCICIO 5
function palindromo(cadena) {
    let invertir = "";
    for (let i = cadena.length - 1; i >= 0; i--) {
      invertir=invertir+cadena[i];
    }
    return cadena == invertir;
  }
  
  let band1 = palindromo("oruro");
  console.log(band1);
  
  let band2 = palindromo("hola");
  console.log(band2);