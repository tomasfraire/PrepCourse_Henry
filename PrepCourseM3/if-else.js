// Definición de la función 'viajar' que toma un argumento 'destino'
function viajar(destino) {
        // Comprobamos si el destino es 'Brasil'
        if (destino === 'Brasil') {
        console.log('Gire a la izquierda'); // Si es 'Brasil', mostramos este mensaje
        } 
        // Comprobamos si el destino es 'Argentina'
        else if (destino === 'Argentina') {
        console.log('Gire a la derecha'); // Si es 'Argentina', mostramos este mensaje
        } 
        // Si no es ni 'Brasil' ni 'Argentina', mostramos este mensaje
        else {
        console.log('Nos perdimos');
        }
}

// Llamamos a la función 'viajar' con diferentes destinos
viajar('Brasil');     // Salida: "Gire a la izquierda"
viajar('Argentina');  // Salida: "Gire a la derecha"

// Definición de la función 'puedeManejar' que toma un argumento 'edad'
function puedeManejar(edad) {
        // Comprobamos si la edad es mayor o igual a 18
        if (edad >= 18) {
        console.log(true); // Si es mayor o igual a 18, mostramos 'true'
        } 
        // Si la edad no es mayor o igual a 18, mostramos 'false'
        else {
        console.log(false);
        }
}

// Llamamos a la función 'puedeManejar' con diferentes edades
puedeManejar(17);     // Salida: false



// ejercicio extra, hacer que este codigo elija de forma aleatorio el destino y la edad.