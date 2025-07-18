import { useRef, useEffect } from 'react';

function PongGame() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    function resizeCanvas() {
      canvas.width = window.innerWidth - 100;
      canvas.height = window.innerHeight;
    }

    resizeCanvas();

    window.addEventListener('resize', resizeCanvas); // mise à jour si la fenêtre change

    return () => window.removeEventListener('resize', resizeCanvas);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    let x = canvas.width / 2;
    let y = canvas.height / 2;
    let vx = 2;
    let vy = 2;

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.beginPath();
      ctx.arc(x, y, 10, 0, Math.PI * 2);
      ctx.fillStyle = 'white';
      ctx.fill();
      ctx.closePath();

      x += vx;
      y += vy;

      if (x <= 10 || x >= canvas.width - 10) vx *= -1;
      if (y <= 10 || y >= canvas.height - 10) vy *= -1;

      requestAnimationFrame(draw);
    }

    draw();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        background: 'black',
        display: 'block',
	//	border: '2px solid blue',
		marginLeft: '48px',
		marginTop: '0px',
      }}
    />
  );
}

export default PongGame;

