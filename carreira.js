let girando = false;
let rotacaoAtual = 0;

function girarRoleta() {
  if (girando) return;

  girando = true;

  const roleta = document.getElementById("roleta");
  const resultadoTexto = document.getElementById("resultado");

  const voltas = Math.floor(Math.random() * 3) + 4; // 4 a 6 voltas
  const grauExtra = Math.floor(Math.random() * 360);

  const rotacaoFinal = (voltas * 360) + grauExtra;

  rotacaoAtual += rotacaoFinal;

  roleta.style.transform = `rotate(${rotacaoAtual}deg)`;

  setTimeout(() => {
    const grauParado = rotacaoAtual % 360;
    const setor = Math.floor((360 - grauParado) / 90) % 4;

    let overall;

    switch (setor) {
      case 0: // vermelho
        overall = randomEntre(60, 65);
        break;
      case 1: // amarelo
        overall = randomEntre(66, 70);
        break;
      case 2: // verde claro
        overall = randomEntre(71, 73);
        break;
      case 3: // verde escuro
        overall = randomEntre(74, 75);
        break;
    }

    resultadoTexto.innerText = "GER INICIAL: " + overall;

    salvarOverall(overall);

    girando = false;

  }, 4000);
}

function randomEntre(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function salvarOverall(valor) {
  const jogador = JSON.parse(localStorage.getItem("carreira"));
  jogador.overall = valor;
  localStorage.setItem("carreira", JSON.stringify(jogador));
}
