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
  githubLink: string;
  liveLink: string;
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
          "A comprehensive e-commerce solution built with modern technologies. Features include user authentication, product management, shopping cart, wishlist, secure payment integration with Stripe, order tracking, and an admin dashboard for managing products, orders, and users. The platform is fully responsive and optimized for performance, with real-time inventory management and email notifications.",
        image:
          "https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop",
        technologies: [
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
          "MongoDB",
          "Stripe",
          "Redux Toolkit",
        ],
        githubLink: "https://github.com/yourusername/project1",
        liveLink: "https://project1.com",
        featured: true,
      },
      {
        id: 2,
        title: "Task Management App",
        description:
          "Collaborative task management tool with real-time updates, drag-and-drop, and team features.",
        fullDescription:
          "A powerful task management application designed for teams. Includes real-time updates via WebSockets, drag-and-drop task organization, team workspaces, task assignments, deadlines, comments, file attachments, and progress tracking. The app features dark mode, keyboard shortcuts, and integration with Google Calendar.",
        image:
          "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop",
        technologies: [
          "React",
          "Node.js",
          "Socket.io",
          "PostgreSQL",
          "Tailwind CSS",
          "DND Kit",
        ],
        githubLink: "https://github.com/yourusername/project2",
        liveLink: "https://project2.com",
        featured: true,
      },
      {
        id: 3,
        title: "AI Content Generator",
        description: "AI-powered content generation platform using OpenAI API.",
        fullDescription:
          "An innovative content generation platform powered by OpenAI's GPT-4. Users can generate blog posts, social media content, product descriptions, and more. Features include content templates, SEO optimization suggestions, multiple language support, content history, and export options (PDF, DOCX, HTML). The platform also includes a built-in text editor with formatting options.",
        image:
          "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
        technologies: [
          "Next.js",
          "OpenAI API",
          "Tailwind CSS",
          "Prisma",
          "PostgreSQL",
          "TipTap Editor",
        ],
        githubLink: "https://github.com/yourusername/project3",
        liveLink: "https://project3.com",
        featured: true,
      },
      {
        id: 4,
        title: "Weather Dashboard",
        description:
          "Real-time weather dashboard with interactive maps and forecasts.",
        fullDescription:
          "A comprehensive weather application providing real-time weather data, 7-day forecasts, interactive maps, and severe weather alerts. Features include location search, saved locations, temperature unit conversion, animated weather icons, air quality index, UV index, and precipitation radar. The app uses multiple weather APIs for accurate data and includes beautiful data visualizations.",
        image:
          "https://images.unsplash.com/photo-1592210454359-9043ad06720b?w=600&h=400&fit=crop",
        technologies: [
          "React",
          "OpenWeather API",
          "Chart.js",
          "Leaflet Maps",
          "Axios",
          "CSS3",
        ],
        githubLink: "https://github.com/yourusername/weather-app",
        liveLink: "https://weather-app.com",
        featured: false,
      },
      {
        id: 5,
        title: "Social Media API",
        description:
          "RESTful API for social media platform with authentication and real-time features.",
        fullDescription:
          "A robust RESTful API backend for a social media platform. Features include JWT authentication, user profiles, posts, comments, likes, followers system, real-time notifications using WebSockets, file uploads, and rate limiting. The API is fully documented with Swagger/OpenAPI, includes comprehensive error handling, input validation, and follows REST best practices.",
        image:
          "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&h=400&fit=crop",
        technologies: [
          "Node.js",
          "Express",
          "MongoDB",
          "JWT",
          "Socket.io",
          "Multer",
          "Swagger",
        ],
        githubLink: "https://github.com/yourusername/social-api",
        liveLink: "https://api-docs.com",
        featured: false,
      },
      {
        id: 6,
        title: "Fitness Tracker App",
        description:
          "Mobile fitness tracking app with workout plans and progress tracking.",
        fullDescription:
          "A cross-platform mobile fitness application built with React Native. Features include personalized workout plans, exercise library with video demonstrations, progress tracking with charts, step counter, calorie tracking, water intake reminders, and social features to share achievements. The app syncs with Apple HealthKit and Google Fit, and includes data export functionality.",
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
        technologies: [
          "React Native",
          "Firebase",
          "Redux Toolkit",
          "HealthKit",
          "Google Fit API",
          "Victory Native",
        ],
        githubLink: "https://github.com/yourusername/fitness-app",
        liveLink: "https://fitness-app.com",
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

                  {/* Overlay on hover */}
                  <div
                    className={`absolute inset-0 bg-black/70 z-20 flex items-center justify-center gap-4 transition-all duration-500 ${
                      hoveredCard === project.id ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white rounded-full hover:bg-gray-100 transition-colors duration-300 transform hover:scale-110"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FaGithub size={24} className="text-gray-900" />
                    </a>
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white rounded-full hover:bg-gray-100 transition-colors duration-300 transform hover:scale-110"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FaExternalLinkAlt size={22} className="text-gray-900" />
                    </a>
                  </div>
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
