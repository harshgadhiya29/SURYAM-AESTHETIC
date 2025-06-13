import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const TestimonialCard = ({ name, role, text, rating, image }) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-white p-6 rounded-lg shadow-soft"
    >
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h4 className="font-medium">{name}</h4>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
      
      <div className="flex mb-3">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            size={16} 
            className={i < rating ? "text-primary fill-primary" : "text-gray-300"} 
          />
        ))}
      </div>
      
      <p className="text-gray-600 italic">{text}</p>
    </motion.div>
  );
};

export default TestimonialCard;