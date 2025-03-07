import BlogArtice from "../../components/BlogArtice/BlogArtice";
import Footer from "../../components/Footer/Footer";
import Head from "../../components/Head/Head";
import Section1 from "../../components/Section1/Section1";
import "./Home.css";
const Home = () => {
  return (
    <div>
      <Head />
      <Section1 />
      <BlogArtice />
      <Footer />
    </div>
  );
};

export default Home;
