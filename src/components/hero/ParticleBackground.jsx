import React, { useRef, useEffect } from 'react';

export default function ParticleBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];
    
    const colors = ['#4285F4', '#EA4335', '#FBBC05', '#34A853', '#A142F4', '#FFA0F0'];
    
    let targetRotationX = 0;
    let targetRotationY = 0;
    let rotationX = 0;
    let rotationY = 0;
    let time = 0;

    const resize = () => {
      canvas.width = canvas.parentElement.offsetWidth;
      canvas.height = canvas.parentElement.offsetHeight;
      init();
    };

    const handleMouseMove = (e) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      
      // Normalize mouse coordinates to -1 to 1 based on canvas center
      const nx = ((e.clientX - rect.left) / canvas.width) * 2 - 1;
      const ny = ((e.clientY - rect.top) / canvas.height) * 2 - 1;
      
      // Mouse determines target rotation angle (parallax effect)
      targetRotationY = nx * (Math.PI * 0.4); 
      targetRotationX = -ny * (Math.PI * 0.4);
    };

    const handleMouseLeave = () => {
      targetRotationX = 0;
      targetRotationY = 0;
    };
    
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    class Particle {
      constructor(radiusMax) {
        // Distribute in a spherical galaxy shape
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos((Math.random() * 2) - 1);
        
        // Push more particles to the outer shell but keep some inside
        const r = Math.pow(Math.random(), 0.5) * radiusMax; 
        
        this.originalX = r * Math.sin(phi) * Math.cos(theta);
        this.originalY = r * Math.sin(phi) * Math.sin(theta);
        this.originalZ = r * Math.cos(phi);
        
        this.size = Math.random() * 2.5 + 0.5;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        
        // Individual speed multiplier for base rotation
        this.speed = (Math.random() * 0.5) + 0.5; 
      }

      updateAndDraw(cx, cy, currentRotX, currentRotY, baseTime) {
        // 1. Base constant rotation over time (around Y axis)
        const angle = baseTime * this.speed;
        const cosT = Math.cos(angle);
        const sinT = Math.sin(angle);
        
        let x1 = this.originalX * cosT - this.originalZ * sinT;
        let y1 = this.originalY;
        let z1 = this.originalX * sinT + this.originalZ * cosT;

        // 2. Apply Mouse Rotation Y
        const cosY = Math.cos(currentRotY);
        const sinY = Math.sin(currentRotY);
        let x2 = x1 * cosY - z1 * sinY;
        let y2 = y1;
        let z2 = x1 * sinY + z1 * cosY;

        // 3. Apply Mouse Rotation X
        const cosX = Math.cos(currentRotX);
        const sinX = Math.sin(currentRotX);
        let x3 = x2;
        let y3 = y2 * cosX - z2 * sinX;
        let z3 = y2 * sinX + z2 * cosX;

        // 4. Perspective Projection to 2D
        const perspective = 1000;
        // Shift Z so everything is in front of the camera
        const zDepth = z3 + perspective; 
        
        if (zDepth > 0) {
          const scale = perspective / zDepth;
          const screenX = cx + x3 * scale;
          const screenY = cy + y3 * scale;
          
          // Draw particle
          ctx.fillStyle = this.color;
          ctx.beginPath();
          // Distant particles are smaller, closer are bigger
          ctx.arc(screenX, screenY, Math.max(0.1, this.size * scale), 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }

    const init = () => {
      particles = [];
      const radiusMax = Math.max(canvas.width, canvas.height) * 0.6;
      // Sparse particle count (fewer than before) to match the Antigravity look
      const numberOfParticles = 800; 
      for (let i = 0; i < numberOfParticles; i++) {
        particles.push(new Particle(radiusMax));
      }
    };
    
    resize(); // calls init()

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Smoothly ease rotation towards target
      rotationX += (targetRotationX - rotationX) * 0.05;
      rotationY += (targetRotationY - rotationY) * 0.05;
      
      time += 0.002; // constant background swirl
      
      const cx = canvas.width / 2;
      const cy = canvas.height / 2;
      
      for (let i = 0; i < particles.length; i++) {
        particles[i].updateAndDraw(cx, cy, rotationX, rotationY, time);
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
        background: '#ffffff'
      }} 
    />
  );
}
