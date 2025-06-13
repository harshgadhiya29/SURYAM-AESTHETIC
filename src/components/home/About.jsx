import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Award, Users, Clock, Heart } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';

const About = () => {
  const features = [
    {
      icon: <Award size={24} />,
      title: "Expert Specialists",
      description: "Our highly qualified doctor brings years of specialized experience in aesthetic and gynecological care."
    },
    {
      icon: <Users size={24} />,
      title: "Personalized Care",
      description: "We believe in customized treatment plans tailored to your unique needs and aesthetic goals."
    },
    {
      icon: <Clock size={24} />,
      title: "Modern Techniques",
      description: "We utilize the latest, most advanced procedures and technologies in aesthetic medicine."
    },
    {
      icon: <Heart size={24} />,
      title: "Comfortable Environment",
      description: "Our clinic provides a luxurious, relaxing atmosphere that ensures your comfort throughout your visit."
    }
  ];

  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-secondary-off overflow-hidden">
      <div className="container-custom max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <div className="relative w-full">
              <img 
                src="https://images.pexels.com/photos/5407031/pexels-photo-5407031.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Elegance Clinic Interior" 
                className="rounded-lg shadow-medium w-full h-48 sm:h-60 lg:h-80 object-cover"
              />
              {/* Stats Badge - Positioned to avoid overflow */}
              <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 bg-white p-2 sm:p-3 lg:p-4 rounded-lg shadow-soft max-w-[120px] sm:max-w-none">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-serif font-medium text-primary">15+</div>
                  <div className="text-gray-600 text-xs sm:text-sm leading-tight">Years of Excellence</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <div className="text-center lg:text-left">
              <SectionTitle 
                title="Welcome to Elegance Aesthetics & Wellness Clinic" 
                subtitle="Where beauty meets medical expertise, offering transformative aesthetic, skin, hair, and gynecological treatments."
              />
            </div>

            <div className="space-y-3 sm:space-y-4">
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                At Elegance Clinic, we believe that everyone deserves to feel confident and comfortable in their own skin. Our state-of-the-art facility combines the latest advancements in aesthetic medicine with a warm, inviting atmosphere.
              </p>
              
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Founded by a leading specialist with extensive experience, our clinic offers a unique, integrated approach to beauty and wellness.
              </p>
            </div>

            {/* Features Grid - Compact and Contained */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-4 sm:mt-6">
              {features.map((feature, index) => (
                <motion.div 
                  key={index} 
                  className="flex p-2 sm:p-3 rounded-lg hover:bg-white/50 transition-colors duration-300"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <div className="flex-shrink-0 mr-2 sm:mr-3">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-primary-100 flex items-center justify-center text-primary">
                      <div className="scale-75 sm:scale-100">
                        {feature.icon}
                      </div>
                    </div>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-sm sm:text-base font-medium mb-1 text-gray-900 leading-tight">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm leading-snug line-clamp-2">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Button - Compact */}
            <div className="mt-4 sm:mt-6 text-center lg:text-left">
              <Link 
                to="/about" 
                className="btn-primary inline-block px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base font-medium rounded-lg transition-all duration-300 hover:shadow-lg"
              >
                Learn More About Us
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;