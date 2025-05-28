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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <PageBanner 
        title="About Us" 
        subtitle="Learn about our mission, values, and the expert team behind our premium aesthetic clinic."
        bgImage="https://images.pexels.com/photos/7176297/pexels-photo-7176297.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <SectionTitle 
                title="Our Story" 
                subtitle="The journey of Elegance Aesthetics & Wellness Clinic began with a vision to redefine beauty and healthcare."
              />

              <div className="space-y-4 text-gray-600">
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

              <div className="mt-8">
                <Link to="/doctor" className="btn-primary">
                  Meet Our Doctor
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img 
                src="https://images.pexels.com/photos/3985313/pexels-photo-3985313.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Elegance Clinic Reception" 
                className="rounded-lg shadow-medium w-full h-auto"
              />
              <div className="absolute -bottom-8 -left-8 bg-primary p-6 rounded-lg shadow-medium hidden md:block">
                <div className="text-center text-white">
                  <div className="text-4xl font-serif font-medium">Our Mission</div>
                  <div className="mt-2">To enhance natural beauty and improve wellbeing through expert care and premium treatments.</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary-off">
        <div className="container-custom">
          <SectionTitle 
            title="Our Core Values" 
            subtitle="These principles guide every aspect of our practice and shape the experience we provide to our clients."
            centered={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-soft text-center"
              >
                <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                  {value.icon}
                </div>
                <h3 className="text-xl font-serif font-medium mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-cover bg-center text-white" style={{ 
        backgroundImage: "linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.5)), url('https://images.pexels.com/photos/3985325/pexels-photo-3985325.jpeg?auto=compress&cs=tinysrgb&w=1920')" 
      }}>
        <div className="container-custom">
          <SectionTitle 
            title="Why Choose Us" 
            subtitle="What sets Elegance Aesthetics & Wellness Clinic apart from other aesthetic centers."
            centered={true}
            light={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-lg"
            >
              <Award className="text-primary mb-4" size={36} />
              <h3 className="text-2xl font-serif font-medium mb-3">Medical Expertise</h3>
              <p className="text-gray-200">
                Our clinic is led by a highly qualified physician with specialized training in both aesthetic procedures and gynecological care. This dual expertise ensures that all treatments are performed with medical precision and a comprehensive understanding of the body's systems.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-lg"
            >
              <Star className="text-primary mb-4" size={36} />
              <h3 className="text-2xl font-serif font-medium mb-3">Premium Experience</h3>
              <p className="text-gray-200">
                From the moment you enter our clinic, you'll experience the Elegance difference. Our luxurious facility, attentive staff, and serene atmosphere create an exceptional environment for your treatments, transforming medical procedures into indulgent experiences.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-lg"
            >
              <CheckCircle className="text-primary mb-4" size={36} />
              <h3 className="text-2xl font-serif font-medium mb-3">Advanced Technology</h3>
              <p className="text-gray-200">
                We invest in the latest, FDA-approved equipment and technologies to ensure optimal results with minimal discomfort and downtime. Our commitment to innovation means you'll always have access to the most effective treatments available.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-lg"
            >
              <Users className="text-primary mb-4" size={36} />
              <h3 className="text-2xl font-serif font-medium mb-3">Personalized Approach</h3>
              <p className="text-gray-200">
                We recognize that each client is unique, with individual concerns, goals, and physical characteristics. That's why we develop customized treatment plans that address your specific needs, ensuring results that look natural and enhance your inherent beauty.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-custom text-center">
          <SectionTitle 
            title="Your Journey With Us" 
            subtitle="What to expect when you choose Elegance Aesthetics & Wellness Clinic for your aesthetic and wellness needs."
            centered={true}
          />

          <div className="max-w-4xl mx-auto mt-12">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-100"></div>
              
              {/* Timeline items */}
              <div className="space-y-16 relative">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="relative"
                >
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">1</div>
                  <div className="ml-auto mr-8 md:mr-auto md:ml-0 md:pl-16 w-full md:w-1/2 text-left">
                    <h3 className="text-xl font-serif font-medium mb-2">Initial Consultation</h3>
                    <p className="text-gray-600">
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
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">2</div>
                  <div className="mr-auto ml-8 md:ml-auto md:mr-0 md:pr-16 w-full md:w-1/2 text-right">
                    <h3 className="text-xl font-serif font-medium mb-2">Customized Treatment</h3>
                    <p className="text-gray-600">
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
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">3</div>
                  <div className="ml-auto mr-8 md:mr-auto md:ml-0 md:pl-16 w-full md:w-1/2 text-left">
                    <h3 className="text-xl font-serif font-medium mb-2">Aftercare Support</h3>
                    <p className="text-gray-600">
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
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">4</div>
                  <div className="mr-auto ml-8 md:ml-auto md:mr-0 md:pr-16 w-full md:w-1/2 text-right">
                    <h3 className="text-xl font-serif font-medium mb-2">Follow-up & Maintenance</h3>
                    <p className="text-gray-600">
                      Schedule follow-up appointments to assess your results and make any necessary adjustments. We'll also develop a maintenance plan to help you preserve and enhance your results over time.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <Link to="/contact" className="btn-primary">
              Begin Your Journey Today
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;