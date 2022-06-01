let unPais = prompt ("Elija un destino a viajar: \n 1)Argentina \n 2)Chile \n 3)Mexico");


if (unPais === "Argentina") {
    console.log("Usted eligio el destino:" + unPais);
    
}

else if (unPais === "mexico") {
    console.log("Usted eligio el destino:" + unPais);
}

else if (unPais === "Chile") {
    console.log("Usted eligio el destino:" + unPais);
}

else {
    alert(unPais + " no se escuentra disponible");
}


for (let i = 0; i < 10; i++) {
    console.log(i);
}

let ingreso = prompt ("Elija un producto \n Para salir presiona ESC")


while (ingreso != "ESC") {
    console.log(" el producto ingresado es " + ingreso);
    ingreso = prompt (" Ingresa otro producto \n Para salir presiona ESC")
    
}

let eleccion = prompt ("Elegi el pais \n 1-Argentina \n 2-Chile \n 3-Mexico \n 4-Uruguay")

switch (eleccion) {
    case "1":
        alert ("Seleccionaste Argentina");
        break;
    case "2":
        alert ("Seleccionaste Chile");
        break;
    case "3":
        alert ("Seleccionaste Mexico");
        break;
    case "4":
        alert ("Seleccionaste Uruguay");
        break;
    default:
        alert ("Opcion no valida");
        break;
}