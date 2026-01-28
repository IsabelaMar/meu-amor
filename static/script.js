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

document.addEventListener("DOMContentLoaded", function () {
    const track = document.querySelector(".carousel-track");
    const cards = document.querySelectorAll(".card");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
    let index = 0;

    function updateCarousel() {
        const cardWidth = cards[0].getBoundingClientRect().width + 10; // +gap
        track.style.transform = `translateX(${-index * cardWidth}px)`;
    }

    nextBtn.addEventListener("click", function() {
        if (index < cards.length - 1) {
            index++;
            updateCarousel();
        }
    });

    prevBtn.addEventListener("click", function() {
        if (index > 0) {
            index--;
            updateCarousel();
        }
    });

    // Swipe para mobile
    let startX = 0;
    track.addEventListener("touchstart", (e) => startX = e.touches[0].clientX);
    track.addEventListener("touchend", (e) => {
        let endX = e.changedTouches[0].clientX;
        if (startX - endX > 50 && index < cards.length - 1) index++;
        if (endX - startX > 50 && index > 0) index--;
        updateCarousel();
    });
});
