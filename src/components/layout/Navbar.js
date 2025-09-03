import React, { useState } from 'react';
import { Globe, Menu, X } from 'lucide-react';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const Navbar = ({
  logoUrl = "/images/logo.png",
  showLanguageSelector = true,
  navigationItems = [
    { label: "Home", href: "#" },
    { label: "About", href: "#" },
    { label: "Contact", href: "#" },
    { label: "Download", href: "#" },
    { label: "Pricing", href: "#" },
    { label: "Demo", href: "#" }
  ]
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 right-0 z-20 w-full px-6 sm:px-8 lg:px-12 py-4">
      <div className="flex  items-center justify-between max-w-5xl mx-auto w-full">

        {/* Logo Section */}
        <div className="flex-1 flex justify-center lg:justify-start">
          {logoUrl && (
            <img
              src={logoUrl}
              alt="Logo"
              className="w-40 sm:w-40 h-auto object-contain relative right-5"
            />
          )}
        </div>


        {/* Desktop Navigation */}
        <div className="hidden lg:flex flex-1 justify-center space-x-4">
          {navigationItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className={`${poppins.className} font-semibold text-gray-700 hover:text-blue-600 transition-colors relative group`}
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex-1 flex justify-center lg:justify-end items-center ml-14">
          {/* Language Selector */}
          {showLanguageSelector && (
            <div className="hidden sm:flex items-center space-x-2 cursor-pointer group">
              <Globe className="w-5 h-5 text-gray-500 group-hover:text-blue-600 transition-colors" />
              <span className="text-sm font-bold text-gray-600 group-hover:text-blue-600 transition-colors">EN</span>
            </div>
          )}

          {/* Auth Buttons */}
          <div className="hidden sm:flex items-center space-x-3">
            <button className="px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors font-bold">
              Sign-Up
            </button>
            <button
              className="px-6 py-2 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              style={{
                background: "linear-gradient(to right, rgba(14, 113, 235, 1), rgba(116, 51, 204, 1))"
              }}
            >
              Sign In
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-100 lg:hidden">
          <div className="px-6 py-4 space-y-4">
            {navigationItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="block text-gray-700 hover:text-blue-600 transition-colors font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}

            {/* Mobile Language Selector */}
            {showLanguageSelector && (
              <div className="flex items-center space-x-2 py-2 border-t border-gray-100">
                <Globe className="w-5 h-5 text-gray-500" />
                <span className="text-sm font-medium text-gray-600">EN</span>
              </div>
            )}

            {/* Mobile Auth Buttons */}
            <div className="flex flex-col space-y-3 pt-4 border-t border-gray-100">
              <button className="w-full px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium text-left">
                Sign-Up
              </button>
              <button className="w-full px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 font-medium shadow-lg">
                Sign In
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;