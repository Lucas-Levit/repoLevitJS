const formulario = document.getElementById("formulario");
const contacto = document.querySelector(".contacto");
const btn = document.querySelector(".btn")

contacto.setAttribute("contentEditable" , "true")



function contactanos() {
    formulario.innerHTML = `<div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Direccion de email</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                            <div id="emailHelp" class="form-text">Ingrese su email.</div>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Constraseña</label>
                            <input type="password" class="form-control" id="exampleInputPassword1">
                        </div>
                        <div class="mb-3 form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1">
                            <label class="form-check-label" for="exampleCheck1">Borrar todo</label>
                        </div>
                        <button type="submit" class="btn btn-primary">Enviar</button>`;
}

formulario.addEventListener("submit" , enviar)

function enviar() {
    alert("Estas seguro que deseas enviar?")
}



contactanos();

