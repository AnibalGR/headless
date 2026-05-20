import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchGraphQL } from '../utils/graphql';

export default function Header() {
  const [siteTitle, setSiteTitle] = useState('Stage Marketing');
  const [navPrimaryText, setNavPrimaryText] = useState('Inicio');
  const [navCtaText, setNavCtaText] = useState('Admin Panel');

  useEffect(() => {
    const query = `
      query GetSiteSettings {
        generalSettings {
          title
        }
        nodeByUri(uri: "/") {
          ... on Page {
            homeFields {
              navPrimaryLinkText
              navCtaText
            }
          }
        }
      }
    `;

    fetchGraphQL(query)
      .then(data => {
        if (data?.generalSettings?.title) {
          setSiteTitle(data.generalSettings.title);
        }
        const fields = data?.nodeByUri?.homeFields;
        if (fields) {
          if (fields.navPrimaryLinkText) setNavPrimaryText(fields.navPrimaryLinkText);
          if (fields.navCtaText) setNavCtaText(fields.navCtaText);
        }
      })
      .catch(err => console.error('Error fetching header settings', err));
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
          <Link to="/" className="nav-link">{navPrimaryText}</Link>
          <a 
            href="https://headless.stagemarketingdemo.com/wp-admin" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="nav-btn"
          >
            {navCtaText}
          </a>
        </nav>
      </div>
    </header>
  );
}

