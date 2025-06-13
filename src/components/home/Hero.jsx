import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat flex items-center overflow-hidden pt-16 sm:pt-20 md:pt-24" 
      style={{ 
        backgroundImage: "linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.4)), url('https://images.pexels.com/photos/3985329/pexels-photo-3985329.jpeg?auto=compress&cs=tinysrgb&w=1920')" 
      }}
    >
      <div className="container-custom w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto sm:mx-0">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-serif font-medium leading-tight break-words"
          >
            Beauty and Wellness <span className="text-primary">Redefined</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-gray-200 text-base sm:text-lg md:text-xl mt-4 sm:mt-6 mb-6 sm:mb-8 leading-relaxed"
          >
            Experience premium aesthetic, skin, hair, and gynecological treatments in a luxurious setting. Our expert team is committed to enhancing your natural beauty and wellbeing through advanced techniques and personalized care.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full"
          >
            <Link 
              to="/services" 
              className="btn-primary flex items-center justify-center whitespace-nowrap px-6 py-3 text-center"
            >
              <span>Explore Services</span>
              <ChevronRight size={18} className="ml-1 flex-shrink-0" />
            </Link>
            <Link 
              to="/contact" 
              className="btn-outline flex items-center justify-center whitespace-nowrap px-6 py-3 text-center"
            >
              Book Consultation
            </Link>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative scroll indicator - hidden on mobile */}
      <div className="absolute bottom-6 sm:bottom-10 left-0 right-0 justify-center hidden sm:flex">
        <motion.div 
          initial={{ y: 0 }}
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 sm:w-8 h-10 sm:h-14 border-2 border-white/50 rounded-full flex justify-center"
        >
          <motion.div 
            initial={{ y: 0, opacity: 0.5 }}
            animate={{ y: [0, 6, 0], opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-1 h-2 sm:h-3 bg-primary rounded-full mt-2"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;