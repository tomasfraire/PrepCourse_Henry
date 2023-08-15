// Funcion "Viajar"
function viajar(destino) {
        // Comprobamos si el destino es "Brasil"
        if (destino === "Brasil") {
                console.log("Gire a la izquierda"); 
        } 
        // Comprobamos si el destino es "Argentina"
        else if (destino === "Argentina") {
                console.log("Gire a la derecha");
        } 

        else {
                console.log("Nos perdimos");
        }
}

// Función "puedeManejar"
function puedeManejar(edad) {
        // Comprobamos si la edad es mayor o igual a 18
        if (edad >= 18) {
                console.log(edad);
                console.log(true);
                console.log("puede manejar");
        } 
        // Si la edad no es mayor o igual a 18
        else {
                console.log(edad);
                console.log(false);
                console.log("no puede manejar");
        }
}

// Generar un destino aleatorio ("Brasil" o "Argentina")
var destinosPosibles = ['Brasil', 'Argentina'];
var destinoAleatorio = destinosPosibles[Math.floor(Math.random() * destinosPosibles.length)];

// Generar una edad aleatoria entre 15 y 85
var edadAleatoria = Math.floor(Math.random() * (85 - 15 + 1)) + 15;

// Llamar a las funciones con los valores aleatorios generados
viajar(destinoAleatorio);
puedeManejar(edadAleatoria);
