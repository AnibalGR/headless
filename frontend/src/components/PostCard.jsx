import { Link } from 'react-router-dom';

export default function PostCard({ post }) {
  const { title, excerpt, slug, date, featuredImage, author } = post;
  
  // Format the date
  const formattedDate = new Date(date).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  // Extract featured image URL or use placeholder
  const imageUrl = featuredImage?.node?.sourceUrl || 'https://images.unsplash.com/photo-1546074177-ffedd79d494d?w=800&auto=format&fit=crop&q=80';
  const imageAlt = featuredImage?.node?.altText || title;

  return (
    <article className="post-card">
      <div className="post-card-image-wrapper">
        <img src={imageUrl} alt={imageAlt} className="post-card-image" loading="lazy" />
      </div>
      <div className="post-card-content">
        <div className="post-card-meta">
          <time dateTime={date}>{formattedDate}</time>
          {author?.node?.name && (
            <>
              <span className="meta-separator">&bull;</span>
              <span className="post-card-author">Por {author.node.name}</span>
            </>
          )}
        </div>
        <h2 className="post-card-title">
          <Link to={`/post/${slug}`}>{title}</Link>
        </h2>
        {excerpt && (
          <div 
            className="post-card-excerpt"
            dangerouslySetInnerHTML={{ __html: excerpt }}
          />
        )}
        <div className="post-card-footer">
          <Link to={`/post/${slug}`} className="read-more-link">
            Leer más
            <svg className="read-more-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
}
