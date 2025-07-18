import { useState } from 'react';
import './App.css';
import PongGame from './PongGame';

function App() {
  const [zoomed, setZoomed] = useState(false);
  const [disparait, setDisparait] = useState(false);
  const [scene2, setScene2] = useState(false);

  const handleClick = () => {
    setZoomed(true);

    setTimeout(() => {
      setDisparait(true);
      setScene2(true);
    }, 3000);
  };

  return (
    <>
      {/* SCÈNE 1 */}
      {!disparait && (
        <div className={`space-container ${zoomed ? 'zoom-out' : ''}`}>
          <div className="mon-texte">Pong</div>
          <button className="mon-bouton" onClick={handleClick}>
            Lancer le jeu :
          </button>
        </div>
      )}

      {/* SCÈNE 2 + BARRES + JEU */}
      {disparait && scene2 && (
        <>
          <PongGame />
          <div className="barre-gauche"></div>
          <div className="barre-droite"></div>
        </>
      )}
    </>
  );
}

export default App;


