"use client";
import React, { useEffect, useRef } from "react";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaTimes,
  FaCode,
  FaDesktop,
  FaMobile,
  FaDatabase,
  FaCheckCircle,
} from "react-icons/fa";

interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription?: string;
  image: string;
  technologies: string[];
  githubLink: string | null;
  liveLink: string | null;
  featured: boolean;
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  isOpen,
  onClose,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(e.target as Node) &&
        isOpen
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  const hasGithub = project.githubLink && project.githubLink.trim() !== "";
  const hasLiveLink = project.liveLink && project.liveLink.trim() !== "";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div
        ref={modalRef}
        className="relative bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-slideUp"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white/90 hover:bg-white rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        >
          <FaTimes className="text-gray-700" size={20} />
        </button>

        {/* Project Image */}
        <div className="relative h-64 md:h-96 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

          {/* Featured Badge */}
          {project.featured && (
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1.5 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full text-xs font-semibold text-white shadow-lg flex items-center gap-1">
                ⭐ Featured Project
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            {project.title}
          </h2>

          {/* Description */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Project Overview
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {project.fullDescription || project.description}
            </p>
          </div>

          {/* Technologies */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1.5 bg-gray-100 rounded-lg text-sm font-medium text-gray-700 flex items-center gap-1"
                >
                  <FaCheckCircle className="text-green-500" size={12} />
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              Key Features
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="flex items-center gap-2 text-gray-600">
                <FaCode className="text-blue-600" />
                <span>Clean & Maintainable Code</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <FaDesktop className="text-green-600" />
                <span>Responsive Design</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <FaMobile className="text-purple-600" />
                <span>Mobile First Approach</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <FaDatabase className="text-orange-600" />
                <span>Optimized Performance</span>
              </div>
            </div>
          </div>

          {/* Action Buttons - শুধু দেখাবে যদি লিংক থাকে */}
          {(hasGithub || hasLiveLink) && (
            <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-gray-200">
              {hasLiveLink && (
                <a
                  href={project.liveLink!}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all duration-300 hover:scale-105"
                >
                  <FaExternalLinkAlt size={18} />
                  Live Demo
                </a>
              )}
              {hasGithub && (
                <a
                  href={project.githubLink!}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-gray-900 text-gray-900 rounded-lg hover:bg-gray-900 hover:text-white transition-all duration-300 hover:scale-105 ${
                    !hasLiveLink ? "w-full" : ""
                  }`}
                >
                  <FaGithub size={20} />
                  View Code
                </a>
              )}
            </div>
          )}

          {/* যদি কোন লিংক না থাকে */}
          {!hasGithub && !hasLiveLink && (
            <div className="pt-4 border-t border-gray-200 text-center">
              <p className="text-gray-500 text-sm">
                This project is currently private. Contact me for more details.
              </p>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }

        .animate-slideUp {
          animation: slideUp 0.4s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default ProjectModal;
