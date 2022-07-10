const formulario = document.getElementById("formulario");
const btn = document.querySelector(".btn");
const cards = document.querySelector(".cards");
const nombre = document.getElementById("nombre")
const email = document.getElementById("email")
const telefono = document.getElementById("telefono")
const mensaje = document.getElementById("mensaje")
let mesElegido = ""

const datos = async () => {
    let respuesta = await fetch("../baseDeDatos/datos.json")
    return respuesta.json()
}


function renderizarTarjeta(consultorio) {
    let {imagen, nombre, descripcion, precio, alquiler,id} = consultorio
    const plantillaTarjeta =`
            <div class="card">
            <img src="${imagen}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${nombre}</h5>
                <p class="card-text">${descripcion}</p>
                <span>$${precio} ${alquiler}</span>
                <a href="#" class="btn btn-primary" id="reservar" data-id="${id}">Reservar</a>
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


mesFiltro.addEventListener ("change", (e)=>{
    if (e.target.value !== "--") {
        mesElegido = e.target.value
    }
})

formulario.addEventListener("submit" ,async(e)=>{
    e.preventDefault()
    let caracteristicas =  await datos()
    const camposVacios = nombre.value && email.value && telefono.value && mensaje.value
    if (!camposVacios) {swal("Por favor complete los campos vacios");}
    else {
    const consultoriosFiltrado = caracteristicas.filter(consultorio => consultorio.meses.includes(mesElegido))
    renderizarFiltro(consultoriosFiltrado);
    }
})

function obtenerDatos () {
    let persona =  JSON.parse (localStorage.getItem ("datosUsuario"))
    console.log(persona);
}
obtenerDatos()

contenedorTarjetas.addEventListener ("click" , async (e)=>{
    if (e.target.id === "reservar") {
        let id = e.target.dataset.id
        let caracteristicas =  await datos()
        const consultoriosFiltrado = await caracteristicas.find(consultorio => consultorio.id === parseInt(id))
        console.log(consultoriosFiltrado);
const datosUsuario = {
    nombre:nombre.value, 
    email:email.value,
    telefono:telefono.value,
    mes:mesElegido,
    mensaje:mensaje.value,
    nombreConsultorio:consultoriosFiltrado.nombre,
    imagenConsultorio:consultoriosFiltrado.imagen,
    descripcionConsultorio:consultoriosFiltrado.descripcion,
    precioConsultorio: consultoriosFiltrado.precio,
    alquilerConsultorio: consultoriosFiltrado.alquiler,

}

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
    setTimeout(()=>{
        window.location.href = "../html/reserva.html"
    },1500)
    }
} )

