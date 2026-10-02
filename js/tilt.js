/**
 * CURSOR-REACTIVE 3D TILT EFFECT CONTROLLER
 * Applies physics-based tilt and interactive glare to glass cards
 */

class VanillaTiltController {
  static init() {
    const cards = document.querySelectorAll('.tilt-card');

    cards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -12; // Max 12deg tilt
        const rotateY = ((x - centerX) / centerX) * 12;

        card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`;

        // Dynamic Spotlight / Glare
        const glare = card.querySelector('.glare-effect');
        if (glare) {
          const angle = Math.atan2(y - centerY, x - centerX) * (180 / Math.PI);
          glare.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0) 70%)`;
        }
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
        const glare = card.querySelector('.glare-effect');
        if (glare) {
          glare.style.background = 'transparent';
        }
      });
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  VanillaTiltController.init();
});
