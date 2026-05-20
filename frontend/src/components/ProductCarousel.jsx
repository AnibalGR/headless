import { useEffect, useState } from 'react';
import './ProductCarousel.css';

export default function ProductCarousel({ eyebrowText, headlineText, subheadText, products }) {
  const defaultEyebrow = "THE PRODUCT";
  const defaultHeadline = "Revenue intelligence you can see.";
  const defaultSubhead = "See the pipeline, the patterns, and the plays — unified. Fullcast.ai collapses five legacy dashboards into one neural workspace that learns every time you use it.";

  const fallbackProducts = [
    {
      badge: "PATTERN DETECTION",
      title: "Catch drift before it costs you.",
      description: "Fullcast.ai flags capacity gaps, stalled segments, and comp leakage in real time.",
      color: "linear-gradient(135deg, #3e5d50 0%, #678266 100%)",
      image: { node: { sourceUrl: "" } }
    }
  ];

  const activeProducts = products && products.length > 0 ? products : fallbackProducts;
  const eyebrow = eyebrowText || defaultEyebrow;
  const headline = headlineText || defaultHeadline;
  const subhead = subheadText || defaultSubhead;

  const hasMultiple = activeProducts.length > 1;
  const slides = hasMultiple
    ? [activeProducts[activeProducts.length - 1], ...activeProducts, activeProducts[0]]
    : activeProducts;

  const [currentIndex, setCurrentIndex] = useState(hasMultiple ? 1 : 0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = () => {
    if (!hasMultiple || isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    if (!hasMultiple || isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => prev - 1);
  };

  const handleIndicatorClick = (index) => {
    if (!hasMultiple || isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(index + 1);
  };

  const handleTransitionEnd = (e) => {
    if (e.propertyName !== 'transform' || e.target !== e.currentTarget) return;
    
    setIsAnimating(false);
    
    if (!hasMultiple) return;
    
    if (currentIndex === 0) {
      setIsTransitioning(false);
      setCurrentIndex(activeProducts.length);
    } else if (currentIndex === activeProducts.length + 1) {
      setIsTransitioning(false);
      setCurrentIndex(1);
    }
  };

  useEffect(() => {
    if (isTransitioning) return;
    const timeout = setTimeout(() => {
      setIsTransitioning(true);
    }, 50);
    return () => clearTimeout(timeout);
  }, [isTransitioning]);

  useEffect(() => {
    if (!hasMultiple) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(timer);
  }, [currentIndex, hasMultiple, isAnimating]);

  if (activeProducts.length === 0) return null;

  const activeIndex = hasMultiple 
    ? (currentIndex - 1 + activeProducts.length) % activeProducts.length 
    : 0;

  return (
    <section className="product-carousel-section">
      <div className="padding-global">
        <div className="container-large">
          <div className="products-max-container">
            
            {/* Header section */}
            <div className="products-header-wrap">
              <div className="products-header-left">
                <div className="product-eyebrow">
                  <span className="product-eyebrow-dot"></span>
                  {eyebrow}
                </div>
                <h2 className="products-heading" dangerouslySetInnerHTML={{ __html: headline }}></h2>
                {subhead && (
                  <p className="products-subhead">
                    {subhead}
                  </p>
                )}
              </div>
              
              <div className="products-nav-controls">
                <button 
                  className="products-nav-btn" 
                  onClick={prevSlide}
                  aria-label="Previous product"
                >
                  ‹
                </button>
                <button 
                  className="products-nav-btn" 
                  onClick={nextSlide}
                  aria-label="Next product"
                >
                  ›
                </button>
              </div>
            </div>

            {/* Carousel track */}
            <div className="products-carousel-outer">
              <div className="products-carousel-container">
                <div 
                  className="products-carousel-track"
                  onTransitionEnd={handleTransitionEnd}
                  style={{
                    transform: hasMultiple 
                      ? `translateX(calc(-${currentIndex} * (100% + 32px)))` 
                      : 'none',
                    transition: isTransitioning 
                      ? 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)' 
                      : 'none',
                  }}
                >
                  {slides.map((product, index) => {
                    const imageUrl = product.image?.node?.sourceUrl || product.image?.sourceUrl || '';
                    const altText = product.image?.node?.altText || product.image?.altText || product.title;
                    const realIndex = hasMultiple
                      ? (index - 1 + activeProducts.length) % activeProducts.length
                      : 0;
                    const isActive = realIndex === activeIndex;

                    return (
                      <div 
                        key={`${realIndex}-${index}`} 
                        className={`product-card-wrap ${isActive ? 'active' : 'inactive'}`}
                        style={{
                          flex: '0 0 100%',
                          width: '100%',
                        }}
                      >
                        <div className="product-card">
                          
                          {/* Left Half: UI Mockup Screenshot */}
                          <div className="product-card-screenshot">
                            {imageUrl ? (
                              <img 
                                className="product-screenshot-img" 
                                src={imageUrl} 
                                alt={altText} 
                              />
                            ) : (
                              <div className="product-screenshot-placeholder">
                                No Mockup Loaded
                              </div>
                            )}
                          </div>

                          {/* Right Half: Text & Gradient Background */}
                          <div 
                            className="product-card-details"
                            style={{ background: product.color || 'linear-gradient(135deg, #1b2d4a 0%, #304e75 100%)' }}
                          >
                            {product.badge && (
                              <div className="product-card-badge">
                                <span className="product-badge-dot"></span>
                                {product.badge}
                              </div>
                            )}

                            <h3 className="product-card-title">
                              {product.title}
                            </h3>

                            <p className="product-card-desc">
                              {product.description}
                            </p>
                          </div>

                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Dash Indicators */}
            <div className="products-indicators">
              {activeProducts.map((_, index) => (
                <div
                  key={index}
                  className={`products-indicator-bar ${index === activeIndex ? 'active' : ''}`}
                  onClick={() => handleIndicatorClick(index)}
                />
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
