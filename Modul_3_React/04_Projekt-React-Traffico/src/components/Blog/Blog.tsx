import "./Blog.css";

type Probs = {
  id?: number;
  title: string;
  author: string;
  date: string;
  content: string;
  imageUrl: string;
};
const Blog = (probs: Probs) => {
  return (
    <div className="Blog">
      <img src={probs.imageUrl} alt="" />
      <p>{probs.title}</p>
      <p>{probs.content}</p>
      <p>{probs.id}</p>
      <p>{probs.date}</p>
      <p>{probs.author}</p>
    </div>
  );
};

export default Blog;
