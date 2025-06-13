import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Layout components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Loader from './components/common/Loader';
import ScrollToTop from './components/common/ScrollToTop';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Doctor from './pages/Doctor';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

function App() {
  const location = useLocation();
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/doctor" element={<Doctor />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </main>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;