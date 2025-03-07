import "./Head.css";
const Head = () => {
  return (
    <div className="Head">
      <nav className="nav">
        <div className="logo">
          <div>
            <img src="../../public/img/logo.png" alt="Logo" />
          </div>
          <div></div>
          <h2>TRAFICO.</h2>
        </div>
        <div className="navlinks">
          <a href="#">ABOUT</a>
          <a href="#">HOW TO</a>
          <a href="#">FAQS</a>
          <button>CONTACT US</button>
        </div>
      </nav>
      <div className="Hero">
        <h2>Your awesome</h2>
        <h2>traffic permit</h2>
        <h2>consultant.</h2>
        <button>GET STARTED ⟶</button>
      </div>
      <img className="mobel" src="../../public/img/mobel.png" alt="mobel" />
      <img className="Group" src="../../public/img/Group.png" alt="Group" />
    </div>
  );
};

export default Head;
