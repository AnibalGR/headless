import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchGraphQL } from '../utils/graphql';

export default function PostDetail() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const query = `
      query GetPostBySlug($id: ID!) {
        post(id: $id, idType: SLUG) {
          title
          content
          date
          featuredImage {
            node {
              sourceUrl
              altText
            }
          }
          author {
            node {
              name
            }
          }
          seo {
            title
            metaDesc
          }
        }
      }
    `;

    setLoading(true);
    fetchGraphQL(query, { id: slug })
      .then(data => {
        if (!data?.post) {
          setError('Publicación no encontrada');
        } else {
          setPost(data.post);
          
          // Set dynamic SEO metadata
          const seoTitle = data.post.seo?.title || `${data.post.title} | Stage Marketing`;
          const seoDesc = data.post.seo?.metaDesc || '';
          
          document.title = seoTitle;
          
          let metaDescTag = document.querySelector('meta[name="description"]');
          if (seoDesc) {
            if (!metaDescTag) {
              metaDescTag = document.createElement('meta');
              metaDescTag.name = 'description';
              document.head.appendChild(metaDescTag);
            }
            metaDescTag.content = seoDesc;
          }
        }
        setLoading(false);
      })
      .catch(err => {
        setError(err.message || 'Error al cargar la publicación');
        setLoading(false);
      });

    // Cleanup SEO changes on unmount
    return () => {
      document.title = 'Stage Marketing - Headless';
    };
  }, [slug]);

  if (loading) {
    return (
      <div className="detail-container loading-wrapper animate-fade-in">
        <div className="spinner"></div>
        <p>Cargando contenido de la publicación...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="detail-container error-wrapper animate-fade-in">
        <svg className="error-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
        <p>{error}</p>
        <Link to="/" className="back-link">Volver al inicio</Link>
      </div>
    );
  }

  const { title, content, date, featuredImage, author } = post;
  
  const formattedDate = new Date(date).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const imageUrl = featuredImage?.node?.sourceUrl;
  const imageAlt = featuredImage?.node?.altText || title;

  return (
    <article className="post-detail-page animate-fade-in">
      <div className="detail-header-container">
        <Link to="/" className="back-button">
          <svg className="back-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
          Volver
        </Link>
        
        <div className="post-detail-meta">
          <time dateTime={date}>{formattedDate}</time>
          {author?.node?.name && (
            <>
              <span className="meta-separator">&bull;</span>
              <span>Por {author.node.name}</span>
            </>
          )}
        </div>

        <h1 className="post-detail-title">{title}</h1>
      </div>

      {imageUrl && (
        <div className="post-detail-image-wrapper">
          <img src={imageUrl} alt={imageAlt} className="post-detail-image" />
        </div>
      )}

      <div className="post-detail-content-container">
        <div 
          className="post-detail-content"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </article>
  );
}
