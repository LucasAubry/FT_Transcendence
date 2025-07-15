import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//les rourtes pour le site (donc /home /game/ login
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import GamePage from './pages/GamePage';

function App() {
  return (
    <BrowserRouter>
      <nav className="bg-gray-800 p-4 flex space-x-4">
        <Link to="/" className="text-white hover:underline">Accueil</Link>
        <Link to="/login" className="text-white hover:underline">Login</Link>
        <Link to="/game" className="text-white hover:underline">Jeu</Link>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/game" element={<GamePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

