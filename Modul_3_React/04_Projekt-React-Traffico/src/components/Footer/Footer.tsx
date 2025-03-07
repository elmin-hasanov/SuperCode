import "./Footer.css";
const Footer = () => {
  return (
    <div className="Footer">
      <img
        className="mobilefooter"
        src="../../public/img/trekmobilfooter.png"
        alt="mobel"
      />
      <div className="FooterText">
        <div>
          <p></p>
        </div>
        <div>
          <p>
            We provide traffic management consultants so you get started
            quickly, contact us for a quote today!
          </p>
        </div>
        <div>
          <button>GET STARTED ⟶</button>
        </div>
      </div>
      <nav className="footernav">
        <div className="footerlogo">
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
        </div>
      </nav>
      <div className="footerEnd">
        <div>
          <p>Copyright @ 2019</p>
        </div>
        <div className="social">
          <img src="../../public/img/f.png" alt="Facebook" />
          <img src="../../public/img/i.png" alt="Instagram" />
          <img src="../../public/img/t.png" alt="Twitter" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
