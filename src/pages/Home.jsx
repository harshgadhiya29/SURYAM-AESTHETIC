import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/home/Hero';
import About from '../components/home/About';
import Services from '../components/home/Services';
import Stats from '../components/home/Stats';
import Testimonials from '../components/home/Testimonials';
import Gallery from '../components/home/Gallery';
import Cta from '../components/home/Cta';

const Home = () => {
  useEffect(() => {
    document.title = 'Elegance Aesthetics & Wellness Clinic - Premium Beauty Treatments';
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <About />
      <Services />
      <Stats />
      <Testimonials />
      <Gallery />
      <Cta />
    </motion.div>
  );
};

export default Home;