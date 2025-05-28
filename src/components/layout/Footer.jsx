import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-2xl font-serif text-primary mb-6">EleganceClinic</h3>
            <p className="text-gray-300 mb-6">
              Providing premium aesthetic, skin, hair, and gynecological treatments in a luxurious and comfortable environment. Our focus is on delivering transformative results with the highest standards of care.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-medium mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-primary transition-colors flex items-center">
                  <span className="mr-2">›</span> Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-primary transition-colors flex items-center">
                  <span className="mr-2">›</span> About Us
                </Link>
              </li>
              <li>
                <Link to="/doctor" className="text-gray-300 hover:text-primary transition-colors flex items-center">
                  <span className="mr-2">›</span> Our Doctor
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-primary transition-colors flex items-center">
                  <span className="mr-2">›</span> Services
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-300 hover:text-primary transition-colors flex items-center">
                  <span className="mr-2">›</span> Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-primary transition-colors flex items-center">
                  <span className="mr-2">›</span> Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-medium mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services#face" className="text-gray-300 hover:text-primary transition-colors flex items-center">
                  <span className="mr-2">›</span> Face Treatments
                </Link>
              </li>
              <li>
                <Link to="/services#laser" className="text-gray-300 hover:text-primary transition-colors flex items-center">
                  <span className="mr-2">›</span> Laser Treatments
                </Link>
              </li>
              <li>
                <Link to="/services#hair" className="text-gray-300 hover:text-primary transition-colors flex items-center">
                  <span className="mr-2">›</span> Hair Treatments
                </Link>
              </li>
              <li>
                <Link to="/services#skin" className="text-gray-300 hover:text-primary transition-colors flex items-center">
                  <span className="mr-2">›</span> Skin Treatments
                </Link>
              </li>
              <li>
                <Link to="/services#gynec" className="text-gray-300 hover:text-primary transition-colors flex items-center">
                  <span className="mr-2">›</span> Gynecological Treatments
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-primary transition-colors flex items-center">
                  <span className="mr-2">›</span> Book Appointment
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-medium mb-6">Contact Information</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="mr-3 text-primary flex-shrink-0" size={20} />
                <span className="text-gray-300">123 Elegance Avenue, Luxury District, City, Country</span>
              </li>
              <li className="flex">
                <Phone className="mr-3 text-primary flex-shrink-0" size={20} />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </li>
              <li className="flex">
                <Mail className="mr-3 text-primary flex-shrink-0" size={20} />
                <span className="text-gray-300">info@eleganceclinic.com</span>
              </li>
              <li className="flex">
                <Clock className="mr-3 text-primary flex-shrink-0" size={20} />
                <div className="text-gray-300">
                  <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
                  <p>Saturday: 9:00 AM - 5:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-700 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Elegance Clinic. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/" className="text-gray-400 text-sm hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/" className="text-gray-400 text-sm hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link to="/" className="text-gray-400 text-sm hover:text-primary transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;