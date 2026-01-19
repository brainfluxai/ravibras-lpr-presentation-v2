import AOS from 'aos';
import 'aos/dist/aos.css';

// Initialize AOS (Animate On Scroll)
AOS.init({
  duration: 800,
  easing: 'ease-out-cubic',
  once: true,
  offset: 50
});

// Force start at Inicio (top) on load
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

window.addEventListener('DOMContentLoaded', () => {
  window.scrollTo(0, 0);
  AOS.refresh();
});

// Parallax or interaction effects
document.addEventListener('mousemove', (e) => {
  const shape = document.querySelector('.abstract-shape');
  if (shape) {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    shape.style.transform = `translate(${x * 20}px, ${y * 20}px)`;
  }
});

// PDF Print Functionality
document.getElementById('print-pdf')?.addEventListener('click', () => {
  window.print();
});
