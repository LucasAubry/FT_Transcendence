import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [zoomed, setZoomed] = useState(false);
  const [disparait, setDisparait] = useState(false);
  const [scene2, setScene2] = useState(false);

  const handleClick = () => {
    setZoomed(true);

    setTimeout(() => {
		setDisparait(true);

		setTimeout(() => {
			setScene2(true);
		}, 3000);
    }, 3000);
  };

return (
  <>
    {/* SCENE 1 */}
    {!disparait && (
      <div className={`space-container ${zoomed ? 'zoom-out' : ''}`}>
        <div className="mon-texte">Pong</div>
        <button className="mon-bouton" onClick={handleClick}>
          Lancer le jeux :
        </button>
      </div>
    )}

    {/* BARRES BLANCHES */}
    {disparait && !scene2 && (
      <>
        <div className="barre-gauche"></div>
        <div className="barre-droite"></div>
      </>
    )}
  </>
);
}

export default App;

