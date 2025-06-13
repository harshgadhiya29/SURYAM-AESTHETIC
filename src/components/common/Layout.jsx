import React from 'react';

const LayoutWrapper = ({ children, className = '' }) => {
  return (
    <div className={`pt-16 sm:pt-20 md:pt-24 lg:pt-28 min-h-screen ${className}`}>
      {children}
    </div>
  );
};

export default LayoutWrapper;