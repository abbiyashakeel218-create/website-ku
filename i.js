// Tombol
const button = document.querySelector("button");

button.addEventListener("click", function () {
    alert("Tombol berhasil diklik! 😎");
});

// Animasi sederhana saat halaman dibuka
document.addEventListener("DOMContentLoaded", function () {
    document.body.style.opacity = "0";

    setTimeout(() => {
        document.body.style.transition = "opacity 0.5s";
        document.body.style.opacity = "1";
    }, 100);
});

