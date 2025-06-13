import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

const Cta = () => {
  return (
    <section 
      className="py-12 sm:py-16 md:py-20 lg:py-24 bg-cover bg-center bg-no-repeat min-h-[400px] sm:min-h-[500px] flex items-center overflow-hidden" 
      style={{ 
        backgroundImage: "linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.5)), url('https://images.pexels.com/photos/7176325/pexels-photo-7176325.jpeg?auto=compress&cs=tinysrgb&w=1920')" 
      }}
    >
      <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-white mb-4 sm:mb-6 leading-tight"
          >
            Ready to Experience the Elegance Difference?
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-200 text-base sm:text-lg md:text-xl leading-relaxed mb-6 sm:mb-8 max-w-2xl mx-auto px-2"
          >
            Schedule your consultation today and take the first step toward enhancing your natural beauty and improving your quality of life. Our expert team is ready to create a personalized treatment plan just for you.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center max-w-lg mx-auto"
          >
            <Link 
              to="/contact" 
              className="btn-primary inline-flex items-center justify-center w-full sm:w-auto px-4 sm:px-6 md:px-8 py-3 text-sm sm:text-base md:text-lg font-medium rounded-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white whitespace-nowrap"
            >
              <Calendar className="mr-2 flex-shrink-0" size={20} />
              <span className="text-center">Book Your Consultation</span>
            </Link>
            
            {/* Optional: Add a secondary action button */}
            <Link 
              to="/services" 
              className="inline-flex items-center justify-center w-full sm:w-auto px-4 sm:px-6 md:px-8 py-3 text-sm sm:text-base md:text-lg font-medium text-white border-2 border-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white whitespace-nowrap"
            >
              Learn More
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Cta;