import React from 'react';
import { motion } from 'framer-motion';

const SectionTitle = ({ 
  title, 
  subtitle, 
  centered = false,
  light = false,
  className = ''
}) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center mx-auto' : ''} ${className}`}>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={`section-title ${centered ? 'after:left-1/2 after:-translate-x-1/2' : ''} ${light ? 'text-white' : ''}`}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`section-subtitle ${centered ? 'mx-auto text-center' : ''} ${light ? 'text-gray-200' : 'text-gray-600'}`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default SectionTitle;