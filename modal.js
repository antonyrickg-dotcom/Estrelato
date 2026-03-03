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
const paisesPorContinente = {
  america_sul: [
    { nome: "Brasil", bandeira: "🇧🇷" },
    { nome: "Argentina", bandeira: "🇦🇷" },
    { nome: "Uruguai", bandeira: "🇺🇾" },
    { nome: "Colômbia", bandeira: "🇨🇴" },
    { nome: "Chile", bandeira: "🇨🇱" },
    { nome: "Peru", bandeira: "🇵🇪" }
  ],

  europa: [
    { nome: "Portugal", bandeira: "🇵🇹" },
    { nome: "Espanha", bandeira: "🇪🇸" },
    { nome: "França", bandeira: "🇫🇷" },
    { nome: "Alemanha", bandeira: "🇩🇪" },
    { nome: "Inglaterra", bandeira: "🏴" },
    { nome: "Itália", bandeira: "🇮🇹" }
  ],

  africa: [
    { nome: "Marrocos", bandeira: "🇲🇦" },
    { nome: "Senegal", bandeira: "🇸🇳" },
    { nome: "Nigéria", bandeira: "🇳🇬" },
    { nome: "Egito", bandeira: "🇪🇬" }
  ],

  asia: [
    { nome: "Japão", bandeira: "🇯🇵" },
    { nome: "Coreia do Sul", bandeira: "🇰🇷" },
    { nome: "Arábia Saudita", bandeira: "🇸🇦" },
    { nome: "Irã", bandeira: "🇮🇷" }
  ],

  america_norte: [
    { nome: "Estados Unidos", bandeira: "🇺🇸" },
    { nome: "México", bandeira: "🇲🇽" },
    { nome: "Canadá", bandeira: "🇨🇦" }
  ]
};

function atualizarPaises() {
  const continente = document.getElementById("continente").value;
  const selectPais = document.getElementById("pais");

  selectPais.innerHTML = '<option value="">Selecione o país</option>';

  if (!continente) return;

  paisesPorContinente[continente].forEach(pais => {
    const option = document.createElement("option");
    option.value = pais.nome;
    option.textContent = pais.bandeira + " " + pais.nome;
    selectPais.appendChild(option);
  });
}
