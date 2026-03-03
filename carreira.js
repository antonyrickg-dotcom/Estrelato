let girando = false;

function sortearOverall() {
  if (girando) return;

  girando = true;
  const numeroElemento = document.getElementById("numero");

  let contador = 0;

  const animacao = setInterval(() => {
    const numeroAleatorio = Math.floor(Math.random() * 16) + 60; 
    numeroElemento.textContent = numeroAleatorio;

    contador++;

    if (contador > 25) {
      clearInterval(animacao);

      const resultadoFinal = Math.floor(Math.random() * 16) + 60;
      numeroElemento.textContent = resultadoFinal;

      salvarOverall(resultadoFinal);
      girando = false;
    }

  }, 80);
}

function salvarOverall(valor) {
  const jogador = JSON.parse(localStorage.getItem("carreira"));
  jogador.overall = valor;
  localStorage.setItem("carreira", JSON.stringify(jogador));

  setTimeout(() => {
    alert("Seu GER inicial é " + valor + "!");
  }, 300);
}
