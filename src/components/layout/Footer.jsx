import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-8 sm:pt-12 lg:pt-16 pb-6 lg:pb-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* About */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-xl sm:text-2xl font-serif text-primary mb-4 sm:mb-6">EleganceClinic</h3>
            <p className="text-gray-300 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">
              Providing premium aesthetic, skin, hair, and gynecological treatments in a luxurious and comfortable environment. Our focus is on delivering transformative results with the highest standards of care.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              <a 
                href="#" 
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={16} className="sm:w-[18px] sm:h-[18px]" />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={16} className="sm:w-[18px] sm:h-[18px]" />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={16} className="sm:w-[18px] sm:h-[18px]" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg sm:text-xl font-medium mb-4 sm:mb-6">Quick Links</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-primary transition-colors flex items-center text-sm sm:text-base">
                  <span className="mr-2 text-primary">›</span> Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-primary transition-colors flex items-center text-sm sm:text-base">
                  <span className="mr-2 text-primary">›</span> About Us
                </Link>
              </li>
              <li>
                <Link to="/doctor" className="text-gray-300 hover:text-primary transition-colors flex items-center text-sm sm:text-base">
                  <span className="mr-2 text-primary">›</span> Our Doctor
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-primary transition-colors flex items-center text-sm sm:text-base">
                  <span className="mr-2 text-primary">›</span> Services
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-300 hover:text-primary transition-colors flex items-center text-sm sm:text-base">
                  <span className="mr-2 text-primary">›</span> Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-primary transition-colors flex items-center text-sm sm:text-base">
                  <span className="mr-2 text-primary">›</span> Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg sm:text-xl font-medium mb-4 sm:mb-6">Our Services</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link to="/services#face" className="text-gray-300 hover:text-primary transition-colors flex items-center text-sm sm:text-base">
                  <span className="mr-2 text-primary">›</span> Face Treatments
                </Link>
              </li>
              <li>
                <Link to="/services#laser" className="text-gray-300 hover:text-primary transition-colors flex items-center text-sm sm:text-base">
                  <span className="mr-2 text-primary">›</span> Laser Treatments
                </Link>
              </li>
              <li>
                <Link to="/services#hair" className="text-gray-300 hover:text-primary transition-colors flex items-center text-sm sm:text-base">
                  <span className="mr-2 text-primary">›</span> Hair Treatments
                </Link>
              </li>
              <li>
                <Link to="/services#skin" className="text-gray-300 hover:text-primary transition-colors flex items-center text-sm sm:text-base">
                  <span className="mr-2 text-primary">›</span> Skin Treatments
                </Link>
              </li>
              <li>
                <Link to="/services#gynec" className="text-gray-300 hover:text-primary transition-colors flex items-center text-sm sm:text-base">
                  <span className="mr-2 text-primary">›</span> Gynecological Treatments
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-primary transition-colors flex items-center text-sm sm:text-base">
                  <span className="mr-2 text-primary">›</span> Book Appointment
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-lg sm:text-xl font-medium mb-4 sm:mb-6">Contact Information</h3>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex">
                <MapPin className="mr-3 text-primary flex-shrink-0 mt-0.5" size={18} />
                <span className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  123 Elegance Avenue, Luxury District, City, Country
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 text-primary flex-shrink-0" size={18} />
                <span className="text-gray-300 text-sm sm:text-base">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 text-primary flex-shrink-0" size={18} />
                <span className="text-gray-300 text-sm sm:text-base break-all">info@eleganceclinic.com</span>
              </li>
              <li className="flex">
                <Clock className="mr-3 text-primary flex-shrink-0 mt-0.5" size={18} />
                <div className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
                  <p>Saturday: 9:00 AM - 5:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-700 my-6 sm:my-8" />
        
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
            © {new Date().getFullYear()} Elegance Clinic. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6">
            <Link to="/" className="text-gray-400 text-xs sm:text-sm hover:text-primary transition-colors whitespace-nowrap">
              Privacy Policy
            </Link>
            <Link to="/" className="text-gray-400 text-xs sm:text-sm hover:text-primary transition-colors whitespace-nowrap">
              Terms of Service
            </Link>
            <Link to="/" className="text-gray-400 text-xs sm:text-sm hover:text-primary transition-colors whitespace-nowrap">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;