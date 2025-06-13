import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, Phone, Mail, Clock, Calendar, 
  User, MessageSquare, Send, CheckCircle 
} from 'lucide-react';
import PageBanner from '../components/common/PageBanner';
import SectionTitle from '../components/common/SectionTitle';

const Contact = () => {
  useEffect(() => {
    document.title = 'Contact Us - Elegance Aesthetics & Wellness Clinic';
  }, []);

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      setFormSubmitted(true);
      setFormState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <MapPin size={20} className="text-primary" />,
      title: "Our Location",
      content: "123 Elegance Avenue, Luxury District, City, Country"
    },
    {
      icon: <Phone size={20} className="text-primary" />,
      title: "Phone Number",
      content: "+1 (555) 123-4567"
    },
    {
      icon: <Mail size={20} className="text-primary" />,
      title: "Email Address",
      content: "info@eleganceclinic.com"
    },
    {
      icon: <Clock size={20} className="text-primary" />,
      title: "Working Hours",
      content: "Monday - Friday: 9:00 AM - 7:00 PM\nSaturday: 9:00 AM - 5:00 PM\nSunday: Closed"
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
          title="Contact Us" 
          subtitle="Get in touch with our team to schedule your consultation or inquire about our services."
          bgImage="https://images.pexels.com/photos/4049990/pexels-photo-4049990.jpeg?auto=compress&cs=tinysrgb&w=1920"
        />

        {/* Contact Information & Form Section */}
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="order-2 lg:order-1"
              >
                <SectionTitle 
                  title="Get In Touch" 
                  subtitle="We're here to answer your questions and help you book your consultation."
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-6 sm:gap-8 mb-8">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex">
                      <div className="flex-shrink-0 mr-3 sm:mr-4 mt-1">
                        {item.icon}
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="text-base sm:text-lg font-medium mb-2">{item.title}</h3>
                        <p className="text-gray-600 text-sm sm:text-base whitespace-pre-line break-words">{item.content}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-primary-50 p-4 sm:p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <Calendar size={20} className="text-primary mr-3 flex-shrink-0" />
                    <h3 className="text-base sm:text-lg font-medium">Book an Appointment</h3>
                  </div>
                  <p className="text-gray-600 mb-4 text-sm sm:text-base">
                    Ready to experience our premium treatments? Use our contact form to schedule a consultation with our expert doctor.
                  </p>
                  <p className="text-gray-600 text-sm sm:text-base">
                    For urgent inquiries, please call us directly at <span className="font-medium">+1 (555) 123-4567</span>.
                  </p>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-white rounded-lg shadow-lg p-6 sm:p-8 order-1 lg:order-2"
              >
                {formSubmitted ? (
                  <div className="text-center py-8 sm:py-12">
                    <CheckCircle size={48} className="text-primary mx-auto mb-6" />
                    <h3 className="text-xl sm:text-2xl font-serif font-medium mb-4">Thank You!</h3>
                    <p className="text-gray-600 mb-6 text-sm sm:text-base">
                      Your message has been successfully sent. We'll get back to you shortly to confirm your appointment or answer your questions.
                    </p>
                    <button 
                      onClick={() => setFormSubmitted(false)}
                      className="inline-block px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <>
                    <h3 className="text-xl sm:text-2xl font-serif font-medium mb-6">Send Us a Message</h3>
                    
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-gray-700 mb-2 text-sm sm:text-base">Full Name</label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <User size={16} className="text-gray-400" />
                          </div>
                          <input 
                            type="text" 
                            id="name" 
                            name="name" 
                            value={formState.name}
                            onChange={handleChange}
                            className="w-full pl-10 pr-3 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm sm:text-base" 
                            placeholder="Your full name"
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="email" className="block text-gray-700 mb-2 text-sm sm:text-base">Email Address</label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <Mail size={16} className="text-gray-400" />
                            </div>
                            <input 
                              type="email" 
                              id="email" 
                              name="email" 
                              value={formState.email}
                              onChange={handleChange}
                              className="w-full pl-10 pr-3 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm sm:text-base" 
                              placeholder="Your email address"
                              required
                            />
                          </div>
                        </div>
                        
                        <div>
                          <label htmlFor="phone" className="block text-gray-700 mb-2 text-sm sm:text-base">Phone Number</label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <Phone size={16} className="text-gray-400" />
                            </div>
                            <input 
                              type="tel" 
                              id="phone" 
                              name="phone" 
                              value={formState.phone}
                              onChange={handleChange}
                              className="w-full pl-10 pr-3 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm sm:text-base" 
                              placeholder="Your phone number"
                              required
                            />
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="service" className="block text-gray-700 mb-2 text-sm sm:text-base">Service of Interest</label>
                        <select 
                          id="service" 
                          name="service" 
                          value={formState.service}
                          onChange={handleChange}
                          className="w-full px-3 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm sm:text-base" 
                          required
                        >
                          <option value="">Select a service</option>
                          <option value="face">Face Treatments</option>
                          <option value="laser">Laser Treatments</option>
                          <option value="hair">Hair Treatments</option>
                          <option value="skin">Skin Treatments</option>
                          <option value="gynec">Gynecological Treatments</option>
                          <option value="consultation">General Consultation</option>
                        </select>
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-gray-700 mb-2 text-sm sm:text-base">Your Message</label>
                        <div className="relative">
                          <div className="absolute top-3 left-3 pointer-events-none">
                            <MessageSquare size={16} className="text-gray-400" />
                          </div>
                          <textarea 
                            id="message" 
                            name="message" 
                            value={formState.message}
                            onChange={handleChange}
                            rows="4" 
                            className="w-full pl-10 pr-3 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none text-sm sm:text-base" 
                            placeholder="Tell us about your concerns or questions..."
                            required
                          ></textarea>
                        </div>
                      </div>
                      
                      <button 
                        type="submit" 
                        className={`w-full flex items-center justify-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors text-sm sm:text-base ${loading ? 'opacity-75 cursor-wait' : ''}`}
                        disabled={loading}
                      >
                        {loading ? (
                          <span className="flex items-center">
                            <svg className="animate-spin -ml-1 mr-3 h-4 w-4 sm:h-5 sm:w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Processing...
                          </span>
                        ) : (
                          <>
                            <Send size={16} className="mr-2" />
                            Send Message
                          </>
                        )}
                      </button>
                    </form>
                  </>
                )}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-secondary-off">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <SectionTitle 
              title="Visit Our Clinic" 
              subtitle="Experience our luxurious facility and meet our expert team in person."
              centered={true}
            />

            <div className="bg-white rounded-lg shadow-lg overflow-hidden mt-8 sm:mt-12">
              <div className="h-64 sm:h-80 lg:h-96 w-full">
                {/* Replace with actual map component or embed */}
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <div className="text-center px-4">
                    <MapPin size={32} className="text-primary mx-auto mb-4" />
                    <h3 className="text-lg sm:text-xl font-medium mb-2">Map Placeholder</h3>
                    <p className="text-gray-600 text-sm sm:text-base">123 Elegance Avenue, Luxury District, City, Country</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-primary text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-medium mb-4 sm:mb-6">
                Ready to Begin Your Transformation?
              </h2>
              <p className="text-base sm:text-lg lg:text-xl max-w-3xl mx-auto mb-6 sm:mb-8">
                Take the first step toward enhancing your natural beauty and improving your quality of life by scheduling your consultation today.
              </p>
              <a 
                href="tel:+15551234567" 
                className="inline-flex items-center px-6 py-3 bg-white text-primary rounded-lg hover:bg-gray-100 transition-colors text-sm sm:text-base font-medium"
              >
                <Phone className="mr-2" size={18} />
                Call Us: +1 (555) 123-4567
              </a>
            </motion.div>
          </div>
        </section>
      </motion.div>
    </div>
  );
};

export default Contact;