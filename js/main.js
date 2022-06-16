let datos = [];
let precioTotal = 0
const propiedades = [
    {consultorio: "Divan" , precio: 2000},
    {consultorio: "Sillon" , precio: 1500},
    {consultorio: "Escritorio" , precio: 1800},
]

function saludar (datosConsulta) {
    let nombre = prompt ("Cual es su nombre?")
    while (nombre === "") {
    nombre = prompt ("Por favor, complete su nombre")
    datosConsulta.nombreCliente = nombre
}

    let respuesta = prompt ("Hola " + nombre + " todo bien?")
    if (respuesta === "bien" || respuesta === "muy bien" || respuesta === "excelente" || respuesta === "optimo" || respuesta === "si" ){
        alert ("Que bueno")
    }
    else {
        alert ("Que pena")
}
}

function elegirProfesion (datosConsulta) {
    let respuesta1 = parseInt ( prompt  ("Selecciona el numero de tu profesion:\n 1.Psiquiatra \n 2.Psicologa/o \n 3.Psicopedagoga/o"))
        if (respuesta1 === 1) {
            datosConsulta.profesion = "Psiquiatra"
        }
        else if (respuesta1 === 2) {
            datosConsulta.profesion = "Psicologa/o"
        }
        else if (respuesta1 === 3) {
            datosConsulta.profesion = "Psicopedagoga/o"
        }
        return datosConsulta
}

function elegirElemento(datosConsulta) {
let respuesta2 = parseInt ( prompt  ("Selecciona el numero del elemento que necesites:\n 1.Divan \n 2.Sillon \n 3.Escritorio"))
if (respuesta2 === 1) {
    datosConsulta.elemento = "Divan"
}
else if (respuesta2 === 2) {
    datosConsulta.elemento = "Sillon"
}
else if (respuesta2 === 3) {
    datosConsulta.elemento = "Escritorio"
}
    return datosConsulta
}

function precio(datosConsulta) {

let ingreso = prompt ("Busqueda de productos: Ingrese un precio maximo")
let filtrado = propiedades.filter ((el) => el.precio <= ingreso)
datosConsulta.resultadoBusqueda = filtrado
return datosConsulta
}

function consultas() {
    let datosConsulta = {}
    saludar(datosConsulta)
    elegirProfesion(datosConsulta)
    elegirElemento(datosConsulta)
    precio(datosConsulta)
    datos.push(datosConsulta)

}
consultas ()
consultas ()
const datos1 = datos.map(value=>value)
console.log(datos1);

class consultorio {
    constructor(aire,luminosidad,secretaria) {
        this.aire = aire;
        this.luminosidad = luminosidad;
        this.secretaria = secretaria
        this.info = `Todos los consultorios cuentan con ${this.aire}, son ${this.luminosidad} y con ${this.secretaria}`;
    }
}

let consultorio1 = new consultorio ("aire acondicionado", "muy luminosos", "servicio de secretaria");
let consultorio2 = new consultorio ("aire acondicionado", "muy luminosos", "servicio de secretaria");
let consultorio3 = new consultorio ("aire acondicionado", "muy luminosos", "servicio de secretaria");

document.write(consultorio1.info);

