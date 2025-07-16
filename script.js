// Toggle Dark/Light
const themeToggle = document.getElementById("themeToggle");
let isDark = true;

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");
  isDark = !isDark;
  themeToggle.textContent = isDark ? "🌙" : "☀️";
});

// Scroll Animasi
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});

document.querySelectorAll('.content, .image').forEach(el => observer.observe(el));

// Musik autoplay (jika tidak dilarang browser)
const bgm = document.getElementById("bgm");
window.addEventListener("click", () => {
  bgm.play().catch(() => {});
}, { once: true });

