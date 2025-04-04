import { Link } from 'react-router-dom';
import { blogData } from '../blogData';

import './Blog.css';

export default function Blog() {
  return (
    <div className="blog">
      <div className="grid">
        {blogData.map((post) => (
          <div className="blog-card" key={post.id}>
            <img src={post.img_url} alt={post.title} />
            <div className="blog-card-text">
              <h3>{post.title}</h3>
              <p>{post.published_date}</p>
            </div>
            <Link to={`/blog/${post.id}`}>
              <button>Read more</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
