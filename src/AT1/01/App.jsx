import React, { useState } from 'react';
import './styles.css';
import Logo from './logo.png';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <nav className="menu">
        <div className="menu-logo">
          <img src={Logo} alt="Logo" className="logo" />
        </div>

        <ul className={`menu-items ${isOpen ? 'menu-open' : ''}`}>
          <li>Produtos</li>
          <li>Serviços</li>
          <li>Sobre Nós</li>
          <li>Contato</li>
        </ul>

        <button className="menu-toggle" onClick={toggleMenu}>
          &#9776;
        </button>
      </nav>
    </header>
  );
}