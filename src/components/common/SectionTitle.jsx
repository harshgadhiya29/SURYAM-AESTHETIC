import React from 'react';
import { motion } from 'framer-motion';

const SectionTitle = ({ title, subtitle, centered = false }) => {
  return (
    <div className={`mb-8 sm:mb-10 lg:mb-12 ${centered ? 'text-center' : ''}`}>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-2xl sm:text-3xl lg:text-4xl font-serif font-medium text-white-300 mb-3 sm:mb-4 leading-tight"
      >
        {title}
      </motion.h2>
      
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-500 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default SectionTitle;