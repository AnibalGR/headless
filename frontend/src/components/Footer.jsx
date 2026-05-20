export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-container">
        <p>&copy; {currentYear} Stage Marketing. Todos los derechos reservados.</p>
        <p className="footer-meta">
          Construido con <span className="react-text">React</span> + <span className="vite-text">Vite</span> y <span className="wp-text">WordPress API</span>
        </p>
      </div>
    </footer>
  );
}
