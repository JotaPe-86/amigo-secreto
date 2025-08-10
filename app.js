const listaDeAmigos = [];


function agregarAmigo() {
  const input = document.getElementById("amigo");
  const nombre = input.value.trim();

  if (nombre === "") {
    alert("Por favor, inserte un nombre."); 
    return; 

  if (listaDeAmigos.includes(nombre)) {
    alert("Ese nombre ya fue ingresado.");
    return;
  }
  }
  listaDeAmigos.push(nombre);
  
  const lista = document.getElementById("listaAmigos");
  const nuevoItem = document.createElement("li");
  nuevoItem.textContent = nombre;

  lista.appendChild(nuevoItem);
  input.value = "";

  input.focus();
  console.log("Lista actual de amigos:", listaDeAmigos);
}