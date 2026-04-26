"use client";
import React, {
  useEffect,
  useRef,
  useMemo,
  useState,
  useLayoutEffect,
} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiGraphql,
  SiMongodb,
  SiPostgresql,
} from "react-icons/si";

// Register ScrollTrigger only on client side
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Type definitions
interface TechnicalSkill {
  name: string;
  percentage: number;
  icon: React.ElementType;
  color: string;
}

interface ExperienceItem {
  skill: string;
  percentage: number;
}

const SkillSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const skillsGridRef = useRef<HTMLDivElement | null>(null);
  const softSkillsRef = useRef<HTMLDivElement | null>(null);
  const experienceRef = useRef<HTMLDivElement | null>(null);
  const circleRefs = useRef<(HTMLDivElement | null)[]>([]);
  const progressBarRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  // Move technicalSkills inside useMemo to prevent recreation on every render
  const technicalSkills: TechnicalSkill[] = useMemo(
    () => [
      { name: "React.js", percentage: 90, icon: FaReact, color: "#61DAFB" },
      { name: "Next.js", percentage: 85, icon: SiNextdotjs, color: "#FFFFFF" },
      {
        name: "JavaScript",
        percentage: 92,
        icon: FaJsSquare,
        color: "#F7DF1E",
      },
      {
        name: "TypeScript",
        percentage: 80,
        icon: SiTypescript,
        color: "#3178C6",
      },
      { name: "Node.js", percentage: 88, icon: FaNodeJs, color: "#339933" },
      {
        name: "Tailwind CSS",
        percentage: 85,
        icon: SiTailwindcss,
        color: "#06B6D4",
      },
      { name: "MongoDB", percentage: 82, icon: SiMongodb, color: "#47A248" },
      {
        name: "PostgreSQL",
        percentage: 78,
        icon: SiPostgresql,
        color: "#4169E1",
      },
      { name: "GraphQL", percentage: 75, icon: SiGraphql, color: "#E10098" },
      { name: "HTML5", percentage: 95, icon: FaHtml5, color: "#E34F26" },
      { name: "CSS3", percentage: 88, icon: FaCss3Alt, color: "#1572B6" },
      { name: "Git", percentage: 85, icon: FaGitAlt, color: "#F05032" },
    ],
    [],
  );

  const softSkills: string[] = useMemo(
    () => [
      "Problem Solving",
      "Team Collaboration",
      "Communication",
      "Time Management",
      "Critical Thinking",
      "Adaptability",
      "Leadership",
      "Creativity",
    ],
    [],
  );

  const experienceData: ExperienceItem[] = useMemo(
    () => [
      { skill: "Frontend Development", percentage: 92 },
      { skill: "Backend Development", percentage: 85 },
      { skill: "Database Management", percentage: 80 },
      { skill: "UI/UX Design", percentage: 75 },
      { skill: "DevOps & Deployment", percentage: 70 },
    ],
    [],
  );

  // Set mounted state using useLayoutEffect to avoid cascade
  useLayoutEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMounted(true);
  }, []);

  // Setup GSAP animations
  useEffect(() => {
    if (!isMounted || typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      // Header animation
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { opacity: 0, y: -50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 80%",
              end: "bottom 60%",
              toggleActions: "play none none reverse",
            },
          },
        );
      }

      // Circle skills animation with stagger
      if (skillsGridRef.current) {
        const circles = circleRefs.current.filter((circle) => circle !== null);
        gsap.fromTo(
          circles,
          { opacity: 0, scale: 0.5, rotate: -180 },
          {
            opacity: 1,
            scale: 1,
            rotate: 0,
            duration: 0.8,
            stagger: 0.08,
            ease: "back.out(1.2)",
            scrollTrigger: {
              trigger: skillsGridRef.current,
              start: "top 80%",
              end: "bottom 60%",
              toggleActions: "play none none reverse",
            },
            onUpdate: function () {
              circles.forEach((circle, idx) => {
                const percentage = technicalSkills[idx]?.percentage || 0;
                const progressCircle = circle.querySelector(".progress-circle");
                if (progressCircle) {
                  // Get radius based on screen size
                  const isMobile = window.innerWidth < 640;
                  const radius = isMobile ? 50 : 80;
                  const circumference = 2 * Math.PI * radius;
                  const offset =
                    circumference - (percentage / 100) * circumference;
                  gsap.to(progressCircle, {
                    strokeDashoffset: offset,
                    duration: 1.5,
                    ease: "power2.out",
                  });
                }
              });
            },
          },
        );
      }

      // Soft skills animation
      if (softSkillsRef.current) {
        const softSkillItems =
          softSkillsRef.current.querySelectorAll(".soft-skill-item");
        gsap.fromTo(
          softSkillItems,
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            stagger: 0.05,
            ease: "power2.out",
            scrollTrigger: {
              trigger: softSkillsRef.current,
              start: "top 80%",
              end: "bottom 60%",
              toggleActions: "play none none reverse",
            },
          },
        );
      }

      // Experience bars animation
      if (experienceRef.current) {
        const progressBars = progressBarRefs.current.filter(
          (bar) => bar !== null,
        );
        gsap.fromTo(
          progressBars,
          { width: "0%" },
          {
            width: (index) => `${experienceData[index]?.percentage || 0}%`,
            duration: 1.2,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: experienceRef.current,
              start: "top 80%",
              end: "bottom 60%",
              toggleActions: "play none none reverse",
            },
          },
        );
      }

      // Floating animation for icons inside circles
      circleRefs.current.forEach((circle) => {
        if (circle) {
          const icon = circle.querySelector(".skill-icon");
          if (icon) {
            gsap.to(icon, {
              y: -5,
              duration: 2,
              repeat: -1,
              yoyo: true,
              ease: "power1.inOut",
            });
          }
        }
      });
    }, sectionRef);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [isMounted, technicalSkills, experienceData]);

  // Circle Progress Component with responsive sizing
  const CircleProgress = ({
    percentage,
    icon: Icon,
    color,
    name,
    index,
  }: {
    percentage: number;
    icon: React.ElementType;
    color: string;
    name: string;
    index: number;
  }) => {
    // Responsive radius values
    const getRadius = () => {
      if (typeof window !== "undefined") {
        if (window.innerWidth < 480) return 35; // xs screens
        if (window.innerWidth < 640) return 40; // sm screens
        if (window.innerWidth < 768) return 50; // md screens
        if (window.innerWidth < 1024) return 60; // lg screens
        return 70; // xl and above
      }
      return 70; // default
    };

    const radius = getRadius();
    const circumference = 2 * Math.PI * radius;

    // Responsive icon sizes
    const getIconSize = () => {
      if (typeof window !== "undefined") {
        if (window.innerWidth < 480) return "text-lg";
        if (window.innerWidth < 640) return "text-xl";
        if (window.innerWidth < 768) return "text-2xl";
        return "text-2xl sm:text-3xl md:text-4xl";
      }
      return "text-2xl sm:text-3xl md:text-4xl";
    };

    // Responsive text sizes
    const getTextSize = () => {
      if (typeof window !== "undefined") {
        if (window.innerWidth < 480) return "text-base";
        if (window.innerWidth < 640) return "text-lg";
        if (window.innerWidth < 768) return "text-xl";
        return "text-lg sm:text-xl md:text-2xl";
      }
      return "text-lg sm:text-xl md:text-2xl";
    };

    // Responsive container sizes
    const getContainerSize = () => {
      if (typeof window !== "undefined") {
        if (window.innerWidth < 480) return "w-20 h-20"; // xs: 80px
        if (window.innerWidth < 640) return "w-24 h-24"; // sm: 96px
        if (window.innerWidth < 768) return "w-28 h-28"; // md: 112px
        if (window.innerWidth < 1024) return "w-32 h-32"; // lg: 128px
        return "w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40";
      }
      return "w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40";
    };

    // Responsive stroke width
    const getStrokeWidth = () => {
      if (typeof window !== "undefined") {
        if (window.innerWidth < 480) return 5;
        if (window.innerWidth < 640) return 6;
        if (window.innerWidth < 768) return 7;
        return 8;
      }
      return 8;
    };

    const strokeWidth = getStrokeWidth();

    return (
      <div
        ref={(el) => {
          circleRefs.current[index] = el;
        }}
        className="flex flex-col items-center group"
        style={{ opacity: isMounted ? 1 : 0 }}
      >
        <div className={`relative ${getContainerSize()}`}>
          <svg className="w-full h-full transform -rotate-90">
            {/* Background Circle */}
            <circle
              cx="50%"
              cy="50%"
              r={radius}
              stroke="#333333"
              strokeWidth={strokeWidth}
              fill="none"
            />
            {/* Progress Circle */}
            <circle
              cx="50%"
              cy="50%"
              r={radius}
              stroke={color}
              strokeWidth={strokeWidth}
              fill="none"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={circumference}
              className="progress-circle"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <Icon
              className={`${getIconSize()} mb-1 transition-transform duration-300 group-hover:scale-110`}
              style={{ color }}
            />
            <span className={`${getTextSize()} font-bold text-white`}>
              {percentage}%
            </span>
          </div>
        </div>
        <h3 className="mt-2 text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-gray-300 text-center transition-colors duration-300 group-hover:text-white">
          {name}
        </h3>
      </div>
    );
  };

  // Return loading state on server
  if (!isMounted) {
    return (
      <section
        id="skills"
        className="min-h-screen py-20 lg:py-28 bg-black overflow-hidden"
      >
        <div className="w-full px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-white/10 rounded w-32 mx-auto mb-4"></div>
              <div className="h-12 bg-white/10 rounded w-64 mx-auto mb-4"></div>
              <div className="h-4 bg-white/10 rounded w-96 mx-auto"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="min-h-screen py-20 lg:py-28 bg-black overflow-hidden"
    >
      <div className="w-full px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
        {/* Section Header */}
        <div
          ref={headerRef}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
          style={{ opacity: 0 }}
        >
          <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-white/5 rounded-full text-xs sm:text-sm font-medium text-gray-300 tracking-wide mb-3 sm:mb-4 hover:bg-white/10 transition-all duration-300">
            My Skills
          </span>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            What I Bring to the Table
          </h2>
          <div className="w-16 sm:w-20 h-0.5 sm:h-1 bg-white/20 mx-auto mt-3 sm:mt-4 relative overflow-hidden">
            <div className="absolute top-0 left-0 h-full bg-white"></div>
          </div>
          <p className="text-gray-400 text-sm sm:text-base lg:text-lg mt-4 sm:mt-6 max-w-3xl mx-auto px-4">
            I&apos;ve worked with a variety of technologies and tools to build
            modern web applications
          </p>
        </div>

        {/* Technical Skills Grid */}
        <div
          ref={skillsGridRef}
          className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4 md:gap-6 lg:gap-12 mb-12 sm:mb-16"
        >
          {technicalSkills.map((skill, index) => (
            <CircleProgress
              key={`${skill.name}-${index}`}
              percentage={skill.percentage}
              icon={skill.icon}
              color={skill.color}
              name={skill.name}
              index={index}
            />
          ))}
        </div>

        {/* Soft Skills Section */}
        <div ref={softSkillsRef} className="mt-12 sm:mt-16">
          <div className="text-center mb-6 sm:mb-10">
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 sm:mb-4">
              Professional Skills
            </h3>
            <p className="text-gray-400 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto px-4">
              Beyond technical expertise, I bring these valuable qualities to
              every project
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4">
            {softSkills.map((skill, index) => (
              <div
                key={`${skill}-${index}`}
                className="soft-skill-item group relative"
              >
                <div className="px-3 sm:px-4 md:px-5 lg:px-6 py-1.5 sm:py-2 md:py-2.5 lg:py-3 bg-white/5 rounded-full border border-white/10 hover:border-white/30 transition-all duration-300 cursor-pointer hover:bg-white/10 hover:scale-105">
                  <span className="text-gray-300 group-hover:text-white font-medium text-xs sm:text-sm md:text-base">
                    {skill}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Bar Section */}
        <div
          ref={experienceRef}
          className="mt-12 sm:mt-16 md:mt-20 bg-white/5 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 border border-white/10 hover:border-white/20 transition-all duration-500"
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white text-center mb-6 sm:mb-8">
            Development Experience
          </h3>
          <div className="space-y-4 sm:space-y-5 md:space-y-6 max-w-4xl mx-auto px-2 sm:px-4">
            {experienceData.map((item, index) => (
              <div key={`${item.skill}-${index}`}>
                <div className="flex justify-between mb-1 sm:mb-2">
                  <span className="text-gray-300 font-medium text-xs sm:text-sm md:text-base">
                    {item.skill}
                  </span>
                  <span className="text-gray-400 text-xs sm:text-sm md:text-base">
                    {item.percentage}%
                  </span>
                </div>
                <div className="h-2 sm:h-2.5 md:h-3 bg-white/10 rounded-full overflow-hidden">
                  <div
                    ref={(el) => {
                      progressBarRefs.current[index] = el;
                    }}
                    className="h-full bg-gradient-to-r from-white to-gray-400 rounded-full relative overflow-hidden"
                    style={{ width: "0%" }}
                  >
                    <div className="absolute inset-0 bg-white/20 shimmer"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </section>
  );
};

export default SkillSection;
