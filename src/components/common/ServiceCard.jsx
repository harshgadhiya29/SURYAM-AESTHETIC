import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const ServiceCard = ({ title, description, icon, link }) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="service-card group"
    >
      <div className="rounded-full bg-primary-50 w-16 h-16 flex items-center justify-center mb-5 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-serif font-medium mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <a 
        href={link} 
        className="inline-flex items-center text-primary font-medium hover:underline"
      >
        Learn More
        <ArrowRight size={16} className="ml-2" />
      </a>
    </motion.div>
  );
};

export default ServiceCard;