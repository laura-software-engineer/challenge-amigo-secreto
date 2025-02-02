//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

// Função para adicionar amigos
function adicionarAmigo() {
  let nome = document.querySelector("input").value;
  if (!nome) {
    alert("Por favor, insira um nome.");
  } else {
    amigos.push(nome);
    atualizarListaAmigos();
    limparCampo();
  }
}

// Função para atualizar a lista de amigos
function atualizarListaAmigos() {
  let lista = document.querySelector("#listaAmigos");
  lista.innerHTML = " "; // Limpa a lista antes de atualizarmos

  for (i = 0; i < amigos.length; i++) {
    let item = document.createElement("li"); // Cria um elemento <li>
    item.textContent = amigos[i]; // Define o texto do <li>
    lista.appendChild(item); // Adiciona o item a lista
  }
}

// Função para limpar o campo de entrada a cada inserção de um novo amigo
function limparCampo() {
  campo = document.querySelector("input");
  campo.value = "";
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert("Por favor, adicione amigos.")
  } else {
    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = amigoSorteado;
  }
}

