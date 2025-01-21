//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {
  const nomeInput = document.getElementById("amigo").value.trim();

  if (nomeInput === "") {
    alert("Por favor, insira um nome válido!");
    return;
  }

  amigos.push(nomeInput);

  document.getElementById("amigo").value = "";

  atualizarLista();
}

function atualizarLista() {
  const listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.innerHTML = ""; 

  amigos.forEach((amigo, index) => {
    const item = document.createElement("li");
    item.textContent = amigo;

    const btnRemover = document.createElement("button");
    btnRemover.textContent = "Remover";
    btnRemover.classList.add("remove-button");
    btnRemover.onclick = () => removerAmigo(index);

    item.appendChild(btnRemover);
    listaAmigos.appendChild(item);
  });
}

function removerAmigo(index) {
  amigos.splice(index, 1); 
  atualizarLista(); 
}

function sortearAmigo() {

  if (amigos.length === 0) {
    alert("A lista está vazia! Adicione amigos antes de sortear.");
    return;
  }

  const indiceAleatorio = Math.floor(Math.random() * amigos.length);

  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `<li>O amigo secreto sorteado é: <strong>${amigos[indiceAleatorio]}</strong></li>`;
}
