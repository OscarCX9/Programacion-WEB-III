//EJERCICIO 7
function extraer(arreglo) {
    let [primero, segundo, ...resto] = arreglo;
    console.log("Resto de elementos:", resto);
  }
  
  extraer([5,10,30,46,50,61]);