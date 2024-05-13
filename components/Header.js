import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold">My Portfolio</h1>
        <nav>
          <a href="#about" className="mx-4 hover:underline">About</a>
          <a href="#projects" className="mx-4 hover:underline">Projects</a>
          <a href="#contact" className="mx-4 hover:underline">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
