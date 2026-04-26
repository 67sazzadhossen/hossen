import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaDownload,
  FaArrowRight,
} from "react-icons/fa";

const Herosection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-black">
      <div className="w-full px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 py-8 sm:py-20 md:py-24 lg:py-28 xl:py-32">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-20 xl:gap-24 2xl:gap-28 items-center">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12 xl:space-y-14 order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 sm:gap-3 bg-white/5 px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full backdrop-blur-sm w-fit">
              <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 bg-green-700 rounded-full animate-pulse"></span>
              <span className="text-xs sm:text-sm md:text-base font-medium text-white/80 tracking-wide">
                Available for work
              </span>
            </div>

            {/* Title */}
            <div className="space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-7 xl:space-y-8">
              <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl   font-bold text-white leading-[1.2] sm:leading-[1.15] md:leading-[1.1] tracking-tight">
                Sazzad
                <span className="text-gray-400 ml-4">Hossen</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl  text-gray-400 max-w-2xl leading-relaxed">
                Full Stack Developer creating exceptional digital experiences
                with modern web technologies.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 sm:gap-5 md:gap-6">
              <Link
                href="#work"
                className="group inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 bg-white text-black font-semibold rounded-xl hover:bg-gray-200 transition-all duration-300 text-base sm:text-lg md:text-xl"
              >
                Explore My Work
                <FaArrowRight
                  className="group-hover:translate-x-1 transition-transform"
                  size={18}
                />
              </Link>
              <Link
                href="/resume.pdf"
                className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 border-2 border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300 text-base sm:text-lg md:text-xl"
              >
                Download Resume
                <FaDownload size={16} />
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 sm:gap-5 md:gap-6 pt-4 sm:pt-6 md:pt-8">
              {[
                {
                  icon: FaGithub,
                  href: "https://github.com/yourusername",
                  label: "GitHub",
                },
                {
                  icon: FaLinkedin,
                  href: "https://linkedin.com/in/yourusername",
                  label: "LinkedIn",
                },
                {
                  icon: FaEnvelope,
                  href: "mailto:your.email@example.com",
                  label: "Email",
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 sm:p-4 md:p-5 bg-white/5 rounded-xl sm:rounded-2xl text-white/60 hover:text-white hover:bg-white/10 transition-all duration-300 hover:scale-105"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="relative flex justify-center lg:justify-end order-1 lg:order-2 mb-8 lg:mb-0">
            <div className="relative w-70 h-70 xs:w-[320px] xs:h-[320px] sm:w-95 sm:h-95 md:w-112.5 md:h-112.5 lg:w-125 lg:h-125 xl:w-145 xl:h-145 2xl:w-162.5 2xl:h-162.5">
              {/* Image Container */}
              <div className="relative w-full h-full rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 sm:border-2 shadow-2xl">
                <Image
                  src="/profile.jpg"
                  alt="Sazzad Hossen"
                  fill
                  className="object-cover  transition-all duration-700 scale-105 hover:scale-100"
                  sizes="(max-width: 480px) 280px, (max-width: 640px) 320px, (max-width: 768px) 380px, (max-width: 1024px) 450px, (max-width: 1280px) 500px, (max-width: 1536px) 580px, 650px"
                  priority
                />
              </div>

              {/* Decorative Elements - Hidden on small screens */}
              <div className="absolute -top-6 -right-6 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 border border-white/10 rounded-xl sm:rounded-2xl -z-10 hidden sm:block"></div>
              <div className="absolute -bottom-6 -left-6 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 bg-white/5 rounded-full -z-10 hidden sm:block"></div>
              <div className="absolute top-1/2 -right-10 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 border border-white/5 rounded-full -z-10 hidden md:block"></div>
              <div className="absolute bottom-10 -left-8 w-12 h-12 sm:w-16 sm:h-16 bg-linear-to-r from-white/5 to-transparent rounded-full -z-10 blur-xl hidden md:block"></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 sm:bottom-8 md:bottom-10 lg:bottom-12 left-1/2 transform -translate-x-1/2 hidden lg:block">
          <div className="flex flex-col items-center gap-2 sm:gap-3 text-white/40">
            <span className="text-xs sm:text-sm uppercase tracking-wider font-medium">
              Scroll to explore
            </span>
            <div className="w-px h-12 sm:h-16 md:h-20 bg-linear-to-b from-white/40 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Herosection;
