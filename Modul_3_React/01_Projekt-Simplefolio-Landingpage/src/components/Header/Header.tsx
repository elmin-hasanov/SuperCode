import Darkswichmode from "../Darkswichmode/Darkswichmode";
import "./Header.css"

const Header = () => {
    return (
    <header>
        <p className="logo">Elmin Hasanov.</p>
        <nav>
            <a href="#">project</a>
            <a href="#">skills</a>
            <a href="#">contact</a>
            <Darkswichmode/>
        </nav>
    </header>
    );
}   
export default Header;