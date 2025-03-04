import Button from "../../components/Button/Button";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import Section from "../../components/Section/Section";
import Skills from "../../components/Skills/Skills";
import "./Home.css"


const Home = () => {
    return (
        <>
        <Header/>
        <Hero/>
        <h6>PROJECTS</h6>
        <div className="article">
            <Section/>
            <Section/>
            <Section/>
        </div>

        <h6>SKILLS</h6>

        <Skills/>

        <h6>CONTACT</h6>

        <Button/>

        <Footer/>
        </>
    );
}
 
export default Home;