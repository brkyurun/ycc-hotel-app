function Header() {
  return (
    <header>
      <div className="container">
        <div className="logo">
          <h1>Otel</h1>
          <p>Rezervasyon Sistemi</p>
        </div>
        <button type="button" className="new-reservation">
          Yeni Rezervasyon Yap
        </button>
      </div>
    </header>
  );
}

export default Header;
