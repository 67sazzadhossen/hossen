import React from "react";
import Image from "next/image";
import {
  FaUserGraduate,
  FaLaptopCode,
  FaRocket,
  FaAward,
  FaCheckCircle,
} from "react-icons/fa";

const AboutSection = () => {
  const stats = [
    { icon: FaUserGraduate, value: "2+", label: "Years Experience" },
    { icon: FaLaptopCode, value: "25+", label: "Projects Completed" },
    { icon: FaRocket, value: "10+", label: "Happy Clients" },
    { icon: FaAward, value: "10+", label: "Achievements" },
  ];

  const skills = [
    // Frontend
    "React.js",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Framer Motion",
    "Redux Toolkit",
    "Redux Persist",

    // Backend
    "Node.js",
    "Express.js",
    "REST API Development",
    "JWT Authentication",

    // Database & ORM
    "MongoDB",

    // Tools & Libraries
    "Axios",
    "Socket.io",
    "Stripe Integration",

    // Other
    "Responsive Design",
    "Role-Based Access Control",
    "Real-time Systems",
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center bg-white py-20 lg:py-28"
    >
      <div className="w-full px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-start">
          {/* Left Side - Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative w-full h-87.5 sm:h-100 md:h-112.5 lg:h-125 rounded-2xl sm:rounded-3xl overflow-hidden border border-gray-200 shadow-2xl">
              <Image
                src="/aboutMe.png"
                alt="About Sazzad Hossen"
                fill
                className="object-cover transition-all duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 sm:w-32 sm:h-32 border border-gray-200 rounded-2xl -z-10 hidden sm:block"></div>
            <div className="absolute -bottom-6 -left-6 w-20 h-20 sm:w-24 sm:h-24 bg-gray-100 rounded-full -z-10 hidden sm:block"></div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
            {/* Section Title */}
            <div className="space-y-4">
              <span className="inline-block px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700 tracking-wide">
                About Me
              </span>
              <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Who Am I?
              </h2>
            </div>

            {/* Description */}
            <div className="space-y-4 text-gray-600">
              <p className="text-base sm:text-lg leading-relaxed">
                I&apos;m Sazzad Hossen, a passionate Full Stack Developer with
                over 5 years of experience in building modern web applications.
                I specialize in creating fast, scalable, and user-friendly
                digital solutions that solve real-world problems.
              </p>
              <p className="text-base sm:text-lg leading-relaxed">
                My journey in web development started with a curiosity for how
                things work online, which quickly turned into a lifelong
                passion. I love learning new technologies and implementing them
                to create innovative solutions.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-300 border border-gray-100"
                >
                  <stat.icon className="text-gray-800 text-2xl sm:text-3xl mx-auto mb-2" />
                  <div className="text-xl sm:text-2xl font-bold text-gray-900">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-500">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Skills */}
            <div className="space-y-4 pt-4">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Technologies I Work With
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-300 border border-gray-100"
                  >
                    <FaCheckCircle className="text-green-600 text-sm" />
                    <span className="text-gray-700 text-sm sm:text-base">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
