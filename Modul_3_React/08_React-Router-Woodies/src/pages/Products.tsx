import { Link } from 'react-router-dom';

const Products = () => {
  return (
    <>
      <div>
        <h1>Products</h1>
        <nav>
          <ul>
            <li>
              <Link to="/Products/jenson">Jenson</Link>
            </li>
            <li>
              <Link to="/Products/deon">Deon</Link>
            </li>
            <li>
              <Link to="/Products/krisha">Krisha</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Products;
