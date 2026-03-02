function criarCarreira() {
  const jogador = {
    nome: "Novo Jogador",
    overall: 70,
    temporada: 1
  };

  localStorage.setItem("carreira", JSON.stringify(jogador));
  alert("Carreira criada!");
}

function continuarCarreira() {
  const carreira = localStorage.getItem("carreira");

  if (!carreira) {
    alert("Nenhuma carreira salva ainda.");
    return;
  }

  const dados = JSON.parse(carreira);
  alert("Bem-vindo de volta, " + dados.nome + "!");
}
