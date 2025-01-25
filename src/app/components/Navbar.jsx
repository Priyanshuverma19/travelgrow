'use client'
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  const toggleDropdown = (menu) => {
    setDropdownOpen(dropdownOpen === menu ? null : menu);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-2 lg:py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center h-20">
          <Image 
            src="/logo.png" 
            alt="TravelGeowIndia" 
            width={160} 
            height={80} 
            className="object-contain"
          />
        </div>

        {/* Hamburger Icon */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Nav Links */}
        <ul
          className={`md:flex md:items-center md:space-x-6 absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent md:shadow-none shadow-lg transition-all duration-300 ease-in-out ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <li className="py-2 px-4 md:py-0">
            <a href="#home" className="hover:text-blue-600">Home</a>
          </li>
          <li className="py-2 px-4 md:py-0 relative">
            <button
              className="hover:text-blue-600 flex items-center"
              onClick={() => toggleDropdown("travelPackages")}
            >
              Travel Packages
            </button>
            {dropdownOpen === "travelPackages" && (
              <ul className="absolute bg-white shadow-lg top-full left-0 mt-2 py-2 w-48">
                <li className="py-2 px-4 hover:bg-gray-100">
                  <a href="#indian-tour">Indian Tour</a>
                </li>
                <li className="py-2 px-4 hover:bg-gray-100">
                  <a href="#international-tour">International Tour</a>
                </li>
              </ul>
            )}
          </li>
          <li className="py-2 px-4 md:py-0 relative">
            <button
              className="hover:text-blue-600 flex items-center"
              onClick={() => toggleDropdown("ourServices")}
            >
              Our Services
            </button>
            {dropdownOpen === "ourServices" && (
              <ul className="absolute bg-white shadow-lg top-full left-0 mt-2 py-2 w-48">
                <li className="py-2 px-4 hover:bg-gray-100">
                  <a href="#web-development">Web Development</a>
                </li>
                <li className="py-2 px-4 hover:bg-gray-100">
                  <a href="#app-development">App Development</a>
                </li>
                <li className="py-2 px-4 hover:bg-gray-100">
                  <a href="#digital-marketing">Digital Marketing</a>
                </li>
              </ul>
            )}
          </li>
          <li className="py-2 px-4 md:py-0">
            <a href="#plan" className="hover:text-blue-600">Plan Tour</a>
          </li>
          <li className="py-2 px-4 md:py-0">
            <a href="#mentorship" className="hover:text-blue-600">Mentorship Program</a>
          </li>
          <li className="py-2 px-4 md:py-0">
            <a href="#register" className="hover:text-blue-600">Register as a Travel Agent</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
