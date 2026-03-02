function novaCarreira() {
  const jogador = {
    nome: "Novo Jogador",
    overall: 70,
    temporada: 1
  };

  localStorage.setItem("carreira", JSON.stringify(jogador));
  alert("Nova carreira criada!");
}

function carregarCarreira() {
  const carreira = localStorage.getItem("carreira");

  if (!carreira) {
    alert("Nenhuma carreira salva!");
    return;
  }

  const dados = JSON.parse(carreira);
  alert("Carreira carregada!\nJogador: " + dados.nome);
}
