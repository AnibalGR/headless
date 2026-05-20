import { useEffect, useState } from 'react';
import { fetchGraphQL } from '../utils/graphql';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [siteTitle, setSiteTitle] = useState('Stage Marketing');

  useEffect(() => {
    fetchGraphQL('{ generalSettings { title } }')
      .then(data => {
        if (data?.generalSettings?.title) {
          setSiteTitle(data.generalSettings.title);
        }
      })
      .catch(err => console.error('Error fetching site settings for footer', err));
  }, []);

  return (
    <footer className="site-footer">
      <div className="footer-container">
        <p>&copy; {currentYear} {siteTitle}. Todos los derechos reservados.</p>
        <p className="footer-meta">
          Construido con <span className="react-text">React</span> + <span className="vite-text">Vite</span> y <span className="wp-text">WordPress API</span>
        </p>
      </div>
    </footer>
  );
}

