// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();
    
    if (nombre !== "") {
        let lista = document.getElementById("listaAmigos");
        let nuevoElemento = document.createElement("li");
        nuevoElemento.textContent = nombre;
        lista.appendChild(nuevoElemento);
        input.value = "";
    } else {
        alert("Por favor, ingrese un nombre válido.");
    }
}

function sortearAmigo() {
    let lista = document.querySelectorAll("#listaAmigos li");
    if (lista.length > 0) {
        let indiceAleatorio = Math.floor(Math.random() * lista.length);
        let nombreSorteado = lista[indiceAleatorio].textContent;
        document.getElementById("resultado").innerHTML = `<li>El amigo secreto es ${nombreSorteado}</li>`;
    } else {
        alert("No hay nombres en la lista para sortear.");
    }
}

function reiniciarJuego() {
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";
}