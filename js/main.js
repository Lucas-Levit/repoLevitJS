// let unPais = prompt ("Elija un destino a viajar: \n 1)Argentina \n 2)Chile \n 3)Mexico");


// if (unPais === "Argentina") {
//     console.log("Usted eligio el destino:" + unPais);
    
// }

// else if (unPais === "mexico") {
//     console.log("Usted eligio el destino:" + unPais);
// }

// else if (unPais === "Chile") {
//     console.log("Usted eligio el destino:" + unPais);
// }

// else {
//     alert(unPais + " no se escuentra disponible");
// }


// for (let i = 0; i <br 10; i++) {
//     console.log(i);
// }

// let ingreso = prompt ("Elija un producto \n Para salir presiona ESC")


// while (ingreso != "ESC") {
//     console.log(" el producto ingresado es " + ingreso);
//     ingreso = prompt (" Ingresa otro producto \n Para salir presiona ESC")
    
// }

// let eleccion = prompt ("Elegi el pais \n 1-Argentina \n 2-Chile \n 3-Mexico \n 4-Uruguay")

// switch (eleccion) {
//     case "1":
//         alert ("Seleccionaste Argentina");
//         break;
//     case "2":
//         alert ("Seleccionaste Chile");
//         break;
//     case "3":
//         alert ("Seleccionaste Mexico");
//         break;
//     case "4":
//         alert ("Seleccionaste Uruguay");
//         break;
//     default:
//         alert ("Opcion no valida");
//         break;
// }


// let nombre = prompt ("Cual es su nombre?")

// while (nombre === "") {
//     nombre = prompt ("Por favor, complete su nombre")
// }

// function saludar () {
//     let respuesta = prompt ("Hola " + nombre + " todo bien?")
//     if (respuesta === "bien" || respuesta === "muy bien" || respuesta === "excelente" || respuesta === "optimo" || respuesta === "si" ){
//         alert ("Que bueno")
//     }
//     else {
//         alert ("Que pena")
// }
    
// }
// saludar ()




// function elegirProfesion () {
//     let respuesta1 = prompt ("Cual es tu profesion:\n Psiquiatra \n Psicologa/o \n Psicopedagoga/o")
//     if (respuesta1 === "Psiquiatra") {
//         prompt ("Necesitas Divan?")
//     }
//     else if (respuesta1 === "Psicologa/o")
//         prompt ("Necesitas escritorio?")
    
    
//     else if (respuesta1 === "Psicopedagoga/o")
//     prompt ("Necesitas sillones?")
    

//     else 
//     alert ("Opcion no valida. Vuelva a intentar.")
// }
// elegirProfesion ()




let profesionales = [" Psicologas/os ", " Psquiatras ", " Psicopedagogas/os "];
alert (profesionales)
let total = profesionales.push (" Nutricionistas " , " Musicoterapeutas")
console.log (total)

class consultorio {
    constructor(aire,luminosidad,secretaria) {
        this.aire = aire;
        this.luminosidad = luminosidad;
        this.secretaria = secretaria
        this.info = `Todos los consultorios cuentan con ${this.aire}, son ${this.luminosidad} y con ${this.secretaria}`;
    }
}

let consultorio1 = new consultorio ("aire acondicionado", "muy luminosos", "servicio de secretaria")
let consultorio2 = new consultorio ("aire acondicionado", "muy luminosos", "servicio de secretaria")
let consultorio3 = new consultorio ("aire acondicionado", "muy luminosos", "servicio de secretaria")

let profesionales1 = profesionales.join (",")


document.write(`${profesionales1}  </br> ${consultorio1.info}`);

