export default function Header() {
    return (
      <header className="header">
        <nav className="navigation">
          <input type="checkbox" id="menu-toggle" />
          <label htmlFor="menu-toggle" className="menu-icon">&#9776;</label>
          <div className="logo">VideoPlatform</div>
          <ul className="nav-links">
            <li><a href="#">Início</a></li>
            <li><a href="#">Explorar</a></li>
            <li><a href="#">Inscrições</a></li>
            <li><a href="#">Biblioteca</a></li>
          </ul>
        </nav>
      </header>
    );
  }