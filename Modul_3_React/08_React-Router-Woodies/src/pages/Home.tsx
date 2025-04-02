import './Home.css';
import homeImage from '../assets/img/Home.png';
const Home = () => {
  return (
    <>
      <div className="home">
        <div className="home-content">
          <h1>
            Are you looking for <span>woodden furniture</span> for your place?
          </h1>
          <h2>This is the Right Place</h2>
          <button>Explore Categories</button>
        </div>
        <div className="sidebar-content">
          <img className="home-image" src={homeImage} alt="" />
        </div>
      </div>
    </>
  );
};

export default Home;
