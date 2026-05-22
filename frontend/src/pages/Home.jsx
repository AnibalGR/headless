import { useEffect, useState } from 'react';
import { fetchGraphQL } from '../utils/graphql';
import ParticleBackground from '../components/ParticleBackground';
import MacMockup from '../components/MacMockup';
import HoverRow from '../components/HoverRow';
import LogoMarquee from '../components/LogoMarquee';
import CustomerStories from '../components/CustomerStories';
import WhyFullcast from '../components/WhyFullcast';
import ProductCarousel from '../components/ProductCarousel';

const DEFAULT_HOME_DATA = {
  heroKicker1: 'Fullcast.ai',
  heroKicker2: 'for the AI-native era of revenue.',
  heroHeadline: 'Where <em>Intelligence</em>, <em>Strategy</em>, and <em>Execution</em> meet.',
  heroSubheadline: 'Most GTM tools were built 15 years ago as static databases. Fullcast.ai is the first Sales Performance Management platform built from the ground up with a neural core.',
  heroEyebrow: 'AI-NATIVE GTM PLATFORM',
  heroEmailPlaceholder: 'Enter your work email',
  heroCtaText: 'Get Early Access',
  heroMicrocopy: 'Join the waitlist for the AI-native GTM revolution.',
  
  trustedByText: 'TRUSTED BY THE REVOPS LEADERS OF TOMORROW',
  
  whyEyebrow: 'WHY FULLCAST.AI',
  whyTitle: 'Software is static. Revenue is dynamic.',
  whyDescription: 'Historically, GTM tools were built as static databases of accounts and opportunities. Fullcast.ai is the first Sales Performance Management platform built from the ground up with a neural core — making it a living, breathing, and self-optimizing intelligence.',
  whyLinkUrl: '#',

  productEyebrow: 'THE PRODUCT',
  productHeadline: 'Revenue intelligence you can see.',
  productSubhead: 'See the pipeline, the patterns, and the plays — unified. Fullcast.ai collapses five legacy dashboards into one neural workspace that learns every time you use it.',
  
  prod1Badge: 'REVENUE PLAYBOOK',
  prod1Title: 'Turn territory plans into pipeline.',
  prod1Desc: 'Align GTM teams, optimize coverage, and route every opportunity to the right rep — tracked from plan to performance.',
  prod1Color: 'linear-gradient(135deg, #3e5d50 0%, #678266 100%)',
  prod1Image: { node: { sourceUrl: '/wp-content/uploads/2026/05/gtm_dashboard_planning_1779274223517.png' } },
  
  prod2Badge: 'PIPELINE SIGNAL',
  prod2Title: 'Forecast with conviction.',
  prod2Desc: 'Every deal scored against 40M+ comparable outcomes — not a rep\'s gut.',
  prod2Color: 'linear-gradient(135deg, #3e5d50 0%, #678266 100%)',
  prod2Image: { node: { sourceUrl: '/wp-content/uploads/2026/05/gtm_dashboard_forecasting_1779273797172.png' } },
  
  prod3Badge: 'PATTERN DETECTION',
  prod3Title: 'Catch drift before it costs you.',
  prod3Desc: 'Fullcast.ai flags capacity gaps, stalled segments, and comp leakage in real time.',
  prod3Color: 'linear-gradient(135deg, #3e5d50 0%, #678266 100%)',
  prod3Image: { node: { sourceUrl: '/wp-content/uploads/2026/05/gtm_dashboard_suggestions_1779273781486.png' } },
  
  prod4Badge: 'TERRITORY INTELLIGENCE',
  prod4Title: 'Plan without spreadsheets.',
  prod4Desc: 'Rebalance quotas, coverage, and capacity in one canvas — models update live.',
  prod4Color: 'linear-gradient(135deg, #3e5d50 0%, #678266 100%)',
  prod4Image: { node: { sourceUrl: '/wp-content/uploads/2026/05/gtm_dashboard_territories_1779273812357.png' } },
  
  prod5Badge: 'REVENUE PLAYBOOK',
  prod5Title: 'Turn insight into action.',
  prod5Desc: 'Prescriptive plays routed to the right AE, CSM, or ops lead — tracked end to end.',
  prod5Color: 'linear-gradient(135deg, #3e5d50 0%, #678266 100%)',
  prod5Image: { node: { sourceUrl: '/wp-content/uploads/2026/05/gtm_dashboard_actions_1779274244687.png' } },
  
  advEyebrow: 'The AI-Native Advantage',
  advMainHeadline: 'In an AI-native ecosystem, your data doesn\'t sit there rotting in your CRM — it learns, predicts, and acts.',
  advMainSubheadline: 'Fullcast.ai eliminates the friction between planning the year and running the business.',
  adv1Title: 'Autonomous Territory & Quota Management',
  adv1Desc: 'Our AI analyzes market density and historical performance to suggest optimal territory maps and quotas that maximize attainment automatically.',
  adv2Title: 'Self-Correcting Capacity Planning',
  adv2Desc: 'As your team scales or churns, the platform recalculates your hiring roadmap in real-time to ensure you never fall behind your revenue ramp.',
  adv3Title: 'Predictive Forecasting',
  adv3Desc: 'Moving beyond basic math, our models weigh thousands of signals — from rep behavior to macro trends — to deliver the most accurate forecast in the industry.',
  adv4Title: 'Prescriptive Analytics',
  adv4Desc: 'Our AI surfaces alerts that tell you exactly which deals are at risk and which territories are underserved — before they cost you pipeline.',
  adv5Title: 'Dynamic Commissions',
  adv5Desc: 'Incentive compensation that adapts. Automated calculations pay reps instantly and accurately, with AI-driven what-if modeling for future plan designs.',
  advCtaText: 'Join the Waitlist',
  
  storiesEyebrow: 'CUSTOMER STORIES',
  storiesHeadline: 'How we help revenue teams scale.',
  
  story1Badge: 'GLOBAL GROWTH',
  story1Title: 'How Noah Marks aligned global growth with Fullcast.',
  story1Description: 'Brought clarity, structure, and alignment to a complex global motion — avoiding months of ramp time and eliminating manual territory, quota, and lead-routing recalculations.',
  story1AuthorName: 'Noah Marks',
  story1AuthorTitle: 'SVP, Commercial Strategy & Operations',
  story1Image: { node: { sourceUrl: '/wp-content/uploads/2026/05/noah_marks_1779271872204.jpg' } },
  story1Link: '#',
  
  story2Badge: 'REVOPS AUTOMATION',
  story2Title: 'How Clari reduced pipeline leakage by 40%.',
  story2Description: 'Automating lead-to-account matching and routing allowed us to cut response times down from 48 hours to under 5 minutes. The productivity gains have been phenomenal.',
  story2AuthorName: 'Sarah Jenkins',
  story2AuthorTitle: 'VP of Revenue Operations, Clari',
  story2Image: { node: { sourceUrl: '/wp-content/uploads/2026/05/sarah_jenkins_1779271889901.jpg' } },
  story2Link: '#',
  
  story3Badge: 'TERRITORY PLANNING',
  story3Title: 'How Databricks scaled territory planning in days.',
  story3Description: 'Before Fullcast, we spent months recalculating quotas and boundaries manually. Now we model, simulate, and push changes in a single weekend, saving hundreds of engineering hours.',
  story3AuthorName: 'Michael Chen',
  story3AuthorTitle: 'Director of GTM Strategy, Databricks',
  story3Image: { node: { sourceUrl: '/wp-content/uploads/2026/05/michael_chen_1779271906958.jpg' } },
  story3Link: '#',
  
  ctaEyebrow: 'READY TO JOIN?',
  ctaHeading: 'Join the Inner Circle',
  ctaDescription: 'We are currently onboarding a limited number of partners who are ready to move from manual workflows to autonomous growth.',
  ctaEmailPlaceholder: 'Enter your work email',
  ctaButtonText: 'Get Early Access',
  ctaFootnote: 'Join the waitlist for the AI-native GTM revolution.',
};

