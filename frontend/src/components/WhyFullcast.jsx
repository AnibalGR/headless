import './WhyFullcast.css';

export default function WhyFullcast({ eyebrow, title, description, linkText, linkUrl }) {
  const defaultEyebrow = "WHY FULLCAST";
  const defaultTitle = "Most GTM tools were built 15 years ago as static databases that require manual entry, constant cleanup, and expensive customization.";
  const defaultDescription = "Fullcast.ai is different. We've built the first Sales Performance Management platform from the ground up with a neural core — one that turns your GTM plan from a static document into a living, breathing, and self-optimizing intelligence.";
  const defaultLinkText = "See the AI-Native Advantage";
  const defaultLinkUrl = "#";

  return (
    <section className="why-fullcast-section">
      <div className="padding-global">
        <div className="container-large">
          <div className="why-fullcast-container">
            <div className="why-fullcast-grid">
              
              {/* Left Card */}
              <div className="why-fullcast-card">
                <div className="why-eyebrow">
                  <span className="why-eyebrow-dot"></span>
                  {eyebrow || defaultEyebrow}
                </div>
                <h3 className="why-title">
                  {title || defaultTitle}
                </h3>
              </div>

              {/* Right Content */}
              <div className="why-fullcast-content">
                <p className="why-description">
                  {description || defaultDescription}
                </p>
                
                <a href={linkUrl || defaultLinkUrl} className="why-link">
                  {linkText || defaultLinkText} <span className="why-link-arrow">→</span>
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
