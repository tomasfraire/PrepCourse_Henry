for (let i = 0; i < 5; i++) {
    suma = suma + i;
    console.log('Variable de iteración: ', i);
}

console.log('Variable suma: ', suma);


for (let i = 0; i < 5; i++) {
    if (i === 2) {
        continue; // Salta la iteración cuando i es igual a 2
    }
    console.log("Iteración " + i);
}

for (let i = 0; i < 5; i++) {
    if (i === 3) {
        break; // Sale del bucle cuando i es igual a 3
    }
    console.log("Iteración " + i);
}