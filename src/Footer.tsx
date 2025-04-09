import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-light py-3 mt-auto">
      <div className="container text-center">
        <p className="mb-0">© {new Date().getFullYear()} Employee Management System. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
