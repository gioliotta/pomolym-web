import logo from "../assets/logo.webp";
function Header() {
  return (
    <header className="header">
      <img
        src={logo}
        title="PomoLym Logo"
        alt="PomoLym Logo"
        aria-label="PomoLym Logo"
        width={50}
      />
      <p role="heading">
        <span style={{ fontWeight: "bold" }}>P</span>omo
        <span style={{ fontWeight: "bold" }}>L</span>ym
      </p>

      <p className="point">
        <span>🟢&nbsp;&nbsp;</span>
        Sigue en desarrollo
      </p>
    </header>
  );
}

export default Header;
