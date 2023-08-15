
// Ejemplo de Math.pow (potencia)
var base = 2;
var exponente = 3;
var resultadoPotencia = Math.pow(base, exponente);
console.log(resultadoPotencia); // Imprimirá 8 (2^3)

// Ejemplo de Math.round (redondeo)
var numeroDecimal = 3.7;
var numeroRedondeado = Math.round(numeroDecimal);
console.log(numeroRedondeado); // Imprimirá 4

// Ejemplo de Math.floor (redondeo hacia abajo)
var numeroDecimal2 = 5.9;
var numeroRedondeadoAbajo = Math.floor(numeroDecimal2);
console.log(numeroRedondeadoAbajo); // Imprimirá 5

// Ejemplo de Math.ceil (redondeo hacia arriba)
var numeroDecimal3 = 4.2;
var numeroRedondeadoArriba = Math.ceil(numeroDecimal3);
console.log(numeroRedondeadoArriba); // Imprimirá 5

// Ejemplo de Math.max (máximo)
var numeros = [10, 5, 8, 12, 3];
var maximoValor = Math.max(...numeros);
console.log(maximoValor); // Imprimirá 12

// Ejemplo de Math.min (mínimo)
var minimoValor = Math.min(...numeros);
console.log(minimoValor); // Imprimirá 3

// Ejemplo de Math.random (número aleatorio entre 0 y 1)
var numeroAleatorio = Math.random();
console.log(numeroAleatorio); // Imprimirá un número aleatorio entre 0 (inclusive) y 1 (exclusivo)
