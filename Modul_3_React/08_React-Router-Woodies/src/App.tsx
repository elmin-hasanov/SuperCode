import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Jenson from './pages/Jenson';
import Deon from './pages/Deon';
import Krisha from './pages/Krisha';
import Footer from './components/Footer';
import Products from './pages/Products';

const Layout = () => {
  const location = useLocation(); // Holt die aktuelle URL
  const hideFooter = location.pathname === '/'; // Footer ausblenden, wenn auf Home-Seite

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/jenson" element={<Jenson />} />
        <Route path="/deon" element={<Deon />} />
        <Route path="/krisha" element={<Krisha />} />
      </Routes>
      {!hideFooter && <Footer />}{' '}
      {/* Footer nur rendern, wenn nicht auf Home */}
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Layout />
    </Router>
  );
};

export default App;
