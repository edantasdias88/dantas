const section = document.querySelector('.case');
const slides = document.querySelectorAll('.case__slide');

let current = 0;
let isAnimating = false;

// altura dinâmica
section.style.height = `${(slides.length - 1) * 100}vh`;

// estado inicial
updateSlides();
updateParallax();

window.addEventListener('wheel', (e) => {
  const rect = section.getBoundingClientRect();
  const offset = 2;

  let isActive = false;

  // 🔥 lógica diferente por direção
  if (e.deltaY > 0) {
    // descendo
    isActive =
      rect.top <= offset &&
      rect.bottom > window.innerHeight + offset;
  } else {
    // subindo
    isActive =
      rect.top < 0 &&
      rect.bottom >= window.innerHeight;
  }

  if (!isActive) return;

  // 👉 libera no primeiro
  if (current === 0 && e.deltaY < 0) return;

  // 👉 libera no último
  if (current === slides.length - 1 && e.deltaY > 0) return;

  e.preventDefault();

  if (isAnimating) return;

  isAnimating = true;

  if (e.deltaY > 0) {
    current++;
  } else {
    current--;
  }

  updateSlides();
  updateParallax();

  setTimeout(() => {
    isAnimating = false;
  }, 800);
}, { passive: false });

function updateSlides() {
  slides.forEach((slide, index) => {
    if (index < current) {
      slide.style.transform = 'translateY(-100%)';
    } else if (index === current) {
      slide.style.transform = 'translateY(0)';
    } else {
      slide.style.transform = 'translateY(100%)';
    }
  });
}

function updateParallax() {
  slides.forEach((slide, index) => {
    const bg = slide.querySelector('.case__bg');

    if (!bg) return;

    if (index === current) {
      bg.style.transform = 'translateY(0)';
    } else if (index < current) {
      bg.style.transform = 'translateY(-40px)';
    } else {
      bg.style.transform = 'translateY(40px)';
    }
  });
}