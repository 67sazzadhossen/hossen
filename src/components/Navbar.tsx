"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }

      // Add background on scroll
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: "Home", href: "/#home", section: "home" },
    { name: "About", href: "/#about", section: "about" },
    { name: "Skills", href: "/#skills", section: "skills" },
    { name: "Projects", href: "/#projects", section: "projects" },
    { name: "Contact", href: "/#contact", section: "contact" },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-9999 transition-all duration-300  ${
        isScrolled
          ? "bg-black/90 backdrop-blur-md border-b border-white/10"
          : "bg-white"
      }`}
    >
      <div className="w-full px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <div className="shrink-0">
            <Link
              href="/#home"
              className={`text-xl flex items-center gap-2 sm:text-2xl font-extrabold uppercase text-black hover:text-gray-300 transition-colors duration-300 ${
                isScrolled ? "text-white" : "text-black"
              }`}
            >
              <Image src={"/logo.png"} alt="logo" width={30} height={20} />{" "}
              Sazzad Hossen
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 lg:space-x-12">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={handleLinkClick}
                className={`uppercase transition-all duration-300 font-medium text-sm lg:text-base ${
                  activeSection === link.section
                    ? "text-black border-b-2 border-black"
                    : "text-black hover:text-gray-500 "
                } ${isScrolled ? "text-white border-white" : "text-black"}`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden z-9999">
            <button
              onClick={toggleMenu}
              className={`text-black hover:text-gray-300 focus:outline-none transition-colors duration-300 ${isScrolled && "text-white"}`}
              aria-label="Toggle menu"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out  ${
            isOpen
              ? "max-h-96 opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="flex flex-col space-y-4 pb-6 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={handleLinkClick}
                className={`transition-colors duration-300 font-medium px-2 py-2 uppercase ${
                  activeSection === link.section
                    ? "text-black bg-white/10 rounded-lg"
                    : "text-gray-900 hover:text-white hover:bg-white/5 rounded-lg"
                } ${isScrolled && "text-white"}`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
