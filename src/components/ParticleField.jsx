import { useEffect, useRef } from 'react';

export default function ParticleField({ density = 58, className = '' }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const mobile = window.innerWidth < 768;
    const count = mobile ? Math.round(density * 0.4) : density;
    let width = 0;
    let height = 0;
    let raf = 0;
    let particles = [];
    const pointer = { x: -999, y: -999 };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.parentElement.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const makeParticle = () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.5 + 0.4,
      vx: (Math.random() - 0.5) * 0.16,
      vy: (Math.random() - 0.5) * 0.16,
      a: Math.random() * 0.45 + 0.12,
      orange: Math.random() > 0.55,
      phase: Math.random() * Math.PI * 2,
    });

    const init = () => {
      resize();
      particles = Array.from({ length: count }, makeParticle);
    };

    const draw = (time) => {
      ctx.clearRect(0, 0, width, height);
      for (let i = 0; i < particles.length; i += 1) {
        const p = particles[i];
        if (!reduce) {
          p.x += p.vx;
          p.y += p.vy;
        }
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        if (p.y > height + 10) p.y = -10;

        const dx = p.x - pointer.x;
        const dy = p.y - pointer.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const near = dist < 130 ? 1 - dist / 130 : 0;
        const pulse = reduce ? 1 : 0.78 + Math.sin(time * 0.001 + p.phase) * 0.22;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r + near * 1.2, 0, Math.PI * 2);
        ctx.fillStyle = p.orange
          ? `rgba(255, 92, 0, ${(p.a + near * 0.35) * pulse})`
          : `rgba(255, 235, 220, ${(p.a * 0.6 + near * 0.2) * pulse})`;
        ctx.fill();

        if (near > 0) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(pointer.x, pointer.y);
          ctx.strokeStyle = `rgba(255, 92, 0, ${near * 0.12})`;
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      }
      raf = requestAnimationFrame(draw);
    };

    const onPointer = (e) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = e.clientX - rect.left;
      pointer.y = e.clientY - rect.top;
    };
    const onLeave = () => {
      pointer.x = -999;
      pointer.y = -999;
    };

    init();
    raf = requestAnimationFrame(draw);
    window.addEventListener('resize', init);
    window.addEventListener('mousemove', onPointer);
    window.addEventListener('mouseout', onLeave);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', init);
      window.removeEventListener('mousemove', onPointer);
      window.removeEventListener('mouseout', onLeave);
    };
  }, [density]);

  return <canvas ref={canvasRef} className={`particle-field ${className}`} aria-hidden="true" />;
}
