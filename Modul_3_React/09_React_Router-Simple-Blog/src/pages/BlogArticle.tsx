import { useParams } from 'react-router-dom';
import { blogData } from '../blogData';
import { Link } from 'react-router-dom';

import './BlogArticle.css';

export default function Blog() {
  const { id } = useParams();
  const article = blogData.find((post) => post.id === Number(id));

  if (!article) return <h2>Article not found</h2>;

  return (
    <div className="blog-article">
      <div className="blog-article-img">
        <img src={article.img_url} alt={article.title} />
      </div>
      <div className="blog-article-text">
        <div className="blog-article-title">
          <div>
            <h2>{article.title}</h2>
          </div>
          <div>
            <p>{article.published_date}</p>
          </div>
        </div>
        <div className="blog-article-description">
          <p>{article.description}</p>
          <p>By {article.author}</p>
        </div>
        <Link to={`/blog`}>Back to blog</Link>
      </div>
    </div>
  );
}
