import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/home/Home';
import './App.css';

// Route Handler for Smooth Single-Page Navigation
function RouteScrollHandler() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }

    if (pathname === '/about-me') {
      const element = document.querySelector('#perfil');
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    } else if (pathname === '/projects') {
      const element = document.querySelector('#obras');
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    } else if (pathname === '/contact-me') {
      const element = document.querySelector('#contacto');
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    } else if (pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [pathname, hash]);

  return null;
}

function App() {
  return (
    <Router>
      <RouteScrollHandler />
      <div className="app-root">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-me" element={<Home />} />
            <Route path="/projects" element={<Home />} />
            <Route path="/contact-me" element={<Home />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
