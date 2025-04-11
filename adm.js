console.log("Archivo adm.js cargado");

function modoc(){

    document.body.classList.toggle("dark-mode");

    let button = document.querySelector(".modo");

    if(document.body.classList.contains("dark-mode")){
        button.textContent = "Modo Claro";
    } else {
        button.textContent = "Modo Oscuro";
    }
}

const imagenes = [
    './recursos/portada1.png',
    './recursos/portada2.png',
    './recursos/portada3.png',
    './recursos/portada4.png',
    './recursos/portada5.png',
];

let index = 0;
const imagen = document.getElementById("imagenportada");

setInterval(() => {
    index = (index + 1) % imagenes.length;
    imagen.style.opacity = 0;
    setTimeout(() => {
    imagen.src = imagenes[index];
    imagen.style.opacity = 1;
    }, 500);
}, 5000);

function validarFormulario() {
    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const comentario = document.getElementById("comentario").value.trim();

    let valido = true;

    if (nombre === "") {
    document.getElementById("error-nombre").textContent = "Ingresa tu nombre";
    valido = false;
    } else {
    document.getElementById("error-nombre").textContent = "";
    }

    if (email === "") {
    document.getElementById("error-email").textContent = "Ingresa tu correo";
    valido = false;
    } else {
    document.getElementById("error-email").textContent = "";
    }

    if (comentario === "") {
    document.getElementById("error-mensaje").textContent = "Escribe tu comentario";
    valido = false;
    } else {
    document.getElementById("error-mensaje").textContent = "";
    }

    if (valido) {

    const ahora = new Date();
    const fechaHora = ahora.toLocaleString('es-MX', {
        dateStyle: 'medium',
        timeStyle: 'short'
    });

    const contenedor = document.getElementById("comentarios-publicados");
    const nuevoComentario = document.createElement("div");
    nuevoComentario.classList.add("comentario-publicado");

    nuevoComentario.innerHTML = `
        <p><strong>${nombre}</strong> escribió:</p>
        <p>${comentario}</p>
        <p style="font-size: 0.9em; color: gray;">Publicado el: ${fechaHora}</p>
        <button class ="eliminar-comentario">Eliminar</button>
    <hr>
    `;

    contenedor.appendChild(nuevoComentario);

    nuevoComentario.querySelector(".eliminar-comentario").addEventListener("click", function () {
        nuevoComentario.remove();
    });

    document.getElementById("nombre").value = "";
    document.getElementById("email").value = "";
    document.getElementById("comentario").value = "";
    }
}







