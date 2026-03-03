let girando = false;
let rotacaoAtual = 0;

const roleta = document.getElementById("roleta");

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

    numero.style.transform = `translate(${x}px, ${y}px)`;

    roleta.appendChild(numero);
  }
}

criarNumeros();

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
