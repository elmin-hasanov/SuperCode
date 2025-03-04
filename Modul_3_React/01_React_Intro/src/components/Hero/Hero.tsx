import HeroButton from "../HeroButton/HeroButton";
import "./Hero.css"

const Hero = () => {
    return (
        <section className="hero">

            <div>
                <h1>Landschaft von Peru</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus est aut natus ea repudiandae perspiciatis labore asperiores pariatur maxime alias minima suscipit corporis dolorum, necessitatibus illum obcaecati expedita ducimus? Quae?</p>

                <HeroButton />
            </div>

            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqgqxJ3rGxKlCOJRygvhP9-q_y2bXBJv01Iw&s" alt="" />
        </section>
    );
}

export default Hero;