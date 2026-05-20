import { useState, useEffect } from 'react';
import './CustomerStories.css';

export default function CustomerStories({ eyebrowText, headlineText, stories }) {
  const defaultEyebrow = "CUSTOMER STORIES";
  const defaultHeadline = "How we help revenue teams scale.";

  // Fallback stories in case WordPress hasn't populated them yet
  const fallbackStories = [
    {
      badge: "GLOBAL GROWTH",
      title: "How Noah Marks aligned global growth with Fullcast.",
      description: "Brought clarity, structure, and alignment to a complex global motion — avoiding months of ramp time and eliminating manual territory, quota, and lead-routing recalculations.",
      authorName: "Noah Marks",
      authorTitle: "SVP, Commercial Strategy & Operations",
      image: {
        node: {
          sourceUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800",
          altText: "Noah Marks"
        }
      },
      link: "#"
    },
    {
      badge: "REVOPS AUTOMATION",
      title: "How Clari reduced pipeline leakage by 40%.",
      description: "Automating lead-to-account matching and routing allowed us to cut response times down from 48 hours to under 5 minutes. The productivity gains have been phenomenal.",
      authorName: "Sarah Jenkins",
      authorTitle: "VP of Revenue Operations, Clari",
      image: {
        node: {
          sourceUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
          altText: "Sarah Jenkins"
        }
      },
      link: "#"
    },
    {
      badge: "TERRITORY PLANNING",
      title: "How Databricks scaled territory planning in days.",
      description: "Before Fullcast, we spent months recalculating quotas and boundaries manually. Now we model, simulate, and push changes in a single weekend, saving hundreds of engineering hours.",
      authorName: "Michael Chen",
      authorTitle: "Director of GTM Strategy, Databricks",
      image: {
        node: {
          sourceUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800",
          altText: "Michael Chen"
        }
      },
      link: "#"
    }
  ];

  const activeStories = stories && stories.length > 0 ? stories : fallbackStories;
  const eyebrow = eyebrowText || defaultEyebrow;
  const headline = headlineText || defaultHeadline;

  // For loop transitions
  const hasMultiple = activeStories.length > 1;
  const slides = hasMultiple
    ? [activeStories[activeStories.length - 1], ...activeStories, activeStories[0]]
    : activeStories;

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
    // Only handle if the transition was on the transform property of the track itself
    if (e.propertyName !== 'transform' || e.target !== e.currentTarget) return;
    
    setIsAnimating(false);
    
    if (!hasMultiple) return;
    
    if (currentIndex === 0) {
      setIsTransitioning(false);
      setCurrentIndex(activeStories.length);
    } else if (currentIndex === activeStories.length + 1) {
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

  if (activeStories.length === 0) return null;

  const activeIndex = hasMultiple 
    ? (currentIndex - 1 + activeStories.length) % activeStories.length 
    : 0;

  return (
    <section className="customer-stories-section">
      <div className="padding-global">
        <div className="container-large">
          <div className="stories-max-container">
            
            {/* Header containing title & arrows */}
            <div className="stories-header-wrap">
              <div className="stories-header-left">
                <div className="eyebrow-wrap">
                  <div className="eyebrow-dot"></div>
                  <div>{eyebrow}</div>
                </div>
                <h2 className="stories-heading" dangerouslySetInnerHTML={{ __html: headline }}></h2>
              </div>
              
              <div className="stories-nav-controls">
                <button 
                  className="stories-nav-btn" 
                  onClick={prevSlide}
                  aria-label="Previous story"
                >
                  ‹
                </button>
                <button 
                  className="stories-nav-btn" 
                  onClick={nextSlide}
                  aria-label="Next story"
                >
                  ›
                </button>
              </div>
            </div>

            {/* Carousel Body */}
            <div className="stories-carousel-outer">
              <div className="stories-carousel-container">
                <div 
                  className="stories-carousel-track"
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
                  {slides.map((story, index) => {
                    const imageUrl = story.image?.node?.sourceUrl || story.image?.sourceUrl || '';
                    const altText = story.image?.node?.altText || story.image?.altText || story.authorName;
                    const realIndex = hasMultiple
                      ? (index - 1 + activeStories.length) % activeStories.length
                      : 0;
                    const isActive = realIndex === activeIndex;

                    return (
                      <div 
                        key={`${realIndex}-${index}`} 
                        className={`story-card-wrap ${isActive ? 'active' : 'inactive'}`}
                        style={{
                          flex: '0 0 100%',
                          width: '100%',
                        }}
                      >
                        <div className="story-card">
                          
                          {/* Media Half */}
                          <div className="story-card-media">
                            {imageUrl && (
                              <img 
                                className="story-card-img" 
                                src={imageUrl} 
                                alt={altText} 
                              />
                            )}
                            <div className="story-media-overlay"></div>
                            
                            {story.badge && (
                              <div className="story-card-badge-pill">
                                {story.badge}
                              </div>
                            )}

                            <div className="story-play-btn">
                              <div className="story-play-icon"></div>
                            </div>

                            <div className="story-author-meta">
                              <div className="story-author-name">
                                — {story.authorName}
                              </div>
                              {story.authorTitle && (
                                <div className="story-author-role">
                                  {story.authorTitle}
                                </div>
                              )}
                            </div>
                          </div>

                          {/* Content Half */}
                          <div className="story-card-content">
                            {story.badge && (
                              <div className="story-tag">
                                <span className="story-tag-dot"></span>
                                {story.badge}
                              </div>
                            )}

                            <h3 className="story-title">
                              {story.title}
                            </h3>

                            <div className="story-quote-wrap">
                              <p className="story-description">
                                {story.description}
                              </p>
                            </div>

                            <a 
                              href={story.link || '#'} 
                              className="story-link"
                            >
                              Read case study 
                              <span className="story-link-arrow">→</span>
                            </a>
                          </div>

                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Dash/Bar Indicators */}
            <div className="stories-indicators">
              {activeStories.map((_, index) => (
                <div
                  key={index}
                  className={`stories-indicator-bar ${index === activeIndex ? 'active' : ''}`}
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
