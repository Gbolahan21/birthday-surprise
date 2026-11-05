import { useMemo } from 'react';

function Confetti() {
  const pieces = useMemo(() => {
    return Array.from({ length: 70 }, (_, index) => ({
      id: index,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 3}s`,
      duration: `${3 + Math.random() * 4}s`,
      rotation: `${Math.random() * 360}deg`,
      color: [
        '#ff8fab',
        '#c084fc',
        '#f9a8d4',
        '#fcd34d',
        '#a7f3d0',
        '#93c5fd',
      ][index % 6],
    }));
  }, []);

  return (
    <div className="confetti-container" aria-hidden="true">
      {pieces.map((piece) => (
        <span
          key={piece.id}
          className="confetti-piece"
          style={{
            left: piece.left,
            animationDelay: piece.delay,
            animationDuration: piece.duration,
            backgroundColor: piece.color,
            transform: `rotate(${piece.rotation})`,
          }}
        />
      ))}
    </div>
  );
}

export default Confetti;