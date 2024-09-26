import React, { useState } from 'react';
import './Menu.css';

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="menu-container">
      <div className="menu-header">
        <button className="menu-icon" onClick={toggleMenu}>
          &#9776;
        </button>
        <span className="brand">Brand</span>
        <span className="logo">👤</span>
      </div>

      <ul className={`menu-options ${isOpen ? 'open' : ''}`}>
        <li>Opção 1</li>
        <li>Opção 2</li>
        <li>Opção 3</li>
        <li>Opção 4</li>
      </ul>
    </nav>
  );
}