import React, { useState, useEffect } from 'react';
import './Menu.css';

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); 
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className="menu-container">
      <div className="menu-header">
        {isMobile && (
          <button className="menu-icon" onClick={toggleMenu}>
            &#9776;
          </button>
        )}
        <span className="brand">Brand</span>
        <span className="logo">👤</span>
      </div>

      <ul className={`menu-options ${isOpen || !isMobile ? 'open' : ''}`}>
        <li>Opção 1</li>
        <li>Opção 2</li>
        <li>Opção 3</li>
        <li>Opção 4</li>
      </ul>
    </nav>
  );
}