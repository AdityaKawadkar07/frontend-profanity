import React from 'react';

const Header = () => {
  return (
    <header className="bg-base-300 shadow-lg p-4">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold text-primary-focus">Profanity Remover</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="btn btn-ghost text-base-content hover:text-primary">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="btn btn-ghost text-base-content hover:text-primary">
                About
              </a>
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
