import { useRef, useEffect } from 'react';

function PongGame() {
	const canvasRef = useRef(null);

	//touche gestion
	const leftPlayerY = useRef(300);
	const rightPlayerY = useRef(300);
	const keysPressed = useRef({});

//-----------CLAVIER GESTION-------------------//
useEffect(() =>
{
	function handleKeyDown(e)
	{
      keysPressed.current[e.key] = true;
    }
    function handleKeyUp(e)
	{
      keysPressed.current[e.key] = false;
    }
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () =>
	{
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
}, []) // le [] signifie que il est build une fois au montage

//----------SIZE GESTION----------------------//
useEffect(() =>
{
	const canvas = canvasRef.current;

	function resizeCanvas()
	{
      canvas.width = window.innerWidth - 100;
      canvas.height = window.innerHeight;
    }

    resizeCanvas();

    window.addEventListener('resize', resizeCanvas); // mise à jour si la fenêtre change

    return () => window.removeEventListener('resize', resizeCanvas);

}, []);


//------------DRAW CANVA------------------------//
useEffect(() =>
{
	const canvas = canvasRef.current;
	const ctx = canvas.getContext('2d');
	

	let x = canvas.width / 2;
	let y = canvas.height / 2;
	let vx = 2;
	let vy = 2;
	
	const PlayerWidth = 10;
	const PlayerHeight = 100;
	const PlayerSpeed = 5;

	function draw()
	{
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


		
		//------------draw Player------------------//

		//gestion des touche
		if (keysPressed.current['w'] && leftPlayerY.current > 0)
			leftPlayerY.current -= PlayerSpeed;
      	if (keysPressed.current['s'] && leftPlayerY.current < canvas.height - PlayerHeight)
			leftPlayerY.current += PlayerSpeed;
      	if (keysPressed.current['ArrowUp'] && rightPlayerY.current > 0)
    		rightPlayerY.current -= PlayerSpeed;
      	if (keysPressed.current['ArrowDown'] && rightPlayerY.current < canvas.height - PlayerHeight)
     	   rightPlayerY.current += PlayerSpeed;

      // Dessiner Players
      ctx.fillStyle = 'blue';
      ctx.fillRect(30, leftPlayerY.current, PlayerWidth, PlayerHeight);

      ctx.fillStyle = 'red';
      ctx.fillRect(canvas.width - 30, rightPlayerY.current, PlayerWidth, PlayerHeight);


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

//--------------------GESTION DES BARRES PLAYER-------------------//

export default PongGame;

