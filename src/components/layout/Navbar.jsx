import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Ensure navbar is visible initially
    setScrolled(true);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2,
        duration: 0.5
      }
    },
    exit: { opacity: 0, y: -20 }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="flex items-center" onClick={closeMenu}>
          <span className="text-2xl font-serif font-bold text-primary">
            SURYAM AESTHETIC
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink 
            to="/" 
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            Home
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            About
          </NavLink>
          <div className="relative group">
            <NavLink 
              to="/services" 
              className={({ isActive }) => `nav-link flex items-center ${isActive ? 'active' : ''}`}
            >
              <span>Services</span>
              <ChevronDown className="ml-1 w-4 h-4" />
            </NavLink>
            <div className="absolute left-0 mt-2 w-72 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              <div className="py-2 px-3 divide-y divide-gray-100">
                <div className="py-2">
                  <Link to="/services#face" className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary transition-colors">
                    Face Treatments
                  </Link>
                  <Link to="/services#hair" className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary transition-colors">
                    Hair Treatments
                  </Link>
                  <Link to="/services#gynec" className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary transition-colors">
                    Gynecological Treatments
                  </Link>
                  <Link to="/services#skin" className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary transition-colors">
                    Skin Treatments
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <NavLink 
            to="/gallery" 
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            Gallery
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            Contact
          </NavLink>
          <Link to="/contact" className="btn-primary">
            Book Appointment
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-800 focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            className="md:hidden bg-white absolute top-full left-0 w-full shadow-lg py-4"
          >
            <div className="container-custom flex flex-col space-y-4">
              <motion.div variants={itemVariants}>
                <NavLink 
                  to="/" 
                  onClick={closeMenu}
                  className={({ isActive }) => `block py-2 ${isActive ? 'text-primary' : 'text-gray-800'}`}
                >
                  Home
                </NavLink>
              </motion.div>
              <motion.div variants={itemVariants}>
                <NavLink 
                  to="/about" 
                  onClick={closeMenu}
                  className={({ isActive }) => `block py-2 ${isActive ? 'text-primary' : 'text-gray-800'}`}
                >
                  About
                </NavLink>
              </motion.div>
              <motion.div variants={itemVariants}>
                <div>
                  <button 
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className="flex items-center w-full py-2 text-left"
                  >
                    <span>Services</span>
                    <ChevronDown className={`ml-1 w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="pl-4 overflow-hidden"
                      >
                        <Link 
                          to="/services#face" 
                          onClick={closeMenu}
                          className="block py-2 text-gray-600 hover:text-primary"
                        >
                          Face Treatments
                        </Link>
                        <Link 
                          to="/services#hair" 
                          onClick={closeMenu}
                          className="block py-2 text-gray-600 hover:text-primary"
                        >
                          Hair Treatments
                        </Link>
                        <Link 
                          to="/services#gynec" 
                          onClick={closeMenu}
                          className="block py-2 text-gray-600 hover:text-primary"
                        >
                          Gynecological Treatments
                        </Link>
                        <Link 
                          to="/services#skin" 
                          onClick={closeMenu}
                          className="block py-2 text-gray-600 hover:text-primary"
                        >
                          Skin Treatments
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
              <motion.div variants={itemVariants}>
                <NavLink 
                  to="/gallery" 
                  onClick={closeMenu}
                  className={({ isActive }) => `block py-2 ${isActive ? 'text-primary' : 'text-gray-800'}`}
                >
                  Gallery
                </NavLink>
              </motion.div>
              <motion.div variants={itemVariants}>
                <NavLink 
                  to="/contact" 
                  onClick={closeMenu}
                  className={({ isActive }) => `block py-2 ${isActive ? 'text-primary' : 'text-gray-800'}`}
                >
                  Contact
                </NavLink>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Link 
                  to="/contact" 
                  onClick={closeMenu}
                  className="btn-primary block text-center mt-4"
                >
                  Book Appointment
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;