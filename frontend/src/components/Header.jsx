import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchGraphQL } from '../utils/graphql';

export default function Header() {
  const [siteTitle, setSiteTitle] = useState('Stage Marketing');

  useEffect(() => {
    fetchGraphQL('{ generalSettings { title } }')
      .then(data => {
        if (data?.generalSettings?.title) {
          setSiteTitle(data.generalSettings.title);
        }
      })
      .catch(err => console.error('Error fetching site settings', err));
  }, []);

  return (
    <header className="site-header">
      <div className="header-container">
        <Link to="/" className="site-logo">
          <span className="logo-dot"></span>
          <span className="logo-text">{siteTitle}</span>
          <span className="badge">Headless</span>
        </Link>
        <nav className="site-navigation">
          <Link to="/" className="nav-link">Inicio</Link>
          <a 
            href="https://headless.stagemarketingdemo.com/wp-admin" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="nav-btn"
          >
            Admin Panel
          </a>
        </nav>
      </div>
    </header>
  );
}
