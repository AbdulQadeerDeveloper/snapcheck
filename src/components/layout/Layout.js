import React from 'react';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: `url('/images/background.png')` }}
      >

        {/* Navbar */}
        <div className="relative z-20">
          <Navbar />
        </div>

        {/* Main content */}
        <main className="relative z-10">{children}</main>
      </div>
    </div>

  );
};

export default Layout;