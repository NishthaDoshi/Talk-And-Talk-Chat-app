import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-3 text-center text-sm text-base-content/60 ">
      <p>© {currentYear} ND Inc. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
