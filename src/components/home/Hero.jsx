import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-cover bg-center flex items-center" style={{ 
      backgroundImage: "linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.4)), url('https://images.pexels.com/photos/3985329/pexels-photo-3985329.jpeg?auto=compress&cs=tinysrgb&w=1920')" 
    }}>
      <div className="container-custom">
        <div className="max-w-2xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl lg:text-6xl text-white font-serif font-medium leading-tight"
          >
            Beauty and Wellness <span className="text-primary">Redefined</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-gray-200 text-lg md:text-xl mt-6 mb-8"
          >
            Experience premium aesthetic, skin, hair, and gynecological treatments in a luxurious setting. Our expert team is committed to enhancing your natural beauty and wellbeing through advanced techniques and personalized care.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link to="/services" className="btn-primary flex items-center justify-center">
              Explore Services
              <ChevronRight size={18} className="ml-1" />
            </Link>
            <Link to="/contact" className="btn-outline flex items-center justify-center">
              Book Consultation
            </Link>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative element */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <motion.div 
          initial={{ y: 0 }}
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-8 h-14 border-2 border-white/50 rounded-full flex justify-center"
        >
          <motion.div 
            initial={{ y: 0, opacity: 0.5 }}
            animate={{ y: [0, 6, 0], opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-1 h-3 bg-primary rounded-full mt-2"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;