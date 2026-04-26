"use client";
import React, { useLayoutEffect, useState } from "react";
import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaHeart,
  FaArrowUp,
  FaCode,
} from "react-icons/fa";

const Footer = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [currentYear, setCurrentYear] = useState(2024);

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      icon: FaGithub,
      href: "https://github.com/yourusername",
      label: "GitHub",
      color: "hover:text-gray-400",
    },
    {
      icon: FaLinkedin,
      href: "https://linkedin.com/in/yourusername",
      label: "LinkedIn",
      color: "hover:text-blue-400",
    },
    {
      icon: FaTwitter,
      href: "https://twitter.com/yourusername",
      label: "Twitter",
      color: "hover:text-sky-400",
    },
    {
      icon: FaEnvelope,
      href: "mailto:sazzad@example.com",
      label: "Email",
      color: "hover:text-red-400",
    },
  ];

  const services = [
    "Web Development",
    "Mobile Development",
    "UI/UX Design",
    "API Development",
    "Database Design",
    "Cloud Solutions",
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useLayoutEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMounted(true);
    setCurrentYear(new Date().getFullYear());
  }, []);

  if (!isMounted) {
    return (
      <footer className="bg-black border-t border-white/10 py-12">
        <div className="w-full px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
          <div className="animate-pulse">
            <div className="h-4 bg-white/10 rounded w-32 mx-auto"></div>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="bg-black border-t border-white/10 relative">
      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-5 left-1/2 transform -translate-x-1/2 p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-110 shadow-lg"
        aria-label="Scroll to top"
      >
        <FaArrowUp size={20} />
      </button>

      <div className="w-full px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 py-12 lg:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link href="#home" className="inline-block">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Sazzad Hossen
              </h3>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Full Stack Developer creating exceptional digital experiences with
              modern web technologies.
            </p>
            <div className="flex gap-3 pt-2">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 bg-white/5 rounded-lg text-gray-400 ${social.color} transition-all duration-300 hover:scale-110 hover:bg-white/10`}
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-blue-500 rounded-full group-hover:scale-125 transition-transform"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-gray-400 text-sm hover:text-white transition-colors duration-300 cursor-pointer flex items-center gap-2 group">
                    <span className="w-1 h-1 bg-purple-500 rounded-full group-hover:scale-125 transition-transform"></span>
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter / Contact Info */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">
              Work With Me
            </h4>
            <p className="text-gray-400 text-sm mb-4">
              Ready to start your next project? Let&apos;s collaborate and
              create something amazing together.
            </p>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-4 py-2 bg-linear-to-r from-blue-600 to-purple-600 text-white text-sm font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105"
            >
              <FaCode size={14} />
              Hire Me
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © {currentYear} Sazzad Hossen. All rights reserved.
          </p>

          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <span>Made with</span>
            <FaHeart className="text-red-500 animate-pulse" size={14} />
            <span>by Sazzad Hossen</span>
          </div>

          <div className="flex gap-4">
            <Link
              href="/privacy"
              className="text-gray-500 text-sm hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-gray-500 text-sm hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }

        .animate-pulse {
          animation: pulse 1.5s ease-in-out infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
