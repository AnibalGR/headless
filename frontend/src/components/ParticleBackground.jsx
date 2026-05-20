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
    
    // Configuración central extraída del sitio
    const settings = {
      colorPalette: ['rgba(200,240,255,0.85)'],
      particleCount: 100,
      connectionDistance: 130,
      speed: 3,
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
        // La velocidad original era dividida por 5 en su constructor
        this.vx = (Math.random() - 0.5) * (settings.speed / 5);
        this.vy = (Math.random() - 0.5) * (settings.speed / 5);
        this.size = Math.random() * 2 + 1.5;
        this.color = settings.colorPalette[0];
      }

      update(w, h) {
        // Rebote en los bordes
        if (this.x < 0 || this.x > w) this.vx *= -1;
        if (this.y < 0 || this.y > h) this.vy *= -1;

        // Físicas de interacción con el cursor (Gravedad y Repulsión)
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance > 0 && distance < mouse.radius) {
            const dirX = dx / distance;
            const dirY = dy / distance;
            const force = (mouse.radius - distance) / mouse.radius;

            if (isMouseDown) {
              // Atracción
              this.x += dirX * force * settings.attractStrength;
              this.y += dirY * force * settings.attractStrength;
            } else {
              // Repulsión
              this.x -= dirX * force * settings.repelStrength;
              this.y -= dirY * force * settings.repelStrength;
            }
          }
        }

        this.x += this.vx;
        this.y += this.vy;

        // Dibujar partícula
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.shadowColor = 'rgba(0,176,196,0.25)';
        ctx.shadowBlur = 6;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    function initParticles(w, h) {
      particles = [];
      const density = (w * h) / 1000000;
      const count = Math.floor(settings.particleCount * Math.max(0.5, density));
      for (let i = 0; i < count; i++) {
        particles.push(new Particle(w, h));
      }
    }

    function resizeCanvas() {
      const container = canvas.parentElement;
      const rect = container.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      
      if (!rect.width || !rect.height) return;
      
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      initParticles(rect.width, rect.height);
    }

    function drawConnections() {
      const limitSq = settings.connectionDistance * settings.connectionDistance;
      for (let a = 0; a < particles.length; a++) {
        for (let b = a + 1; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const distSq = dx * dx + dy * dy;

          if (distSq < limitSq) {
            const dist = Math.sqrt(distSq);
            const opacity = 1 - dist / settings.connectionDistance;
            ctx.globalAlpha = opacity * 0.45;
            ctx.strokeStyle = 'rgba(0,176,196,1)';
            ctx.lineWidth = settings.lineWidth;
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
      const container = canvas.parentElement;
      const rect = container.getBoundingClientRect();
      
      // Limpiar canvas en cada frame (se limpia respetando el DPR ya que rect.width/height son tamaños CSS)
      ctx.clearRect(0, 0, rect.width, rect.height);
      
      for (let i = 0; i < particles.length; i++) {
        particles[i].update(rect.width, rect.height);
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

    // Inicializar el observer para cuando cambie de tamaño el viewport
    const container = canvas.parentElement;
    const ro = new ResizeObserver(resizeCanvas);
    ro.observe(container);

    // Eventos
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseleave', onLeave);
    window.addEventListener('mousedown', () => { isMouseDown = true; });
    window.addEventListener('mouseup', () => { isMouseDown = false; });

    // Primera llamada
    resizeCanvas();
    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      ro.disconnect();
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
