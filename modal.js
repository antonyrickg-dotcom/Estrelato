function abrirCriacao() {
  document.getElementById("modalCriar").style.display = "block";
}

function fecharCriacao() {
  document.getElementById("modalCriar").style.display = "none";
}

function criarJogador() {
  const jogador = {
    nome: document.getElementById("nome").value,
    sobrenome: document.getElementById("sobrenome").value,
    posicao: document.getElementById("posicao").value,
    continente: document.getElementById("continente").value,
    pais: document.getElementById("pais").value,
    overall: 65,
    temporada: 1
  };

  localStorage.setItem("carreira", JSON.stringify(jogador));

  alert("Jogador criado com sucesso!");
  fecharCriacao();
}
