'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Phone , ChevronUp, ChevronDown,Mail  } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  const toggleDropdown = (dropdown) =>
    setDropdownOpen(dropdownOpen === dropdown ? null : dropdown);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      {/* Top Header */}
      <header className="flex items-center justify-between bg-blue-600 text-white text-sm h-10 px-2 lg:px-4">
        <div className="flex items-center gap-1 lg:gap-2">
          <Phone  size={18} /> +91-9582225927
        </div>
        <div className="flex items-center gap-1 lg:gap-2"><Mail size={18} />support@travelgrowindia.com</div>
      </header>

      {/* Main Navbar */}
      <div className="container mx-auto px-4 py-2 lg:py-4 flex items-center justify-between relative">
        {/* Logo */}
        <div className="flex items-center h-20">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="TravelGeowIndia"
              width={160}
              height={80}
              className="object-contain"
            />
          </Link>
        </div>

        {/* Hamburger Icon */}
        <button
          className="md:hidden text-2xl focus:outline-none z-50"
          onClick={toggleMenu}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Nav Links */}
        <ul
          className={`md:flex md:items-center md:space-x-6 absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent md:shadow-none shadow-lg transition-all duration-300 ease-in-out text-lg ${
            isOpen ? 'block' : 'hidden'
          }`}
        >
          <li className="py-2 px-4 md:py-0">
            <Link href="#home" className="hover:text-blue-600">
              Home
            </Link>
          </li>
          <li className="py-2 px-4 md:py-0 relative">
            <div
              className="hover:text-blue-600 flex items-center"
              onClick={() => toggleDropdown('travelPackages')}
            >
              Travel Packages
              {dropdownOpen === 'travelPackages' ? <ChevronUp /> : <ChevronDown />}
            </div>
            {dropdownOpen === 'travelPackages' && (
              <ul className="absolute bg-white shadow-lg top-full left-0 mt-2 py-2 w-48 z-60">
                <li className="py-2 px-4 hover:bg-gray-100">
                  <Link href="#indian-tour">Indian Tour</Link>
                </li>
                <li className="py-2 px-4 hover:bg-gray-00">
                  <Link href="#international-tour">International Tour</Link>
                </li>
              </ul>
            )}
          </li>
          <li className="py-2 px-4 md:py-0 relative">
            <div
              className="hover:text-blue-600 flex items-center"
              onClick={() => toggleDropdown('ourServices')}
            >
              Our Services
              {dropdownOpen === 'ourServices' ? <ChevronUp /> : <ChevronDown />}
            </div>
            {dropdownOpen === 'ourServices' && (
              <ul className="absolute bg-white shadow-lg top-full left-0 mt-2 py-2 w-48">
                <li className="py-2 px-4 hover:bg-gray-100">
                  <Link href="#web-development">Web Development</Link>
                </li>
                <li className="py-2 px-4 hover:bg-gray-100">
                  <Link href="#app-development">App Development</Link>
                </li>
                <li className="py-2 px-4 hover:bg-gray-100">
                  <Link href="#digital-marketing">Digital Marketing</Link>
                </li>
              </ul>
            )}
          </li>
          <li className="py-2 px-4 md:py-0">
            <Link href="#plan" className="hover:text-blue-600">
              Plan Tour
            </Link>
          </li>
          <li className="py-2 px-4 md:py-0">
            <Link href="#mentorship" className="hover:text-blue-600">
              Mentorship Program
            </Link>
          </li>
          <li className="py-2 px-4 md:py-0">
            <Link href="#register" className="hover:text-blue-600">
              Register as a Travel Agent
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
