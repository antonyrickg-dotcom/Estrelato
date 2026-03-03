let girando = false;
let rotacaoAtual = 0;

const roleta = document.getElementById("roleta");

function criarRoleta() {
  const total = 16;
  const angulo = 360 / total;

  let gradient = "conic-gradient(";

  for (let i = 0; i < total; i++) {
    const valor = 60 + i;

    let cor;

    if (valor <= 63) {
      cor = "#b30000"; // vermelho
    } else if (valor <= 68) {
      cor = "#f2c200"; // amarelo
    } else if (valor <= 72) {
      cor = "#32cd32"; // verde claro
    } else {
      cor = "#006400"; // verde escuro
    }

    const inicio = i * angulo;
    const fim = inicio + angulo;

    gradient += `${cor} ${inicio}deg ${fim}deg`;

    if (i < total - 1) gradient += ",";
  }

  gradient += ")";

  roleta.style.background = gradient;

  criarNumeros();
}

function criarNumeros() {
  const total = 16;
  const raio = 150;
  const anguloPorNumero = 360 / total;

  for (let i = 0; i < total; i++) {
    const numero = document.createElement("div");
    numero.classList.add("numero");

    const valor = 60 + i;
    numero.innerText = valor;

    const angulo = i * anguloPorNumero;

    const x = Math.cos((angulo - 90) * Math.PI / 180) * raio;
    const y = Math.sin((angulo - 90) * Math.PI / 180) * raio;

    numero.style.transform =
      `translate(-50%, -50%) translate(${x}px, ${y}px)`;

    roleta.appendChild(numero);
  }
}

criarRoleta();

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
