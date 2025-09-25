const sayangBtn = document.getElementById("sayangBtn");
const gaBtn = document.getElementById("gaBtn");
const popup = document.getElementById("popup");

let scaleSayang = 1; // ukuran awal tombol sayang
let scaleGa = 1; // ukuran awal tombol ga

// Jika klik "Ga Banget"
gaBtn.addEventListener("click", () => {
  if (scaleSayang < 2.5) {
    // biar nggak terlalu gede sampai keluar layar
    scaleSayang *= 1.3; // perbesar 1.3x setiap klik
    sayangBtn.style.transform = `scale(${scaleSayang})`;
  }

  scaleGa *= 0.7; // perkecil tombol ga
  gaBtn.style.transform = `scale(${scaleGa})`;
  gaBtn.style.opacity = scaleGa < 0.3 ? 0 : 1; // hilang kalau terlalu kecil
});

// Jika klik "Sayang Banget"
sayangBtn.addEventListener("click", () => {
  popup.style.display = "flex";
  spawnHearts();
});

// Reset semua ke awal
function resetAll() {
  popup.style.display = "none";
  scaleSayang = 1;
  scaleGa = 1;
  sayangBtn.style.transform = "scale(1)";
  gaBtn.style.transform = "scale(1)";
  gaBtn.style.opacity = 1;
}

// Fungsi buat hati jatuh
function spawnHearts() {
  for (let i = 0; i < 15; i++) {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerText = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 3 + 2 + "s";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
  }
}
