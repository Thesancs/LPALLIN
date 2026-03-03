import React, { useEffect, useRef } from 'react';

export const InteractiveSphere = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = container.clientWidth;
    let height = container.clientHeight;
    canvas.width = width;
    canvas.height = height;

    const particles: any[] = [];
    const isMobile = window.innerWidth < 768;
    const numParticles = isMobile ? 1500 : 4500;
    const sphereRadius = Math.min(width, height) * 0.4;

    const colors = ['#ffffff', '#e0f7fa', '#00f2ff', '#00d8e6', '#008c99'];

    for (let i = 0; i < numParticles; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = Math.pow(Math.random(), 1.2) * sphereRadius;

      particles.push({
        baseX: r * Math.sin(phi) * Math.cos(theta),
        baseY: r * Math.sin(phi) * Math.sin(theta),
        baseZ: r * Math.cos(phi),
        size: Math.random() * 1.5 + 0.5,
        color: colors[Math.floor(Math.random() * colors.length)],
        randomOffset: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.002 + 0.001,
        offX: 0,
        offY: 0,
      });
    }

    let time = 0;
    let mouse = { x: width / 2, y: height / 2, active: false };

    const handleMouseMove = (e: MouseEvent | TouchEvent) => {
      mouse.active = true;
      const rect = canvas.getBoundingClientRect();
      if ('touches' in e) {
        mouse.x = e.touches[0].clientX - rect.left;
        mouse.y = e.touches[0].clientY - rect.top;
      } else {
        mouse.x = (e as MouseEvent).clientX - rect.left;
        mouse.y = (e as MouseEvent).clientY - rect.top;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleMouseMove, { passive: true });

    let isVisible = true;
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.1 }
    );
    observer.observe(container);

    const render = () => {
      if (isVisible) {
        time += 0.003;
        ctx.clearRect(0, 0, width, height);
        const centerX = width / 2;
        const centerY = height / 2;

        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];
          const cosT = Math.cos(time + p.speed);
          const sinT = Math.sin(time + p.speed);
          let rx = p.baseX * cosT - p.baseZ * sinT;
          let rz = p.baseZ * cosT + p.baseX * sinT;
          let ry = p.baseY;
          rx += Math.sin(time * 2 + p.randomOffset) * 2;
          ry += Math.cos(time * 2 + p.randomOffset) * 2;
          const fov = 1000;
          const zOffset = sphereRadius * 2;
          const scale = fov / (fov + rz + zOffset);
          let projX = centerX + rx * scale;
          let projY = centerY + ry * scale;
          let dx = mouse.x - projX;
          let dy = mouse.y - projY;
          let dist = Math.sqrt(dx * dx + dy * dy);
          const influenceRadius = 60;
          if (mouse.active && dist < influenceRadius) {
            const force = (influenceRadius - dist) / influenceRadius;
            const angle = Math.atan2(dy, dx);
            const targetOffX = -Math.cos(angle) * force * 50;
            const targetOffY = -Math.sin(angle) * force * 50;
            p.offX += (targetOffX - p.offX) * 0.2;
            p.offY += (targetOffY - p.offY) * 0.2;
          } else {
            p.offX *= 0.92;
            p.offY *= 0.92;
          }
          const finalX = projX + p.offX;
          const finalY = projY + p.offY;
          let interactionScale = 1;
          let alpha = Math.min(1, scale * 1.5);
          const currentOffset = Math.sqrt(p.offX * p.offX + p.offY * p.offY);
          if (currentOffset > 0.5) {
            const intensity = Math.min(1, currentOffset / 25);
            interactionScale = 1 + intensity * 0.5;
            alpha = Math.min(1, alpha + intensity * 0.3);
          }
          if (rz < -sphereRadius * 0.5) alpha *= 0.4;
          ctx.globalAlpha = alpha;
          ctx.fillStyle = p.color;
          ctx.beginPath();
          ctx.arc(finalX, finalY, p.size * scale * interactionScale, 0, Math.PI * 2);
          ctx.fill();
        }

        if (mouse.active) {
          const gradient = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 150);
          gradient.addColorStop(0, 'rgba(0, 242, 255, 0.15)');
          gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
          ctx.fillStyle = gradient;
          ctx.globalAlpha = 1;
          ctx.beginPath();
          ctx.arc(mouse.x, mouse.y, 150, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth;
      height = container.clientHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleMouseMove);
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full flex items-center justify-center pointer-events-none z-0 overflow-hidden">
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
};
