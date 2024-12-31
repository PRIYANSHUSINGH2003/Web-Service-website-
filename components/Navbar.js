'use client';
import { FaLaptopCode, FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-gradient-to-r from-primary to-accent text-white shadow-md">
            <div className="container mx-auto flex items-center justify-between p-4">
                {/* Logo */}
                <div className="flex items-center space-x-2">
                    <FaLaptopCode className="text-3xl" />
                    <span className="text-xl font-bold tracking-wide">Webify</span>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-8 font-medium">
                    <li className="hover:text-gray-200 transition duration-300">
                        <a href="#services">Services</a>
                    </li>
                    <li className="hover:text-gray-200 transition duration-300">
                        <a href="#features">Features</a>
                    </li>
                    <li className="hover:text-gray-200 transition duration-300">
                        <a href="#testimonials">Testimonials</a>
                    </li>
                    <li className="hover:text-gray-200 transition duration-300">
                        <a href="#contact">Contact</a>
                    </li>
                </ul>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-2xl focus:outline-none"
                    onClick={toggleMenu}
                >
                    {isMenuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-gradient-to-r from-primary to-accent text-center">
                    <ul className="space-y-4 py-4 font-medium">
                        <li className="hover:text-gray-200 transition duration-300">
                            <a href="#services">Services</a>
                        </li>
                        <li className="hover:text-gray-200 transition duration-300">
                            <a href="#features">Features</a>
                        </li>
                        <li className="hover:text-gray-200 transition duration-300">
                            <a href="#testimonials">Testimonials</a>
                        </li>
                        <li className="hover:text-gray-200 transition duration-300">
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
