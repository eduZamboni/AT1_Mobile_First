import styles from './App.module.css';

export default function App() {
  return (
    <div className={styles.gridContainer}>
      <header className={styles.header}>Header</header>
      <nav className={styles.globalMenu}>Global Menu</nav>
      <aside className={styles.contextMenu}>Context Menu</aside>
      <main className={styles.mainContent}>Main Content</main>
      <aside className={styles.ads}>Ads</aside>
      <footer className={styles.footer}>Footer</footer>
    </div>
  );
}