const listaDeAmigos = [];
const amigosSorteados = [];

function agregarAmigo() {
  const input = document.getElementById("amigo");
  const nombre = input.value.trim();

  if (nombre === "") {
    alert("Por favor, inserte un nombre.");
    return;
  }

  if (listaDeAmigos.includes(nombre)) {
    alert("Ese nombre ya fue ingresado.");
    return;
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

function sortearAmigo() {
  
  const amigosDisponibles = listaDeAmigos.filter(nombre => !amigosSorteados.includes(nombre));

  
  if (amigosDisponibles.length === 0) {
    alert("¡Ya se sortearon todos los nombres!");
    return;
  }

  
  const indiceAleatorio = Math.floor(Math.random() * amigosDisponibles.length);
  const nombreSorteado = amigosDisponibles[indiceAleatorio];

  
  amigosSorteados.push(nombreSorteado);

  
  const resultado = document.getElementById("resultado");
  const nuevoResultado = document.createElement("li");
  nuevoResultado.textContent = "🎉 Amigo secreto: " + nombreSorteado;
  resultado.appendChild(nuevoResultado);

  console.log("Nombre sorteado:", nombreSorteado);
  console.log("Ya sorteados:", amigosSorteados);
}