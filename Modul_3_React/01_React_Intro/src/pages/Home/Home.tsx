import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";

const Home = () => {
    return (
        // Wir benutzen nun className und nicht mehr class
        // <> </> Benutze ich wenn ich mehrer HTML sachen returnen will um die sachen zu gruppieren

        <div className="Hallo">
            <Header/>
            <Hero />
        </div>);
}

export default Home;