import './HoverRow.css';

export default function HoverRow({ number, title, description, link = "#" }) {
  return (
    <section className="cta-row">
      <a href={link} className="hover-row">
        <div className="hover-row__number">{number}</div>
        <h3 className="hover-row__title">{title}</h3>
        <p className="hover-row__copy">{description}</p>
        <div className="hover-row__cta">
          <span>Join the Waitlist</span>
          <div className="hover-row__arrow">→</div>
        </div>
      </a>
    </section>
  );
}
