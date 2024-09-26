import React, { useState } from 'react';
import './styles.css';
import Logo from './logo.png';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="menu-container">
      <div className="menu-header">
        <img src={Logo} alt="Logo" className="logo" />
        
        <button className="menu-toggle" onClick={toggleMenu}>
          &#9776;
        </button>
      </div>

      <ul className={`menu-items ${isOpen ? 'menu-open' : ''}`}>
        <li>Perfil</li>
        <li>Postagens</li>
        <li>Amigos</li>
        <li>Fotos</li>
        <li>Vídeos</li>
        <li>Configurações</li>
        <li>Notificações</li>
        <li>Logout</li>
      </ul>
    </div>
  );
}