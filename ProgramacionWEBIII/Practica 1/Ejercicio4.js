//EJERCICIO 4
function obtenerMayorMenor(arreglo) {
    let mayor = arreglo[0];
    let menor = arreglo[0];
  
    for (let num of arreglo) {
      if (num > mayor) {
        mayor = num;
      }
      if (num < menor) {
        menor = num;
      }
    }
  
    return { mayor, menor };
  }
  
  let obj = obtenerMayorMenor([3,1,5,4,2]);
  console.log(obj);