import { useEffect, useRef } from 'react';

export default function ParticleBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    let animationFrameId;
    let particles = [];
    let isMouseDown = false;
    let isVisible = true;
    
    // Configuración central extraída del sitio
    const settings = {
      colorPalette: ['rgba(200,240,255,0.85)'],
      particleCount: window.innerWidth < 768 ? 30 : 60, // Reduce density for mobile
      connectionDistance: 110,
      speed: 2,
      cursorRadius: 200,
      repelStrength: 10,
      attractStrength: 25,
      lineWidth: 0.6
    };

    const mouse = { x: null, y: null, radius: settings.cursorRadius };

    class Particle {
      constructor(w, h) {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.vx = (Math.random() - 0.5) * (settings.speed / 5);
        this.vy = (Math.random() - 0.5) * (settings.speed / 5);
        this.size = Math.random() * 2 + 1.5;
        this.color = settings.colorPalette[0];
      }

      update(w, h) {
        if (this.x < 0 || this.x > w) this.vx *= -1;
        if (this.y < 0 || this.y > h) this.vy *= -1;

        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance > 0 && distance < mouse.radius) {
            const dirX = dx / distance;
            const dirY = dy / distance;
            const force = (mouse.radius - distance) / mouse.radius;

            if (isMouseDown) {
              this.x += dirX * force * settings.attractStrength;
              this.y += dirY * force * settings.attractStrength;
            } else {
              this.x -= dirX * force * settings.repelStrength;
              this.y -= dirY * force * settings.repelStrength;
            }
          }
        }

        this.x += this.vx;
        this.y += this.vy;

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill(); // Removed expensive shadowBlur during animation
      }
    }

    function initParticles(w, h) {
      particles = [];
      const density = (w * h) / 1000000;
      // Cap density multiplier to avoid massive O(N^2) slowdowns on 4k screens
      const count = Math.floor(settings.particleCount * Math.min(1.5, Math.max(0.5, density)));
      for (let i = 0; i < count; i++) {
        particles.push(new Particle(w, h));
      }
    }

    let currentWidth = 0;
    let currentHeight = 0;

    function resizeCanvas() {
      const container = canvas.parentElement;
      const rect = container.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2); // Cap at 2x resolution to save GPU/CPU
      
      if (!rect.width || !rect.height) return;
      
      currentWidth = rect.width;
      currentHeight = rect.height;
      
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      initParticles(rect.width, rect.height);
    }

    function drawConnections() {
      const limitSq = settings.connectionDistance * settings.connectionDistance;
      ctx.lineWidth = settings.lineWidth;
      ctx.strokeStyle = 'rgba(0,176,196,1)';
      
      for (let a = 0; a < particles.length; a++) {
        for (let b = a + 1; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const distSq = dx * dx + dy * dy;

          if (distSq < limitSq) {
            const dist = Math.sqrt(distSq);
            const opacity = 1 - dist / settings.connectionDistance;
            ctx.globalAlpha = opacity * 0.45;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 1;
    }

    function animate() {
      if (!isVisible) {
        animationFrameId = requestAnimationFrame(animate);
        return;
      }
      
      ctx.clearRect(0, 0, currentWidth, currentHeight);
      
      for (let i = 0; i < particles.length; i++) {
        particles[i].update(currentWidth, currentHeight);
      }
      
      drawConnections();
      animationFrameId = requestAnimationFrame(animate);
    }

    function onMove(e) {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    }

    function onLeave() {
      mouse.x = null;
      mouse.y = null;
      isMouseDown = false;
    }

    const container = canvas.parentElement;
    
    // Use Intersection Observer to pause animation when offscreen
    const io = new IntersectionObserver((entries) => {
      isVisible = entries[0].isIntersecting;
    });
    io.observe(container);

    const ro = new ResizeObserver(resizeCanvas);
    ro.observe(container);

    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('mouseleave', onLeave, { passive: true });
    window.addEventListener('mousedown', () => { isMouseDown = true; }, { passive: true });
    window.addEventListener('mouseup', () => { isMouseDown = false; }, { passive: true });

    resizeCanvas();
    
    // Delay the initial animation loop so it doesn't block the main thread during React hydration
    const startTimeout = setTimeout(() => {
      animate();
    }, 1000);

    return () => {
      clearTimeout(startTimeout);
      cancelAnimationFrame(animationFrameId);
      ro.disconnect();
      io.disconnect();
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseleave', onLeave);
      window.removeEventListener('mousedown', () => { isMouseDown = true; });
      window.removeEventListener('mouseup', () => { isMouseDown = false; });
    };
  }, []);

  return (
    <div style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0 }}>
      <canvas ref={canvasRef} style={{ display: 'block', width: '100%', height: '100%' }} />
    </div>
  );
}
