import './LogoMarquee.css';

export default function LogoMarquee({ eyebrowText, logos, speed, size }) {
  const displayLogos = logos && logos.length > 0 ? logos : [];
  
  if (displayLogos.length === 0) {
    // Preserve space to avoid layout shift while loading
    return <section className="logo-marquee-section" style={{ minHeight: '150px' }}></section>;
  }

  const defaultText = "TRUSTED BY THE REVOPS LEADERS OF TOMORROW";
  const text = eyebrowText || defaultText;

  return (
    <section className="logo-marquee-section" style={{ '--marquee-speed': `${speed || 25}s`, '--logo-height': `${size || 80}px`, '--logo-width': `${(size || 80) * 2.75}px` }}>
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
                  <img 
                    src={logo.sourceUrl || logo.mediaItemUrl || logo} 
                    srcSet={logo.srcSet || undefined}
                    sizes={logo.sizes || undefined}
                    alt={logo.altText || `Logo ${idx}`} 
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              ))}
            </div>
            <div className="marquee-content" aria-hidden="true">
              {displayLogos.map((logo, idx) => (
                <div key={`set2-${idx}`} className="marquee-logo">
                  <img 
                    src={logo.sourceUrl || logo.mediaItemUrl || logo} 
                    srcSet={logo.srcSet || undefined}
                    sizes={logo.sizes || undefined}
                    alt={logo.altText || `Logo ${idx}`} 
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              ))}
            </div>
            <div className="marquee-content" aria-hidden="true">
              {displayLogos.map((logo, idx) => (
                <div key={`set3-${idx}`} className="marquee-logo">
                  <img 
                    src={logo.sourceUrl || logo.mediaItemUrl || logo} 
                    srcSet={logo.srcSet || undefined}
                    sizes={logo.sizes || undefined}
                    alt={logo.altText || `Logo ${idx}`} 
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              ))}
            </div>
            <div className="marquee-content" aria-hidden="true">
              {displayLogos.map((logo, idx) => (
                <div key={`set4-${idx}`} className="marquee-logo">
                  <img 
                    src={logo.sourceUrl || logo.mediaItemUrl || logo} 
                    srcSet={logo.srcSet || undefined}
                    sizes={logo.sizes || undefined}
                    alt={logo.altText || `Logo ${idx}`} 
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
