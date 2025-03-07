import Blog from "../../components/Blog/Blog";

import "./BlogArtice.css";

type BlogArtice = {
  id: number;
  title: string;
  author: string;
  date: string;
  content: string;
  imageUrl: string;
};

const blogArticles: BlogArtice[] = [
  {
    id: 2,
    title: "The Future of Autonomous Vehicles",
    author: "David Lee",
    date: "2023-10-20",
    content:
      "Explore the potential impact of self-driving cars on transportation and urban planning.",
    imageUrl:
      "https://images.unsplash.com/photo-1562618817-253b06cf2b6e?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "Sustainable Transportation Solutions",
    author: "Emily Chen",
    date: "2023-10-15",
    content:
      "Learn about eco-friendly alternatives to traditional transportation methods and their benefits.",
    imageUrl:
      "https://images.unsplash.com/photo-1465447142348-e9952c393450?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    title: "How to Improve Road Safety",
    author: "Michael Brown",
    date: "2023-10-10",
    content:
      "Essential tips and strategies to reduce accidents and make roads safer for everyone.",
    imageUrl:
      "https://images.unsplash.com/photo-1530685932526-48ec92998eaa?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    title: "The Benefits of Electric Vehicles",
    author: "Sarah Jones",
    date: "2023-10-05",
    content:
      "Discover the advantages of switching to electric cars, including environmental and economic benefits.",
    imageUrl:
      "https://images.unsplash.com/photo-1596731498067-99aeb581d3d7?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    title: "Understanding Traffic Patterns",
    author: "Robert Wilson",
    date: "2023-09-30",
    content:
      "Learn how traffic patterns are analyzed and used to improve transportation systems.",
    imageUrl:
      "https://images.unsplash.com/photo-1575260603071-eab438fecff1?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 7,
    title: "The Impact of Ride-Sharing Services on Urban Traffic",
    author: "Jessica Davis",
    date: "2023-09-25",
    content:
      "Explore the effects of ride-sharing services on traffic congestion and public transportation.",
    imageUrl:
      "https://images.unsplash.com/photo-1528033978085-52f315289665?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 8,
    title: "Smart Traffic Management Systems",
    author: "Christopher Garcia",
    date: "2023-09-20",
    content:
      "Discover how technology is used to create intelligent traffic management systems that improve efficiency.",
    imageUrl:
      "https://images.unsplash.com/photo-1490855680410-49b201432be4?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 9,
    title: "The Role of Public Transportation in Reducing Congestion",
    author: "Ashley Rodriguez",
    date: "2023-09-15",
    content:
      "Learn how investing in public transportation can alleviate traffic congestion and improve urban mobility.",
    imageUrl:
      "https://images.unsplash.com/photo-1428591501234-1ffcb0d6871f?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 10,
    title: "Cycling Infrastructure and Its Impact on City Traffic",
    author: "Matthew Martinez",
    date: "2023-09-10",
    content:
      "Explore the benefits of creating dedicated cycling lanes and infrastructure for urban transportation.",
    imageUrl:
      "https://images.unsplash.com/photo-1519219444773-9453a2f1f87c?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const BlogArtice = () => {
  return (
    <div className="BlogArtice">
      {blogArticles.map((article, index) => (
        <Blog
          key={index}
          imageUrl={article.imageUrl}
          title={article.title}
          author={article.author}
          date={article.date}
          content={article.content}
        />
      ))}
    </div>
  );
};

export default BlogArtice;
