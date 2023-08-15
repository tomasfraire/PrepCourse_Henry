// Suma
console.log(3 + 5); // Imprimirá 8

// Resta
console.log(14 - 7); // Imprimirá 7

// Multiplicación
console.log(8 * 6); // Imprimirá 48

// División
console.log(30 / 9); // Imprimirá 3.333...

// Resto
console.log(95 % 4); // Imprimirá 3 (el resto de la división de 95 entre 4)

// Prueba de precedencia
console.log(3 + 5 * 2 - 8); // Imprimirá 5 (la multiplicación se realiza antes de la suma/resta)

// Concatenación de String
console.log("hola" + " " + "Mundo" + "!"); // Imprimirá "hola Mundo!"

// Variables y Operadores
var age = 21;
var firstName = "Tomas";
var surName = "Fraire";

console.log("Hola soy " + firstName + " " + surName + " y tengo " + age + " años");

/* OPERADORES DE COMPARACIÓN */

// Operaciones de comparación
console.log(4 < 7); // Imprimirá true
console.log(4 < 1); // Imprimirá false
console.log(4 > 4); // Imprimirá false
console.log(4 == 7); // Imprimirá false

// Igualdad vs igualdad estricta
console.log(3 == 3); // Imprimirá true (los valores son iguales)
console.log(3 === 3); // Imprimirá true (los valores y los tipos son iguales)
console.log(3 == "3"); // Imprimirá true (la conversión de tipo hace que sean iguales)
console.log(3 === "3"); // Imprimirá false (los tipos son diferentes)
console.log(7 == "7"); // Imprimirá true (la conversión de tipo hace que sean iguales)
console.log(7 === "7"); // Imprimirá false (los tipos son diferentes)

// Asignación y asociatividad
var a = 1;
var b = 2;
var c = a = b; // c tomará el valor de b que es 2
console.log(c); // Imprimirá 2
