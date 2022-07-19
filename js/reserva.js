const datosReserva = JSON.parse(localStorage.getItem("datosUsuario"))
const contenedorReserva = document.getElementById("reserva")
const contenedorUsuario = document.getElementById("usuario")
const btnfinalizar = document.getElementById("finalizar")

window.addEventListener("DOMContentLoaded", rendeReserva)
function rendeReserva() {
    const { nombreConsultorio, imagenConsultorio, descripcionConsultorio, precioConsultorio, alquilerConsultorio, email, mensaje, mes, telefono, nombre } = datosReserva
    contenedorReserva.innerHTML = `
            <div class="card">
            <img src="${imagenConsultorio}" class="card-img-top" alt="...">
            <div class="card-body">
                <h6 class="card-title" id="name">${nombreConsultorio}</h6>
                <p class="card-text">${descripcionConsultorio}</p>
                <span>$${precioConsultorio} ${alquilerConsultorio}</span>
            </div>
        </div>
    `
    contenedorUsuario.innerHTML = `
            <p> Nombre y apellido: ${nombre}</p>
            <p> Email: ${email}</p>
            <p> Telefono: ${telefono}</p>
            <p> Mes de reserva: ${mes}</p>
            <p> Mensaje: ${mensaje}</p>
    `
}
btnfinalizar.addEventListener("click", () => {
    localStorage.removeItem("datosUsuario")
    setTimeout(() => {
        window.location.href = "../index.html"
    }, 1500)
})



