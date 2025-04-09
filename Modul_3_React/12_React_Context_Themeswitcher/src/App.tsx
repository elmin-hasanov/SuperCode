import { ThemeProvider } from './context/ThemeContext'; // Unser Context-Provider
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import Navbar from './components/Navbar';
import About from './page/About';
const App = () => {
  return (
    // Wir hüllen die gesamte App in den ThemeProvider ein
    // So haben alle Komponenten Zugriff auf den Theme-Kontext

    <ThemeProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