export default function Home() {
  const [homeData, setHomeData] = useState(DEFAULT_HOME_DATA);
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
              trustedByMarqueeSpeed
              trustedByLogoSize
              trustedByLogo1 {
                node {
                  sourceUrl
                  srcSet
                  sizes
                  altText
                }
              }
              trustedByLogo2 {
                node {
                  sourceUrl
                  srcSet
                  sizes
                  altText
                }
              }
              trustedByLogo3 {
                node {
                  sourceUrl
                  srcSet
                  sizes
                  altText
                }
              }
              trustedByLogo4 {
                node {
                  sourceUrl
                  srcSet
                  sizes
                  altText
                }
              }
              trustedByLogo5 {
                node {
                  sourceUrl
                  srcSet
                  sizes
                  altText
                }
              }
              trustedByLogo6 {
                node {
                  sourceUrl
                  srcSet
                  sizes
                  altText
                }
              }
              trustedByLogo7 {
                node {
                  sourceUrl
                  srcSet
                  sizes
                  altText
                }
              }
              trustedByLogo8 {
                node {
                  sourceUrl
                  srcSet
                  sizes
                  altText
                }
              }
              trustedByLogo9 {
                node {
                  sourceUrl
                  srcSet
                  sizes
                  altText
                }
              }
              trustedByLogo10 {
                node {
                  sourceUrl
                  srcSet
                  sizes
                  altText
                }
              }
              trustedByLogo11 {
                node {
                  sourceUrl
                  srcSet
                  sizes
                  altText
                }
              }
              trustedByLogo12 {
                node {
                  sourceUrl
                  srcSet
                  sizes
                  altText
                }
              }
              trustedByLogo13 {
                node {
                  sourceUrl
                  srcSet
                  sizes
                  altText
                }
              }
              trustedByLogo14 {
                node {
                  sourceUrl
                  srcSet
                  sizes
                  altText
                }
              }
              trustedByLogo15 {
                node {
                  sourceUrl
                  srcSet
                  sizes
                  altText
                }
              }
              trustedByLogo16 {
                node {
                  sourceUrl
                  srcSet
                  sizes
                  altText
                }
              }
              trustedByLogo17 {
                node {
                  sourceUrl
                  srcSet
                  sizes
                  altText
                }
              }
              trustedByLogo18 {
                node {
                  sourceUrl
                  srcSet
                  sizes
                  altText
                }
              }
              trustedByLogo19 {
                node {
                  sourceUrl
                  srcSet
                  sizes
                  altText
                }
              }
              trustedByLogo20 {
                node {
                  sourceUrl
                  srcSet
                  sizes
                  altText
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
                  srcSet
                  sizes
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
                  srcSet
                  sizes
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
                  srcSet
                  sizes
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
                  srcSet
                  sizes
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
                  srcSet
                  sizes
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
                  srcSet
                  sizes
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
                  srcSet
                  sizes
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
                  srcSet
                  sizes
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

  // No block loading screen. We render the page instantly using DEFAULT_HOME_DATA.

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
        speed={homeData.trustedByMarqueeSpeed}
        size={homeData.trustedByLogoSize} 
        logos={[
          homeData.trustedByLogo1?.node,
          homeData.trustedByLogo2?.node,
          homeData.trustedByLogo3?.node,
          homeData.trustedByLogo4?.node,
          homeData.trustedByLogo5?.node,
          homeData.trustedByLogo6?.node,
          homeData.trustedByLogo7?.node,
          homeData.trustedByLogo8?.node,
          homeData.trustedByLogo9?.node,
          homeData.trustedByLogo10?.node,
          homeData.trustedByLogo11?.node,
          homeData.trustedByLogo12?.node,
          homeData.trustedByLogo13?.node,
          homeData.trustedByLogo14?.node,
          homeData.trustedByLogo15?.node,
          homeData.trustedByLogo16?.node,
          homeData.trustedByLogo17?.node,
          homeData.trustedByLogo18?.node,
          homeData.trustedByLogo19?.node,
          homeData.trustedByLogo20?.node,
        ].filter(Boolean)} 
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
