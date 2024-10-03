import { useState } from 'react';
import styles from './App.module.css';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false); 

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); 
  };

  return (
    <div className={styles.gridContainer}>
      <header className={styles.header}>Header</header>
      
      <nav className={styles.globalMenu}>
        <button className={styles.menuButton} onClick={toggleMenu}>
          {menuOpen ? 'Fechar Menu' : 'Abrir Menu'}
        </button>
        <ul className={`${styles.menuOptions} ${menuOpen ? styles.open : ''}`}>
          <li>Opção 1</li>
          <li>Opção 2</li>
          <li>Opção 3</li>
          <li>Opção 4</li>
        </ul>
      </nav>

      <aside className={styles.contextMenu}>Context Menu</aside>
      <main className={styles.mainContent}>Main Content</main>
      <aside className={styles.ads}>Ads</aside>
      <footer className={styles.footer}>Footer</footer>
    </div>
  );
}