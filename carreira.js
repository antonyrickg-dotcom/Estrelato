let girando = false;
let rotacaoAtual = 0;

const roleta = document.getElementById("roleta");

// criar números automaticamente
function criarNumeros() {
  const totalNumeros = 16; // 60 até 75
  const angulo = 360 / totalNumeros;

  for (let i = 0; i < totalNumeros; i++) {

    const valor = 60 + i;
    const div = document.createElement("div");
    div.classList.add("numero");

    const rotacao = i * angulo;
    div.style.transform = `rotate(${rotacao}deg) translateY(-180px) rotate(-${rotacao}deg)`;

    div.innerText = valor;

    // cores
    if (valor <= 63) {
      div.style.background = "#b30000";
    } else if (valor <= 68) {
      div.style.background = "#f2c200";
    } else if (valor <= 72) {
      div.style.background = "#32cd32";
    } else {
      div.style.background = "#006400";
    }

    roleta.appendChild(div);
  }
}

criarNumeros();

function girarRoleta() {
  if (girando) return;
  girando = true;

  const voltas = Math.floor(Math.random() * 3) + 5;
  const grauExtra = Math.floor(Math.random() * 360);

  const rotacaoFinal = (voltas * 360) + grauExtra;

  rotacaoAtual += rotacaoFinal;

  roleta.style.transform = `rotate(${rotacaoAtual}deg)`;

  setTimeout(() => {
    const grauParado = rotacaoAtual % 360;
    const setor = Math.floor((360 - grauParado) / (360 / 16)) % 16;

    const overall = 60 + setor;

    document.getElementById("resultado").innerText =
      "GER INICIAL: " + overall;

    salvarOverall(overall);

    girando = false;

  }, 5000);
}

function salvarOverall(valor) {
  const jogador = JSON.parse(localStorage.getItem("carreira"));
  jogador.overall = valor;
  localStorage.setItem("carreira", JSON.stringify(jogador));
}
