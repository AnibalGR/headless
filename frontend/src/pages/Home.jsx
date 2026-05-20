import { useEffect, useState } from 'react';
import { fetchGraphQL } from '../utils/graphql';
import ParticleBackground from '../components/ParticleBackground';
import MacMockup from '../components/MacMockup';
import HoverRow from '../components/HoverRow';
import LogoMarquee from '../components/LogoMarquee';
import CustomerStories from '../components/CustomerStories';
import WhyFullcast from '../components/WhyFullcast';
import ProductCarousel from '../components/ProductCarousel';

export default function Home() {
  const [homeData, setHomeData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const query = `
      query GetHomeAndPosts {
        nodeByUri(uri: "/") {
          ... on Page {
            id
            title
            homeFields {
              heroKicker1
              heroKicker2
              heroHeadline
              heroSubheadline
              trustedByText
              trustedByLogos {
                logoImage {
                  node {
                    sourceUrl
                    altText
                  }
                }
              }
              archHeadline
              archSubheadline
              advMainHeadline
              advMainSubheadline
              adv1Title
              adv1Desc
              adv2Title
              adv2Desc
              adv3Title
              adv3Desc
              adv4Title
              adv4Desc
              adv5Title
              adv5Desc
              storiesEyebrow
              storiesHeadline
              story1Badge
              story1Title
              story1Description
              story1AuthorName
              story1AuthorTitle
              story1Image {
                node {
                  sourceUrl
                  altText
                }
              }
              story1Link
              story2Badge
              story2Title
              story2Description
              story2AuthorName
              story2AuthorTitle
              story2Image {
                node {
                  sourceUrl
                  altText
                }
              }
              story2Link
              story3Badge
              story3Title
              story3Description
              story3AuthorName
              story3AuthorTitle
              story3Image {
                node {
                  sourceUrl
                  altText
                }
              }
              story3Link
              whyEyebrow
              whyTitle
              whyDescription
              whyLinkUrl
              productEyebrow
              productHeadline
              productSubhead
              prod1Badge
              prod1Title
              prod1Desc
              prod1Color
              prod1Image {
                node {
                  sourceUrl
                  altText
                }
              }
              prod2Badge
              prod2Title
              prod2Desc
              prod2Color
              prod2Image {
                node {
                  sourceUrl
                  altText
                }
              }
              prod3Badge
              prod3Title
              prod3Desc
              prod3Color
              prod3Image {
                node {
                  sourceUrl
                  altText
                }
              }
              prod4Badge
              prod4Title
              prod4Desc
              prod4Color
              prod4Image {
                node {
                  sourceUrl
                  altText
                }
              }
              prod5Badge
              prod5Title
              prod5Desc
              prod5Color
              prod5Image {
                node {
                  sourceUrl
                  altText
                }
              }
              heroEyebrow
              heroEmailPlaceholder
              heroCtaText
              heroMicrocopy
              archEyebrow
              advEyebrow
              advCtaText
              ctaEyebrow
              ctaHeading
              ctaDescription
              ctaEmailPlaceholder
              ctaButtonText
              ctaFootnote
            }
          }
        }
      }
    `;

    fetchGraphQL(query)
      .then(data => {
        setHomeData(data?.nodeByUri?.homeFields || null);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message || 'Error al cargar los datos');
        setLoading(false);
      });
  }, []);

  if (loading) return <div style={{ padding: '4rem', textAlign: 'center', color: '#fff' }}>Cargando contenido dinámico...</div>;
  if (error) return <div style={{ padding: '4rem', textAlign: 'center', color: '#ff4444' }}>{error}</div>;
  if (!homeData) return <div style={{ padding: '4rem', textAlign: 'center', color: '#fff' }}>No se encontraron los datos de la portada.</div>;

  const stories = [
    {
      badge: homeData.story1Badge,
      title: homeData.story1Title,
      description: homeData.story1Description,
      authorName: homeData.story1AuthorName,
      authorTitle: homeData.story1AuthorTitle,
      image: homeData.story1Image,
      link: homeData.story1Link,
    },
    {
      badge: homeData.story2Badge,
      title: homeData.story2Title,
      description: homeData.story2Description,
      authorName: homeData.story2AuthorName,
      authorTitle: homeData.story2AuthorTitle,
      image: homeData.story2Image,
      link: homeData.story2Link,
    },
    {
      badge: homeData.story3Badge,
      title: homeData.story3Title,
      description: homeData.story3Description,
      authorName: homeData.story3AuthorName,
      authorTitle: homeData.story3AuthorTitle,
      image: homeData.story3Image,
      link: homeData.story3Link,
    },
  ].filter(story => story.title);

  const products = !homeData ? [] : [
    {
      badge: homeData.prod1Badge,
      title: homeData.prod1Title,
      description: homeData.prod1Desc,
      color: homeData.prod1Color,
      image: homeData.prod1Image,
    },
    {
      badge: homeData.prod2Badge,
      title: homeData.prod2Title,
      description: homeData.prod2Desc,
      color: homeData.prod2Color,
      image: homeData.prod2Image,
    },
    {
      badge: homeData.prod3Badge,
      title: homeData.prod3Title,
      description: homeData.prod3Desc,
      color: homeData.prod3Color,
      image: homeData.prod3Image,
    },
    {
      badge: homeData.prod4Badge,
      title: homeData.prod4Title,
      description: homeData.prod4Desc,
      color: homeData.prod4Color,
      image: homeData.prod4Image,
    },
    {
      badge: homeData.prod5Badge,
      title: homeData.prod5Title,
      description: homeData.prod5Desc,
      color: homeData.prod5Color,
      image: homeData.prod5Image,
    },
  ].filter(prod => prod.title);

  return (
    <div className="home-page animate-fade-in">
      
      {/* 1. Hero Section */}
      <section className="hero-section section-dark">
        <ParticleBackground />
        
        <div className="padding-global">
          <div className="container-large hero-inner">
            <div className="hero-grid">
              
              {/* Column 1: Kicker */}
              <div className="hero-kicker">
                <div className="hero-kicker-line">{homeData.heroKicker1}</div>
                <div className="hero-kicker-line italic-serif">{homeData.heroKicker2}</div>
              </div>
              
              {/* Column 2: Mac Mockup */}
              <div className="hero-visual">
                <MacMockup />
              </div>

              {/* Column 3: Main Copy */}
              <div className="hero-main-content">
                <div className="eyebrow-wrap">
                  <div className="eyebrow-dot"></div>
                  <div>{homeData.heroEyebrow || 'AI-NATIVE GTM PLATFORM'}</div>
                </div>
                <h1 className="heading-hero" dangerouslySetInnerHTML={{ __html: homeData.heroHeadline }}></h1>
                <p className="paragraph-large">
                  {homeData.heroSubheadline}
                </p>
                <div className="hero-email-form">
                  <input type="email" placeholder={homeData.heroEmailPlaceholder || 'Enter your work email'} className="hero-email-input" />
                  <button className="btn-primary">{homeData.heroCtaText || 'Get Early Access'}</button>
                </div>
                <p className="email-microcopy">
                  {homeData.heroMicrocopy}
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 1.5 Trusted By Logos (Marquee) */}
      <LogoMarquee 
        eyebrowText={homeData.trustedByText} 
        logos={homeData.trustedByLogos?.map(item => item.logoImage?.node).filter(Boolean) || []} 
      />

      {/* Customer Stories Carousel */}
      <CustomerStories 
        eyebrowText={homeData.storiesEyebrow}
        headlineText={homeData.storiesHeadline}
        stories={stories}
      />

      {/* Why Fullcast (Static Content) */}
      <WhyFullcast 
        eyebrow={homeData.whyEyebrow}
        title={homeData.whyTitle}
        description={homeData.whyDescription}
        linkText={homeData.whyLinkText}
        linkUrl={homeData.whyLinkUrl}
      />

      {/* Product Carousel */}
      <ProductCarousel 
        eyebrowText={homeData.productEyebrow}
        headlineText={homeData.productHeadline}
        subheadText={homeData.productSubhead}
        products={products}
      />


      {/* 3. The AI-Native Advantage Section */}
      <section className="section-light section-spacer-160" style={{ background: '#ffffff', color: '#1a1a17' }}>
        <div className="padding-global">
          <div className="container-large">
            
            <div className="advantage-header">
              <div className="eyebrow-wrap">
                <div className="eyebrow-dot"></div>
                <div>{homeData.advEyebrow || 'The AI-Native Advantage'}</div>
              </div>
              <h2 className="heading-72" style={{ maxWidth: '28ch' }}>
                {homeData.advMainHeadline}
              </h2>
              <p className="paragraph-2">
                {homeData.advMainSubheadline}
              </p>
            </div>

            <div className="advantage-rows-container">
              <HoverRow 
                number="(01)"
                title={homeData.adv1Title}
                description={homeData.adv1Desc}
                ctaText={homeData.advCtaText}
              />
              <HoverRow 
                number="(02)"
                title={homeData.adv2Title}
                description={homeData.adv2Desc}
                ctaText={homeData.advCtaText}
              />
              <HoverRow 
                number="(03)"
                title={homeData.adv3Title}
                description={homeData.adv3Desc}
                ctaText={homeData.advCtaText}
              />
              <HoverRow 
                number="(04)"
                title={homeData.adv4Title}
                description={homeData.adv4Desc}
                ctaText={homeData.advCtaText}
              />
              <HoverRow 
                number="(05)"
                title={homeData.adv5Title}
                description={homeData.adv5Desc}
                ctaText={homeData.advCtaText}
              />
            </div>

          </div>
        </div>
      </section>

      {/* 4. Architecture Shift (Centered at Bottom) */}
      <section className="architecture-shift-section">
        <div className="padding-global">
          <div className="container-large architecture-shift-inner">
            <div className="eyebrow-wrap centering">
              <div className="eyebrow-dot"></div>
              <div className="eyebrow-text">{homeData.archEyebrow || 'THE ARCHITECTURE SHIFT'}</div>
            </div>
            <h2 className="arch-heading" dangerouslySetInnerHTML={{ __html: homeData.archHeadline }}></h2>
            <p className="arch-subheadline">
              {homeData.archSubheadline}
            </p>
          </div>
        </div>
      </section>

      {/* 5. Join the Inner Circle CTA Banner */}
      <section className="cta-banner-section">
        <div className="padding-global">
          <div className="container-large cta-banner-inner">
            <div className="eyebrow-wrap centering">
              <div className="eyebrow-dot"></div>
              <div className="eyebrow-text">{homeData.ctaEyebrow || 'READY TO JOIN?'}</div>
            </div>
            
            <h2 className="cta-banner-heading">{homeData.ctaHeading || 'Join the Inner Circle'}</h2>
            <p className="cta-banner-description">
              {homeData.ctaDescription}
            </p>
            
            <form className="cta-form" onSubmit={(e) => { e.preventDefault(); alert('Thank you for joining the waitlist!'); }}>
              <div className="cta-input-wrapper">
                <input 
                  type="email" 
                  placeholder={homeData.ctaEmailPlaceholder || 'Enter your work email'} 
                  className="cta-input"
                  required
                />
                <span className="cta-input-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2"/>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                  </svg>
                </span>
              </div>
              <button type="submit" className="cta-submit-btn">
                {homeData.ctaButtonText || 'Get Early Access'}
              </button>
            </form>
            
            <p className="cta-footnote">
              {homeData.ctaFootnote}
            </p>
          </div>
        </div>
      </section>

      
    </div>
  );
}
