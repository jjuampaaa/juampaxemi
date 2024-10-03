// Cuenta atrás
const countdownDate = new Date("2024-10-03T04:30:00-03:00").getTime();

const countdownFunction = setInterval(function() {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = 
        `<span>${days} <span class="label">días</span></span>` +
        `<span>${hours} <span class="label">horas</span></span>` +
        `<span>${minutes} <span class="label">minutos</span></span>` +
        `<span>${seconds} <span class="label">segundos</span></span>`;

    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("countdown").innerHTML = "EXPIRED";
        // Redirigir a YouTube
        window.location.href = "https://youtu.be/ujMMkzaJfYA?si=xynzzqli0OFPZwRg";
    }
}, 1000);
