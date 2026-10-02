/**
 * ZERO-GRAVITY PHYSICS PARTICLE ENGINE
 * Interactive Canvas physics simulation for Mohamed Kotkat Portfolio Hero
 */

class AntiGravityParticles {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    
    this.particles = [];
    this.particleCount = 75;
    this.maxDistance = 140;
    this.mouse = { x: null, y: null, radius: 180 };
    
    this.init();
    this.animate();
    this.addEventListeners();
  }

  init() {
    this.resize();
    this.particles = [];
    
    for (let i = 0; i < this.particleCount; i++) {
      const radius = Math.random() * 2.5 + 1;
      this.particles.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        radius: radius,
        vx: (Math.random() - 0.5) * 0.7,
        vy: (Math.random() - 0.5) * 0.7,
        baseVx: (Math.random() - 0.5) * 0.7,
        baseVy: (Math.random() - 0.5) * 0.7,
        color: Math.random() > 0.4 ? '#00D2FF' : '#6366F1',
        alpha: Math.random() * 0.6 + 0.3
      });
    }
  }

  resize() {
    if (!this.canvas) return;
    this.canvas.width = this.canvas.parentElement.clientWidth;
    this.canvas.height = this.canvas.parentElement.clientHeight;
  }

  addEventListeners() {
    window.addEventListener('resize', () => this.resize());
    
    this.canvas.parentElement.addEventListener('mousemove', (e) => {
      const rect = this.canvas.getBoundingClientRect();
      this.mouse.x = e.clientX - rect.left;
      this.mouse.y = e.clientY - rect.top;
    });

    this.canvas.parentElement.addEventListener('mouseleave', () => {
      this.mouse.x = null;
      this.mouse.y = null;
    });
  }

  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    for (let i = 0; i < this.particles.length; i++) {
      const p = this.particles[i];

      // Anti-gravity float position update
      p.x += p.vx;
      p.y += p.vy;

      // Screen edge boundary wrapping
      if (p.x < 0) p.x = this.canvas.width;
      if (p.x > this.canvas.width) p.x = 0;
      if (p.y < 0) p.y = this.canvas.height;
      if (p.y > this.canvas.height) p.y = 0;

      // Mouse interactive force field (Repulsion & Fluid Drift)
      if (this.mouse.x !== null && this.mouse.y !== null) {
        const dx = this.mouse.x - p.x;
        const dy = this.mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < this.mouse.radius) {
          const forceDirectionX = dx / dist;
          const forceDirectionY = dy / dist;
          const maxDistance = this.mouse.radius;
          const force = (maxDistance - dist) / maxDistance;
          const directionX = forceDirectionX * force * 3;
          const directionY = forceDirectionY * force * 3;

          p.x -= directionX;
          p.y -= directionY;
        }
      }

      // Render Particle Node with Glow
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      this.ctx.fillStyle = p.color;
      this.ctx.globalAlpha = p.alpha;
      this.ctx.shadowBlur = 10;
      this.ctx.shadowColor = p.color;
      this.ctx.fill();

      // Connect Nearest Neighbors
      for (let j = i + 1; j < this.particles.length; j++) {
        const p2 = this.particles[j];
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < this.maxDistance) {
          const opacity = (1 - dist / this.maxDistance) * 0.25;
          this.ctx.beginPath();
          this.ctx.moveTo(p.x, p.y);
          this.ctx.lineTo(p2.x, p2.y);
          this.ctx.strokeStyle = p.color;
          this.ctx.globalAlpha = opacity;
          this.ctx.lineWidth = 0.8;
          this.ctx.stroke();
        }
      }
    }

    requestAnimationFrame(() => this.animate());
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new AntiGravityParticles('hero-particles-canvas');
});
