"use client";
import React, {
  useEffect,
  useRef,
  useState,
  useMemo,
  useLayoutEffect,
} from "react";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaHeart,
  FaStar,
  FaEye,
} from "react-icons/fa";
import ProjectModal from "@/components/ProjectModal";

// Type definitions
interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  technologies: string[];
  githubLink: string | null; // Can be null
  liveLink: string | null; // Can be null
  featured: boolean;
}

const Projects = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [likedProjects, setLikedProjects] = useState<number[]>([]);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  const projects: Project[] = useMemo(
    () => [
      {
        id: 1,
        title: "E-Commerce Platform",
        description:
          "A full-featured e-commerce platform with cart, wishlist, payment integration, and admin dashboard.",
        fullDescription:
          "A comprehensive e-commerce solution built using the MERN stack (MongoDB, Express.js, React, Node.js) along with Tailwind CSS for modern UI design. The platform includes secure user authentication, product and inventory management, shopping cart, wishlist functionality, and Stripe payment integration. It also features an admin dashboard for managing users, products, and orders. The application is fully responsive, optimized for performance, and supports real-time updates and email notifications.",
        image: "/gadget.png",
        technologies: [
          "React.js",
          "Typescript",
          "Node.js",
          "Express.js",
          "MongoDB",
          "Tailwind CSS",
        ],
        githubLink: "https://github.com/67sazzadhossen/gadgetbd_client",
        liveLink: "https://gadgetbd-client.vercel.app/",
        featured: true,
      },
      {
        id: 2,
        title: "Spot Booking System",
        description:
          "A modern spot booking platform built with Next.js, allowing users to explore, reserve, and pay for spots with real-time availability.",
        fullDescription:
          "A full-stack spot booking system built with Next.js for optimized performance and seamless user experience. The platform allows users to browse available spots with detailed information, images, pricing, and real-time availability. Users can book spots instantly and complete secure transactions using Stripe payment integration.\n\nThe system includes authentication and role-based access control, enabling admins to add, update, and manage spots, monitor bookings, and control user activities through a dedicated dashboard. Key features include advanced search and filtering, booking history, real-time updates, and a fully responsive UI built with Tailwind CSS. The application is optimized with server-side rendering (SSR) and efficient data fetching, ensuring fast load times and scalability.",
        image: "toorizta.png",
        technologies: [
          "Next.js",
          "Typescript",
          "React.js",
          "Node.js",
          "Express.js",
          "MongoDB",
          "Stripe",
          "Tailwind CSS",
        ],
        githubLink: null,
        liveLink: "https://toorizta-client.vercel.app/",
        featured: true,
      },
      {
        id: 3,
        title: "Salon Management System",
        description:
          "A smart salon management platform with service booking, billing workflow, and digital customer profiles using QR/NFC.",
        fullDescription:
          "A full-featured salon management system built with modern technologies to streamline daily salon operations. The platform allows admins to add and manage services, pricing, and staff efficiently. Managers and cutters can generate bills for completed services, which are then reviewed and approved by admins or accountants, ensuring a structured financial workflow.\n\nThe system includes secure payment integration, allowing seamless transactions. Customers are provided with digital profiles that can be accessed instantly via QR code or NFC card scanning. Through their profiles, customers can view service history, expenses, and visit records.\n\nOn the admin side, the platform offers powerful financial tracking and reporting tools, enabling accurate expense calculation, revenue monitoring, and overall business insights. Key features include role-based access control, real-time data updates, responsive UI, and a scalable architecture designed for modern salon businesses.",
        image: "luxur.png",
        technologies: [
          "Next.js",
          "Typescript",
          "Node.js",
          "Express.js",
          "Redux Toolkit",
          "Redux Persist",
          "MongoDB",
          "Mongoose",
          "Prisma",
          "Tailwind CSS",
        ],
        githubLink: null,
        liveLink: "https://www.luxurmen.com/",
        featured: true,
      },
      {
        id: 4,
        title: "School Management & Smart Attendance System",
        description:
          "An advanced school management system with real-time attendance tracking using biometric devices and smart state management.",
        fullDescription:
          "A full-stack school management system built to automate attendance tracking, academic monitoring, and financial operations. The system integrates biometric devices (fingerprint, face recognition, and RFID/NFC cards), which instantly send data to the server whenever a student or teacher checks in or out.\n\nReal-time SMS notifications are automatically sent to guardians upon entry and exit, ensuring safety and transparency. Each student has a dedicated profile where guardians can monitor attendance history, academic performance, and payment records.\n\nTeachers can add daily subject-wise performance, which is instantly reflected in the student’s profile. The platform also includes a complete account management system with bKash payment integration for handling fees and transactions.\n\nOn the frontend, Redux Toolkit and Redux Persist are used for efficient global state management and data persistence, ensuring a smooth and optimized user experience. The backend is powered by Node.js and Express.js with MongoDB for scalable data storage.\n\nAdmins have full control via a centralized dashboard to manage students, teachers, attendance, payments, and reports. The system is designed with role-based access control, real-time updates, and a responsive UI for seamless use across devices.",
        image: "/gscam.png",
        technologies: [
          "React.js",
          "Redux Toolkit",
          "Redux Persist",
          "Node.js",
          "Express.js",
          "MongoDB",
          "bKash Payment Gateway",
          "Biometric Integration",
          "Tailwind CSS",
        ],
        githubLink: null,
        liveLink: "https://www.gscam.edu.bd/",
        featured: true,
      },
      {
        id: 5,
        title: "Freelance Marketplace Platform",
        description:
          "A full-stack freelance marketplace where clients can post jobs with payment and freelancers can complete tasks and withdraw earnings.",
        fullDescription:
          "A full-stack freelance marketplace platform inspired by Fiverr, built to connect clients and freelancers in a seamless ecosystem. Clients can create and publish job posts by making a secure payment through Stripe, ensuring commitment and reducing spam.\n\nFreelancers can browse available jobs, submit proposals, and complete assigned tasks. Once a job is successfully delivered and reviewed by the client, the system processes earnings, allowing freelancers to withdraw their balance securely.\n\nThe platform includes JWT-based authentication for secure user access, role-based workflows (client & freelancer), and protected routes. Axios is used for efficient API communication, while the backend is powered by Node.js and Express.js with MongoDB for scalable data storage.\n\nKey features include job posting with payment validation, order lifecycle management (pending → in progress → delivered → reviewed), user reviews and ratings, secure withdrawal system, and responsive UI for smooth user experience.",
        image: "/gigzoom.png",
        technologies: [
          "React.js",
          "Node.js",
          "Express.js",
          "MongoDB",
          "JWT Authentication",
          "Stripe Payment",
          "Axios",
          "Tailwind CSS",
        ],
        githubLink: "https://github.com/67sazzadhossen/gigzoom",
        liveLink: "https://gigzoom.web.app/",
        featured: false,
      },
      {
        id: 6,
        title: "Volunteer Management Platform",
        description:
          "A platform where organizations can post volunteer needs and users can join events with real-time slot tracking.",
        fullDescription:
          "A full-stack volunteer management platform designed to connect organizations with volunteers efficiently. Organizations can create posts specifying the number of volunteers required, event details, and scheduled dates.\n\nUsers can browse available opportunities and join as volunteers. When a user joins an event, the system automatically updates the remaining slots in real-time, ensuring accurate tracking of required volunteers.\n\nThe platform includes secure JWT-based authentication, protected routes, and seamless API communication using Axios. The backend is built with Node.js and Express.js, providing scalable and efficient data handling.\n\nKey features include dynamic volunteer slot management, event scheduling, user participation tracking, and a responsive UI for smooth user experience across devices.",
        image: "volunteer.png",
        technologies: [
          "React.js",
          "Node.js",
          "Express.js",
          "MongoDB",
          "JWT Authentication",
          "Axios",
          "Tailwind CSS",
        ],
        githubLink: "https://github.com/67sazzadhossen/Volunteer-Avenue-Client",
        liveLink: "https://volunteer-avenue.web.app/",
        featured: false,
      },
    ],
    [],
  );

  const handleLike = (projectId: number) => {
    setLikedProjects((prev) =>
      prev.includes(projectId)
        ? prev.filter((id) => id !== projectId)
        : [...prev, projectId],
    );
  };

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  useLayoutEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <section
        id="projects"
        className="min-h-screen py-20 lg:py-28 bg-gradient-to-br from-gray-50 to-white"
      >
        <div className="w-full px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 rounded w-32 mx-auto mb-4"></div>
              <div className="h-12 bg-gray-200 rounded w-64 mx-auto mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-96 mx-auto"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section
        id="projects"
        ref={sectionRef}
        className="min-h-screen py-20 lg:py-28 bg-gradient-to-br from-gray-50 to-white"
      >
        <div className="w-full px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
          {/* Section Header */}
          <div className="text-center mb-12 lg:mb-16">
            <span className="inline-block px-4 py-2 bg-gray-900 text-white rounded-full text-sm font-medium tracking-wide mb-4 shadow-lg">
              My Portfolio
            </span>
            <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
            <p className="text-gray-600 text-lg mt-6 max-w-3xl mx-auto">
              Here are some of my best works. Each project is built with passion
              and attention to detail.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
                onMouseEnter={() => setHoveredCard(project.id)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s forwards`,
                  opacity: 0,
                  transform: "translateY(30px)",
                }}
              >
                {/* Image Container */}
                <div className="relative h-56 overflow-hidden bg-gray-100">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10"></div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 left-4 z-20">
                      <span className="px-3 py-1.5 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full text-xs font-semibold text-white shadow-lg flex items-center gap-1">
                        <FaStar size={12} /> Featured
                      </span>
                    </div>
                  )}

                  {/* Overlay on hover - hanya tampilkan jika ada link */}
                  {(project.githubLink || project.liveLink) && (
                    <div
                      className={`absolute inset-0 bg-black/70 z-20 flex items-center justify-center gap-4 transition-all duration-500 ${
                        hoveredCard === project.id ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      {project.githubLink && (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-white rounded-full hover:bg-gray-100 transition-colors duration-300 transform hover:scale-110"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FaGithub size={24} className="text-gray-900" />
                        </a>
                      )}
                      {project.liveLink && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-white rounded-full hover:bg-gray-100 transition-colors duration-300 transform hover:scale-110"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FaExternalLinkAlt
                            size={22}
                            className="text-gray-900"
                          />
                        </a>
                      )}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">
                      {project.title}
                    </h3>
                    <button
                      onClick={() => handleLike(project.id)}
                      className="flex-shrink-0"
                    >
                      <FaHeart
                        size={20}
                        className={`transition-all duration-300 ${
                          likedProjects.includes(project.id)
                            ? "text-red-500 fill-current transform scale-110"
                            : "text-gray-400 hover:text-red-400"
                        }`}
                      />
                    </button>
                  </div>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2.5 py-1 bg-gray-100 rounded-md text-xs font-medium text-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2.5 py-1 bg-gray-100 rounded-md text-xs font-medium text-gray-700">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* View Details Button */}
                  <button
                    onClick={() => openModal(project)}
                    className="w-full mt-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                  >
                    <FaEye size={16} />
                    <span>View Details</span>
                  </button>
                </div>
              </div>
            ))}
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

          .line-clamp-1 {
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }

          .line-clamp-2 {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
        `}</style>
      </section>

      {/* Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </>
  );
};

export default Projects;
