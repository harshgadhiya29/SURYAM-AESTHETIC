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
    setServicesOpen(false);
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

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('header')) {
        closeMenu();
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Close mobile menu on window resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        closeMenu();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.1,
        duration: 0.3
      }
    },
    exit: { 
      opacity: 0, 
      y: -20,
      transition: {
        duration: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <>
      <header 
        className={`fixed w-full z-50 bg-white shadow-md transition-all duration-300 ${
          scrolled ? 'py-1 sm:py-2 md:py-3' : 'py-2 sm:py-3 md:py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center flex-shrink-0" onClick={closeMenu}>
            <img 
              src="/Suryam logo.png" 
              alt="Suryam Aesthetic" 
              className={`transition-all duration-300 ${
                scrolled 
                  ? 'h-6 sm:h-8 md:h-10 lg:h-12' 
                  : 'h-8 sm:h-10 md:h-12 lg:h-14'
              } w-auto`}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2 lg:space-x-4 xl:space-x-6">
            <NavLink 
              to="/" 
              className={({ isActive }) => `nav-link text-xs sm:text-sm lg:text-base px-2 lg:px-3 py-1 lg:py-2 rounded-md transition-colors duration-200 ${
                isActive 
                  ? 'text-primary font-semibold bg-primary-50' 
                  : 'text-gray-700 hover:text-primary hover:bg-gray-50'
              }`}
            >
              Home
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => `nav-link text-xs sm:text-sm lg:text-base px-2 lg:px-3 py-1 lg:py-2 rounded-md transition-colors duration-200 ${
                isActive 
                  ? 'text-primary font-semibold bg-primary-50' 
                  : 'text-gray-700 hover:text-primary hover:bg-gray-50'
              }`}
            >
              About
            </NavLink>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <NavLink 
                to="/services" 
                className={({ isActive }) => `nav-link flex items-center text-xs sm:text-sm lg:text-base px-2 lg:px-3 py-1 lg:py-2 rounded-md transition-colors duration-200 ${
                  isActive 
                    ? 'text-primary font-semibold bg-primary-50' 
                    : 'text-gray-700 hover:text-primary hover:bg-gray-50'
                }`}
              >
                <span>Services</span>
                <ChevronDown className="ml-1 w-3 h-3 lg:w-4 lg:h-4" />
              </NavLink>
              <div className="absolute left-0 mt-1 w-56 lg:w-64 xl:w-72 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="py-2 divide-y divide-gray-100">
                  <div className="py-1">
                    <Link to="/services#face" className="block px-3 lg:px-4 py-2 text-xs lg:text-sm text-gray-700 hover:bg-primary-50 hover:text-primary transition-colors">
                      Face Treatments
                    </Link>
                    <Link to="/services#hair" className="block px-3 lg:px-4 py-2 text-xs lg:text-sm text-gray-700 hover:bg-primary-50 hover:text-primary transition-colors">
                      Hair Treatments
                    </Link>
                    <Link to="/services#gynec" className="block px-3 lg:px-4 py-2 text-xs lg:text-sm text-gray-700 hover:bg-primary-50 hover:text-primary transition-colors">
                      Gynecological Treatments
                    </Link>
                    <Link to="/services#skin" className="block px-3 lg:px-4 py-2 text-xs lg:text-sm text-gray-700 hover:bg-primary-50 hover:text-primary transition-colors">
                      Skin Treatments
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <NavLink 
              to="/gallery" 
              className={({ isActive }) => `nav-link text-xs sm:text-sm lg:text-base px-2 lg:px-3 py-1 lg:py-2 rounded-md transition-colors duration-200 ${
                isActive 
                  ? 'text-primary font-semibold bg-primary-50' 
                  : 'text-gray-700 hover:text-primary hover:bg-gray-50'
              }`}
            >
              Gallery
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => `nav-link text-xs sm:text-sm lg:text-base px-2 lg:px-3 py-1 lg:py-2 rounded-md transition-colors duration-200 ${
                isActive 
                  ? 'text-primary font-semibold bg-primary-50' 
                  : 'text-gray-700 hover:text-primary hover:bg-gray-50'
              }`}
            >
              Contact
            </NavLink>
            <Link 
              to="/contact" 
              className="btn-primary text-xs lg:text-sm px-2 lg:px-4 py-1 lg:py-2 ml-2 lg:ml-4 rounded-md bg-primary text-white hover:bg-primary-600 transition-colors duration-200 whitespace-nowrap"
            >
              Book Appointment
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden relative z-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 p-2 flex-shrink-0 hover:bg-gray-100 rounded-md transition-all duration-200 min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
            aria-expanded={isOpen}
          >
            <div className="relative w-6 h-6 flex items-center justify-center">
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: 0, opacity: 0 }}
                    animate={{ rotate: 180, opacity: 1 }}
                    exit={{ rotate: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={20} className="w-5 h-5 sm:w-6 sm:h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 180, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 180, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={20} className="w-5 h-5 sm:w-6 sm:h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Navigation - Fixed positioning to prevent content overlap */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
              onClick={closeMenu}
            />
            
            {/* Mobile Menu - Fixed positioning */}
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={menuVariants}
              className="md:hidden fixed top-[60px] sm:top-[70px] left-0 w-full bg-white shadow-xl border-t border-gray-200 z-40"
              style={{ 
                maxHeight: 'calc(100vh - 60px)',
                overflowY: 'auto'
              }}
            >
              <div className="px-4 sm:px-6 py-4">
                <div className="flex flex-col space-y-1">
                  <motion.div variants={itemVariants}>
                    <NavLink 
                      to="/" 
                      onClick={closeMenu}
                      className={({ isActive }) => `block py-3 px-3 rounded-md text-base sm:text-lg transition-colors ${
                        isActive 
                          ? 'text-primary font-semibold bg-primary-50' 
                          : 'text-gray-800 hover:text-primary hover:bg-gray-50'
                      }`}
                    >
                      Home
                    </NavLink>
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <NavLink 
                      to="/about" 
                      onClick={closeMenu}
                      className={({ isActive }) => `block py-3 px-3 rounded-md text-base sm:text-lg transition-colors ${
                        isActive 
                          ? 'text-primary font-semibold bg-primary-50' 
                          : 'text-gray-800 hover:text-primary hover:bg-gray-50'
                      }`}
                    >
                      About
                    </NavLink>
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <div>
                      <button 
                        onClick={() => setServicesOpen(!servicesOpen)}
                        className="flex items-center justify-between w-full py-3 px-3 text-left text-base sm:text-lg text-gray-800 hover:text-primary hover:bg-gray-50 rounded-md transition-colors"
                        aria-expanded={servicesOpen}
                      >
                        <span>Services</span>
                        <ChevronDown className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
                      </button>
                      
                      <AnimatePresence>
                        {servicesOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="pl-4 sm:pl-6 overflow-hidden"
                          >
                            <Link 
                              to="/services#face" 
                              onClick={closeMenu}
                              className="block py-2 px-3 text-sm sm:text-base text-gray-600 hover:text-primary hover:bg-gray-50 rounded-md transition-colors"
                            >
                              Face Treatments
                            </Link>
                            <Link 
                              to="/services#hair" 
                              onClick={closeMenu}
                              className="block py-2 px-3 text-sm sm:text-base text-gray-600 hover:text-primary hover:bg-gray-50 rounded-md transition-colors"
                            >
                              Hair Treatments
                            </Link>
                            <Link 
                              to="/services#gynec" 
                              onClick={closeMenu}
                              className="block py-2 px-3 text-sm sm:text-base text-gray-600 hover:text-primary hover:bg-gray-50 rounded-md transition-colors"
                            >
                              Gynecological Treatments
                            </Link>
                            <Link 
                              to="/services#skin" 
                              onClick={closeMenu}
                              className="block py-2 px-3 text-sm sm:text-base text-gray-600 hover:text-primary hover:bg-gray-50 rounded-md transition-colors"
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
                      className={({ isActive }) => `block py-3 px-3 rounded-md text-base sm:text-lg transition-colors ${
                        isActive 
                          ? 'text-primary font-semibold bg-primary-50' 
                          : 'text-gray-800 hover:text-primary hover:bg-gray-50'
                      }`}
                    >
                      Gallery
                    </NavLink>
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <NavLink 
                      to="/contact" 
                      onClick={closeMenu}
                      className={({ isActive }) => `block py-3 px-3 rounded-md text-base sm:text-lg transition-colors ${
                        isActive 
                          ? 'text-primary font-semibold bg-primary-50' 
                          : 'text-gray-800 hover:text-primary hover:bg-gray-50'
                      }`}
                    >
                      Contact
                    </NavLink>
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <Link 
                      to="/contact" 
                      onClick={closeMenu}
                      className="btn-primary block text-center mt-4 py-3 px-4 bg-primary text-white hover:bg-primary-600 rounded-md transition-colors text-base sm:text-lg font-medium"
                    >
                      Book Appointment
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;