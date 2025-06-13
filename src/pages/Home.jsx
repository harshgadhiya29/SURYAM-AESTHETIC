import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/home/Hero';
import About from '../components/home/About';
import Services from '../components/home/Services';
import Stats from '../components/home/Stats';
import Testimonials from '../components/home/Testimonials';
import Gallery from '../components/home/Gallery';
import Cta from '../components/home/Cta';
import Footer from '../components/layout/Footer';

const Home = () => {
  useEffect(() => {
    document.title = 'Elegance Aesthetics & Wellness Clinic - Premium Beauty Treatments';
    
    // Ensure proper scrolling behavior
    document.body.style.overflow = 'auto';
    document.documentElement.style.overflow = 'auto';
    
    // Cleanup function
    return () => {
      document.body.style.overflow = 'auto';
      document.documentElement.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="w-full min-h-screen">
      <Hero />
      <About />
      <Services />
      <Stats />
      <Testimonials />
      <Gallery />
      <Cta />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;