let dia = "Lunes";
switch (dia) {
    case "Lunes":
        console.log("Es el primer día de la semana");
        break;
    case "Martes":
    case "Miércoles":
        console.log("Estamos en la mitad de la semana");
        break;
    default:
        console.log("Es otro día de la semana");
}