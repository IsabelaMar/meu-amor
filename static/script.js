function atualizarContador() {
    const agora = new Date();
    const diff = agora - dataInicio;

    const totalSegundos = Math.floor(diff / 1000);
    const totalMinutos = Math.floor(totalSegundos / 60);
    const totalHoras = Math.floor(totalMinutos / 60);
    const dias = Math.floor(totalHoras / 24);

    const segundos = totalSegundos % 60;
    const minutos = totalMinutos % 60;
    const horas = totalHoras % 24;

    document.getElementById("contador").innerText =
        `${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos 💖`;
}

setInterval(atualizarContador, 1000);
atualizarContador();

function criarCoracao() {
  const coracao = document.createElement("div");
  coracao.classList.add("coracao");
  coracao.innerHTML = "💗";

  coracao.style.left = Math.random() * 100 + "vw";
  coracao.style.animationDuration = (3 + Math.random() * 3) + "s";

  document.body.appendChild(coracao);

  setTimeout(() => {
    coracao.remove();
  }, 6000);
}

setInterval(criarCoracao, 500);

