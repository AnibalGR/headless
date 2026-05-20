import './LogoMarquee.css';

export default function LogoMarquee({ eyebrowText, logos }) {
  // Use provided logos or fallback to empty placeholders to demonstrate layout
  const displayLogos = logos && logos.length > 0 ? logos : [
    { sourceUrl: '/logos/hubspot.svg', altText: 'HubSpot' },
    { sourceUrl: '/logos/gong.svg', altText: 'Gong' },
    { sourceUrl: '/logos/clari.svg', altText: 'Clari' },
    { sourceUrl: '/logos/databricks.svg', altText: 'Databricks' },
    { sourceUrl: '/logos/looker.svg', altText: 'Looker' }
  ];

  const defaultText = "TRUSTED BY THE REVOPS LEADERS OF TOMORROW";
  const text = eyebrowText || defaultText;

  return (
    <section className="logo-marquee-section">
      <div className="container-large">
        <div className="logo-marquee-eyebrow">
          <span className="fc-blue-dot"></span>
          {text}
        </div>
        
        <div className="marquee-wrapper">
          <div className="marquee-track">
            <div className="marquee-content">
              {displayLogos.map((logo, idx) => (
                <div key={`set1-${idx}`} className="marquee-logo">
                  <img src={logo.sourceUrl || logo.mediaItemUrl || logo} alt={logo.altText || `Logo ${idx}`} />
                </div>
              ))}
            </div>
            <div className="marquee-content" aria-hidden="true">
              {displayLogos.map((logo, idx) => (
                <div key={`set2-${idx}`} className="marquee-logo">
                  <img src={logo.sourceUrl || logo.mediaItemUrl || logo} alt={logo.altText || `Logo ${idx}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
