//EJERCICIO 1
function miFuncion(texto) {
    texto = texto.toLowerCase();
    let contador = { a: 0, e: 0, i: 0, o: 0, u: 0 };
    for (let letra of texto) {
        if (contador.hasOwnProperty(letra)) {
            contador[letra]++;
        }
    }

    return contador;
}

let obj = miFuncion("euforia");
console.log(obj);