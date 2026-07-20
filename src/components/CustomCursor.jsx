import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  const rafRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
      dot.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
    };

    const lerp = (a, b, t) => a + (b - a) * t;

    const animate = () => {
      ringPos.current.x = lerp(ringPos.current.x, pos.current.x, 0.12);
      ringPos.current.y = lerp(ringPos.current.y, pos.current.y, 0.12);
      ring.style.transform = `translate(${ringPos.current.x - 20}px, ${ringPos.current.y - 20}px)`;
      rafRef.current = requestAnimationFrame(animate);
    };

    const onEnterLink = () => {
      dot.style.transform += ' scale(3)';
      ring.style.opacity = '0';
      dot.style.background = '#00C2FF';
    };
    const onLeaveLink = () => {
      ring.style.opacity = '1';
      dot.style.background = 'white';
    };

    document.addEventListener('mousemove', onMove);
    document.querySelectorAll('a, button, [role="button"]').forEach(el => {
      el.addEventListener('mouseenter', onEnterLink);
      el.addEventListener('mouseleave', onLeaveLink);
    });

    rafRef.current = requestAnimationFrame(animate);

    // Hide default cursor
    document.body.style.cursor = 'none';

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafRef.current);
      document.body.style.cursor = '';
    };
  }, []);

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        style={{
          position: 'fixed',
          top: 0, left: 0,
          width: 8, height: 8,
          borderRadius: '50%',
          background: 'white',
          pointerEvents: 'none',
          zIndex: 99999,
          transition: 'background 0.2s',
          mixBlendMode: 'difference',
        }}
      />
      {/* Ring */}
      <div
        ref={ringRef}
        style={{
          position: 'fixed',
          top: 0, left: 0,
          width: 40, height: 40,
          borderRadius: '50%',
          border: '1.5px solid rgba(0,194,255,0.7)',
          pointerEvents: 'none',
          zIndex: 99998,
          transition: 'opacity 0.3s',
          boxShadow: '0 0 10px rgba(0,194,255,0.3)',
        }}
      />
    </>
  );
}
