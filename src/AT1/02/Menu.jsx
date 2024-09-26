import React, { useState } from 'react';
import './Menu.css';
import { FaBars, FaTimes } from 'react-icons/fa'; // Biblioteca de ícones (FontAwesome)

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="menu-container">
      {/* Logo à esquerda */}
      <div className="menu-logo">
        <img src="https://via.placeholder.com/100x40?text=Logo" alt="Logo" />
      </div>

      {/* Ícone de interação à direita */}
      <div className="menu-icon" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Itens do menu centralizados */}
      <ul className={`menu-items ${isOpen ? 'menu-open' : ''}`}>
        <li>Home</li>
        <li>Produtos</li>
        <li>Serviços</li>
        <li>Sobre</li>
        <li>Contato</li>
      </ul>
    </nav>
  );
}