import "./Firstsection.css";
import img1 from "../../assets/img/brush.svg";
import img2 from "../../assets/img/globe-line.svg";
import img3 from "../../assets/img/megaphone.svg";
import img4 from "../../assets/img/object-select.svg";

const Firstsection = () => {
  return (
    <section>
      <div className="firstsection">
        <p>What is Lorem Ipsum?</p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting s
          simply dummy text of the printing and typesetting industry.
        </p>
      </div>

      <div className="secondsection">
        <div>
          <img src={img1} alt="" />
        </div>
        <div>
          <p>Web Design</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit
            perspiciatis, nam fuga exercitationem eligendi repellat quas
            blanditiis voluptas facilis voluptatem eum soluta aspernatur
            incidunt iusto pariatur odio distinctio! Unde, et?
          </p>
        </div>
        <div>
          <img src={img2} alt="" />
        </div>
        <div>
          <p>Web Design</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit
            perspiciatis, nam fuga exercitationem eligendi repellat quas
            blanditiis voluptas facilis voluptatem eum soluta aspernatur
            incidunt iusto pariatur odio distinctio! Unde, et?
          </p>
        </div>
        <div>
          <img src={img3} alt="" />
        </div>
        <div>
          <p>Web Design</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit
            perspiciatis, nam fuga exercitationem eligendi repellat quas
            blanditiis voluptas facilis voluptatem eum soluta aspernatur
            incidunt iusto pariatur odio distinctio! Unde, et?
          </p>
        </div>
        <div>
          <img src={img4} alt="" />
        </div>
        <div>
          <p>Web Design</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit
            perspiciatis, nam fuga exercitationem eligendi repellat quas
            blanditiis voluptas facilis voluptatem eum soluta aspernatur
            incidunt iusto pariatur odio distinctio! Unde, et?
          </p>
        </div>
      </div>
    </section>
  );
};

export default Firstsection;
