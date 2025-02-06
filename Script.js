document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".texto").textContent = "Color modificado";
});

function cambiarColor() {
    document.querySelector(".texto").style.backgroundColor = "#ffcc00";
}

function agregarTarea() {
    let input = document.getElementById("tarea");
    let tareaTexto = input.value.trim();
    if (tareaTexto === "") {
        alert("Ingresa una tarea válida");
        return;
    }

    let lista = document.getElementById("lista-tareas");
    let tareas = Array.from(lista.getElementsByTagName("li")).map(li => li.textContent.replace("Eliminar", "").trim());

    if (tareas.includes(tareaTexto)) {
        alert("Error: La tarea ya existe en la lista.");
        return;
    }

    let nuevaTarea = document.createElement("li");
    nuevaTarea.innerHTML = `${tareaTexto} <button class='btn-eliminar' onclick='eliminarTarea(this)'>Eliminar</button>`;
    lista.appendChild(nuevaTarea);
    input.value = "";
}

function eliminarTarea(boton) {
    boton.parentElement.remove();
}

async function cargarMenu() {
    const menuContainer = document.getElementById("menu-container");
    menuContainer.innerHTML = "<p>Cargando menú...</p>";

    try {
        await new Promise(resolve => setTimeout(resolve, 2000));

        const data = {
            pizzas: ["Margarita", "Pepperoni", "Cuatro Quesos", "Hawaiana", "BBQ Chicken"]
        };

        menuContainer.innerHTML = "<h3>Menú de Pizzas:</h3><ul class='lista'>";
        data.pizzas.forEach(pizza => {
            menuContainer.innerHTML += `<li>${pizza} <button class='btn-eliminar' onclick='eliminarPizza(this)'>Eliminar</button></li>`;
        });
        menuContainer.innerHTML += "</ul>";
    } catch (error) {
        menuContainer.innerHTML = `<p class="error">Error: No se pudo cargar el menú.</p>`;
    }
}

function eliminarPizza(boton) {
    boton.parentElement.remove();
}

document.getElementById("reservaForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const fecha = document.getElementById("fecha").value;
    const personas = document.getElementById("personas").value;

    if (nombre === "" || correo === "" || fecha === "" || personas === "") {
        alert("Por favor, complete todos los campos.");
        return;
    }

    const mensajeReserva = document.getElementById("mensaje-reserva");
    mensajeReserva.textContent = `Reserva para ${nombre} el ${fecha} para ${personas} personas.`;
    mensajeReserva.className = "success";
});
