import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, Award, Users, Star, BarChart } from 'lucide-react';
import PageBanner from '../components/common/PageBanner';
import SectionTitle from '../components/common/SectionTitle';

const About = () => {
  useEffect(() => {
    document.title = 'About Us - Elegance Aesthetics & Wellness Clinic';
  }, []);

  const values = [
    {
      icon: <CheckCircle size={24} />,
      title: "Excellence",
      description: "We are committed to delivering the highest standard of care and results in everything we do."
    },
    {
      icon: <Star size={24} />,
      title: "Integrity",
      description: "We operate with honesty, transparency, and ethical practices in all our client interactions."
    },
    {
      icon: <Users size={24} />,
      title: "Compassion",
      description: "We approach each client with empathy, understanding, and personalized attention."
    },
    {
      icon: <BarChart size={24} />,
      title: "Innovation",
      description: "We continuously pursue the latest advancements in aesthetic medicine to offer cutting-edge treatments."
    }
  ];

  return (
    <div className="overflow-x-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full"
      >
        <PageBanner 
          title="About Us" 
          subtitle="Learn about our mission, values, and the expert team behind our premium aesthetic clinic."
          bgImage="https://images.pexels.com/photos/7176297/pexels-photo-7176297.jpeg?auto=compress&cs=tinysrgb&w=1920"
        />

        {/* Our Story Section */}
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="order-2 lg:order-1"
              >
                <SectionTitle 
                  title="Our Story" 
                  subtitle="The journey of Elegance Aesthetics & Wellness Clinic began with a vision to redefine beauty and healthcare."
                />

                <div className="space-y-4 text-gray-600 text-sm sm:text-base">
                  <p>
                    Founded in 2010, Elegance Aesthetics & Wellness Clinic was established with a singular mission: to provide exceptional aesthetic and gynecological care in a luxurious, comfortable environment where clients feel valued, understood, and empowered.
                  </p>
                  <p>
                    Our founder, Dr. Elizabeth Chen, recognized the gap between traditional medical settings and the growing demand for premium aesthetic services. With her extensive background in both dermatology and gynecology, she created a unique clinic that addresses both external beauty and internal wellness.
                  </p>
                  <p>
                    Over the years, we have grown from a small practice to a comprehensive aesthetic and wellness center, continuously expanding our service offerings to incorporate the latest advancements in medical aesthetics while maintaining our commitment to personalized care.
                  </p>
                  <p>
                    Today, Elegance Clinic stands as a testament to our unwavering dedication to excellence, having helped thousands of clients achieve their aesthetic goals and improve their quality of life through our specialized treatments.
                  </p>
                </div>

                <div className="mt-6 sm:mt-8">
                  <Link to="/doctor" className="btn-primary inline-block px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors">
                    Meet Our Doctor
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative order-1 lg:order-2"
              >
                <div className="relative w-full">
                  <img 
                    src="https://images.pexels.com/photos/3985313/pexels-photo-3985313.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Elegance Clinic Reception" 
                    className="rounded-lg shadow-lg w-full h-auto object-cover"
                  />
                  <div className="absolute -bottom-4 -left-4 sm:-bottom-8 sm:-left-8 bg-primary p-4 sm:p-6 rounded-lg shadow-lg hidden sm:block max-w-xs">
                    <div className="text-center text-white">
                      <div className="text-2xl sm:text-3xl lg:text-4xl font-serif font-medium">Our Mission</div>
                      <div className="mt-2 text-xs sm:text-sm">To enhance natural beauty and improve wellbeing through expert care and premium treatments.</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-secondary-off">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <SectionTitle 
              title="Our Core Values" 
              subtitle="These principles guide every aspect of our practice and shape the experience we provide to our clients."
              centered={true}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-8 sm:mt-12">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 sm:p-8 rounded-lg shadow-soft text-center"
                >
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 text-primary">
                    {value.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-serif font-medium mb-2 sm:mb-3">{value.title}</h3>
                  <p className="text-gray-600 text-sm sm:text-base">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-cover bg-center text-white relative" style={{ 
          backgroundImage: "linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.5)), url('https://images.pexels.com/photos/3985325/pexels-photo-3985325.jpeg?auto=compress&cs=tinysrgb&w=1920')" 
        }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <SectionTitle 
              title="Why Choose Us" 
              subtitle="What sets Elegance Aesthetics & Wellness Clinic apart from other aesthetic centers."
              centered={true}
              light={true}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-8 sm:mt-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white/10 backdrop-blur-sm p-6 sm:p-8 rounded-lg"
              >
                <Award className="text-primary mb-4" size={36} />
                <h3 className="text-xl sm:text-2xl font-serif font-medium mb-3">Medical Expertise</h3>
                <p className="text-gray-200 text-sm sm:text-base">
                  Our clinic is led by a highly qualified physician with specialized training in both aesthetic procedures and gynecological care. This dual expertise ensures that all treatments are performed with medical precision and a comprehensive understanding of the body's systems.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white/10 backdrop-blur-sm p-6 sm:p-8 rounded-lg"
              >
                <Star className="text-primary mb-4" size={36} />
                <h3 className="text-xl sm:text-2xl font-serif font-medium mb-3">Premium Experience</h3>
                <p className="text-gray-200 text-sm sm:text-base">
                  From the moment you enter our clinic, you'll experience the Elegance difference. Our luxurious facility, attentive staff, and serene atmosphere create an exceptional environment for your treatments, transforming medical procedures into indulgent experiences.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white/10 backdrop-blur-sm p-6 sm:p-8 rounded-lg"
              >
                <CheckCircle className="text-primary mb-4" size={36} />
                <h3 className="text-xl sm:text-2xl font-serif font-medium mb-3">Advanced Technology</h3>
                <p className="text-gray-200 text-sm sm:text-base">
                  We invest in the latest, FDA-approved equipment and technologies to ensure optimal results with minimal discomfort and downtime. Our commitment to innovation means you'll always have access to the most effective treatments available.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white/10 backdrop-blur-sm p-6 sm:p-8 rounded-lg"
              >
                <Users className="text-primary mb-4" size={36} />
                <h3 className="text-xl sm:text-2xl font-serif font-medium mb-3">Personalized Approach</h3>
                <p className="text-gray-200 text-sm sm:text-base">
                  We recognize that each client is unique, with individual concerns, goals, and physical characteristics. That's why we develop customized treatment plans that address your specific needs, ensuring results that look natural and enhance your inherent beauty.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Your Journey Section */}
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
            <SectionTitle 
              title="Your Journey With Us" 
              subtitle="What to expect when you choose Elegance Aesthetics & Wellness Clinic for your aesthetic and wellness needs."
              centered={true}
            />

            <div className="max-w-4xl mx-auto mt-8 sm:mt-12">
              <div className="relative">
                {/* Timeline line - Hidden on mobile for better readability */}
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-100 hidden md:block"></div>
                
                {/* Timeline items */}
                <div className="space-y-8 sm:space-y-12 md:space-y-16 relative">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="relative"
                  >
                    <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm sm:text-base hidden md:flex">1</div>
                    <div className="md:ml-auto md:mr-8 lg:mr-auto lg:ml-0 lg:pl-16 w-full md:w-1/2 text-left">
                      <div className="flex items-center mb-2 md:hidden">
                        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm mr-3">1</div>
                        <h3 className="text-lg sm:text-xl font-serif font-medium">Initial Consultation</h3>
                      </div>
                      <h3 className="text-lg sm:text-xl font-serif font-medium mb-2 hidden md:block">Initial Consultation</h3>
                      <p className="text-gray-600 text-sm sm:text-base">
                        Your journey begins with a comprehensive consultation with our doctor. We'll discuss your concerns, goals, medical history, and create a personalized treatment plan tailored to your needs.
                      </p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="relative"
                  >
                    <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm sm:text-base hidden md:flex">2</div>
                    <div className="md:mr-auto md:ml-8 lg:ml-auto lg:mr-0 lg:pr-16 w-full md:w-1/2 md:text-right text-left">
                      <div className="flex items-center mb-2 md:hidden">
                        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm mr-3">2</div>
                        <h3 className="text-lg sm:text-xl font-serif font-medium">Customized Treatment</h3>
                      </div>
                      <h3 className="text-lg sm:text-xl font-serif font-medium mb-2 hidden md:block">Customized Treatment</h3>
                      <p className="text-gray-600 text-sm sm:text-base">
                        Experience your selected procedures in our luxurious treatment rooms. Our doctor will perform your treatment with precision and care, ensuring your comfort throughout the process.
                      </p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="relative"
                  >
                    <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm sm:text-base hidden md:flex">3</div>
                    <div className="md:ml-auto md:mr-8 lg:mr-auto lg:ml-0 lg:pl-16 w-full md:w-1/2 text-left">
                      <div className="flex items-center mb-2 md:hidden">
                        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm mr-3">3</div>
                        <h3 className="text-lg sm:text-xl font-serif font-medium">Aftercare Support</h3>
                      </div>
                      <h3 className="text-lg sm:text-xl font-serif font-medium mb-2 hidden md:block">Aftercare Support</h3>
                      <p className="text-gray-600 text-sm sm:text-base">
                        Receive detailed aftercare instructions and personalized recommendations to optimize your results. Our team remains available to address any questions or concerns following your treatment.
                      </p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="relative"
                  >
                    <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm sm:text-base hidden md:flex">4</div>
                    <div className="md:mr-auto md:ml-8 lg:ml-auto lg:mr-0 lg:pr-16 w-full md:w-1/2 md:text-right text-left">
                      <div className="flex items-center mb-2 md:hidden">
                        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm mr-3">4</div>
                        <h3 className="text-lg sm:text-xl font-serif font-medium">Follow-up & Maintenance</h3>
                      </div>
                      <h3 className="text-lg sm:text-xl font-serif font-medium mb-2 hidden md:block">Follow-up & Maintenance</h3>
                      <p className="text-gray-600 text-sm sm:text-base">
                        Schedule follow-up appointments to assess your results and make any necessary adjustments. We'll also develop a maintenance plan to help you preserve and enhance your results over time.
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>

            <div className="mt-12 sm:mt-16">
              <Link to="/contact" className="btn-primary inline-block px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors">
                Begin Your Journey Today
              </Link>
            </div>
          </div>
        </section>
      </motion.div>
    </div>
  );
};

export default About;