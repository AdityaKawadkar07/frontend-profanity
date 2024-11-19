import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for navigation

const Header = () => {
  return (
    <header className="bg-base-300 shadow-lg p-4">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-4xl font-bold text-primary-focus">FamWatch</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="btn btn-ghost text-base-content hover:text-primary">
                Home
              </Link>
            </li>
            <li>
              <Link to="/aboutus" className="btn btn-ghost text-base-content hover:text-primary">
                About
              </Link>
            </li>
            <li>
              <a href="#" className="btn btn-ghost text-base-content hover:text-primary">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
