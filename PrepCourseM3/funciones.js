// Función: sumaTres
// Esta función toma un parámetro 'x' y devuelve el resultado de sumar 3 a 'x'
var sumaTres = (x) => {
    return x + 3;
}

// Función: cuidadoConElConsoleLog
// Esta función toma un parámetro 'nombre', muestra 'nombre' en la consola y luego devuelve 'nombre'
function cuidadoConElConsoleLog(nombre) {
    console.log("console.log: " + nombre); // Muestra 'nombre' en la consola
    return nombre; // Devuelve 'nombre'
}

// Precedencia de valores
var a = 1;
var b = 2;
var c = a = b; // Primero se asigna 'b' a 'a', y luego se asigna el resultado a 'c'
console.log(c); // Imprimirá 2, ya que 'c' tiene el valor de 'b'

// Llamada a la función 'sumaTres'
var resultadoSuma = sumaTres(5); // Llamamos a la función 'sumaTres' con 5 como argumento
console.log(resultadoSuma); // Imprimirá 8, ya que 5 + 3 = 8

// Llamada a la función 'cuidadoConElConsoleLog'
var nombreResultado = cuidadoConElConsoleLog("Alice"); // Llamamos a la función y mostramos "Alice" en la consola
console.log(nombreResultado); // Imprimirá "Alice", ya que la función devuelve el mismo valor

// Finalmente, se imprimirá el valor de 'c' (que es 2) debido al primer console.log
