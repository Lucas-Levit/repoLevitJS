const formulario = document.getElementById("formulario");
const btn = document.querySelector(".btn");
const cards = document.querySelector(".cards");


let caracteristicas = [{
        id: 1,
        nombre: "Consultorio basico",
        imagen: "./img/consultorio1.jpg",
        descripcion: "Este consultorio, cuenta con un sillon",
        precio: 1300,
        alquiler: "p/hora",
        disponible: true,
        meses: ["marzo", "junio", "agosto","diciembre"],
    },
    {
        id: 2,
        nombre: "Consultorio medio",
        imagen: "./img/consultorio2.jpg",
        descripcion: "Este consultorio, cuenta con un sillon y escritorio",
        precio: 1500,
        alquiler: "p/hora",
        disponible: true,
        meses: ["enero", "abril", "septiembre"],
    },
    {
        id: 3,
        nombre: "Consultorio Medio Mejorado",
        imagen: "./img/consultorio1.jpg",
        descripcion: "Este consultorio, cuenta con un divan y un escritorio",
        precio: 1800,
        alquiler: "p/hora",
        disponible: true,
        meses: ["febrero", "mayo", "julio", "septiembre"],
    },
    {
        id: 4,
        nombre: "Consultorio premium",
        imagen: "./img/consultorio3.jpg",
        descripcion: "Este consultorio, cuenta con un sillon y divan",
        precio: 2000,
        alquiler: "p/hora",
        disponible: true,
        meses: ["octubre", "noviembre"],
    },
    {
        id: 5,
        nombre: "Consultorio premium mejorado",
        imagen: "./img/consultorio3.jpg",
        descripcion: "Este consultorio, cuenta con un sillon, un divan y un escritorio",
        precio: 2300,
        alquiler: "p/hora",
        disponible: true,
        meses: ["diciembre"]
    },
]


function renderizarTarjeta(consultorio) {
    let {imagen, nombre, descripcion, precio, alquiler} = consultorio
    const plantillaTarjeta =`
            <div class="card">
            <img src="${imagen}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${nombre}</h5>
                <p class="card-text">${descripcion}</p>
                <span>$${precio} ${alquiler}</span>
                <a href="#" class="btn btn-primary">Reservar</a>
            </div>
        </div>
    `
    return plantillaTarjeta
}


function renderizarFiltro(consultoriosFiltrado) {
const contenedorTarjetas = document.getElementById ("contenedorTarjetas")
contenedorTarjetas.innerHTML = ""

consultoriosFiltrado.forEach(consultorio => {
const tarjeta = renderizarTarjeta(consultorio)
contenedorTarjetas.innerHTML += tarjeta
})
}
const mesFiltro = document.getElementById("mesFiltro")
let mesElegido = ""

mesFiltro.addEventListener ("change", (e)=>{
    if (e.target.value !== "--") {
        mesElegido = e.target.value
    }
})

formulario.addEventListener("submit" ,(e)=>{
    e.preventDefault()
    const nombre = document.getElementById("nombre")
    const email = document.getElementById("email")
    const telefono = document.getElementById("telefono")
    const mensaje = document.getElementById("mensaje")

    const camposVacios = nombre.value && email.value && telefono.value && mensaje.value
    if (!camposVacios) {swal("Por favor complete los campos vacios");}
    else {
    const consultoriosFiltrado = caracteristicas.filter(consultorio => consultorio.meses.includes(mesElegido))
    renderizarFiltro(consultoriosFiltrado);
    const datosUsuario = {nombre:nombre.value, email:email.value, telefono:telefono.value, mes:mesElegido, mensaje:mensaje.value}
    console.log(datosUsuario);
    localStorage.setItem("datosUsuario", JSON.stringify (datosUsuario))
    Toastify({
        text: "Gracias por tus datos, te contactaremos a la brevedad",
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {background: "rgba(99, 28, 42, 0.7)"},
        onClick: function(){} // Callback after click
        }).showToast();
    }
})

function obtenerDatos () {
    let persona =  JSON.parse (localStorage.getItem ("datosUsuario"))
    console.log(persona);
}
obtenerDatos()

