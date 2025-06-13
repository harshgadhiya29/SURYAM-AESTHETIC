import React from 'react';
import { motion } from 'framer-motion';

const PageBanner = ({ title, subtitle, bgImage }) => {
  return (
    <section 
      className="relative pt-40 pb-20 lg:pt-48 lg:pb-28 bg-cover bg-center bg-no-repeat"
      style={{ 
        backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.4)), url(${bgImage})` 
      }}
    >
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-white"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium mb-4">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-200">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default PageBanner;