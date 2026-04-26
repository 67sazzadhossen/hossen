"use client";
import AboutSection from "@/sections/LandingPage/AboutSection";
import Contact from "@/sections/LandingPage/Contact";
import Herosection from "@/sections/LandingPage/Herosection";
import Projects from "@/sections/LandingPage/Projects";
import SkillSection from "@/sections/LandingPage/SkillSection";
import React from "react";

const LandingPage = () => {
  return (
    <div>
      <Herosection />
      <AboutSection />
      <SkillSection />
      <Projects />
      <Contact />
    </div>
  );
};

export default LandingPage;
