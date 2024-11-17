import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-base-200 py-6 mt-10">
      <div className="container mx-auto text-center">
        <p className="text-base-content mb-2">&copy; {new Date().getFullYear()} Profanity Remover. All rights reserved.</p>
        <div className="flex justify-center space-x-4">
          <a href="#" className="btn btn-sm btn-ghost text-base-content hover:text-primary">Privacy Policy</a>
          <a href="#" className="btn btn-sm btn-ghost text-base-content hover:text-primary">Terms of Service</a>
          <a href="#" className="btn btn-sm btn-ghost text-base-content hover:text-primary">Contact Us</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
