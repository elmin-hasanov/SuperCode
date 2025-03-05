
import "./Header.css"
const Header = () => {
    return (
        <div className="header">
            <div className="logo">
            <h1>THE DESIGN SHOP</h1>
            </div>
            <nav>
                <a href="#">Featured</a>
                <a href="#">Lifestyle</a>
                <a href="#">Books</a>
                <a href="#">Digital</a>
            </nav>
            <nav>
                <a href="#">Weekly Picks</a>
                <a href="#">The Design Blog</a>
            </nav>
        </div>
     );
}
 
export default Header;