export default function Header() {
    return (
      <header className="header">
        <nav className="menu">
          <input type="checkbox" id="menu-toggle" />
          <label htmlFor="menu-toggle" className="menu-icon">&#9776;</label>
          <div className="logo">Minha Loja</div>
          <ul className="menu-list">
            <li><a href="#">Home</a></li>
            <li><a href="#">Produtos</a></li>
            <li><a href="#">Carrinho</a></li>
            <li><a href="#">Contato</a></li>
          </ul>
        </nav>
      </header>
    );
  }