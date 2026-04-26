"use client";
import AboutSection from "@/sections/LandingPage/AboutSection";
import Herosection from "@/sections/LandingPage/Herosection";
import SkillSection from "@/sections/LandingPage/SkillSection";
import React from "react";

const LandingPage = () => {
  return (
    <div>
      <Herosection />
      <AboutSection />
      <SkillSection />
    </div>
  );
};

export default LandingPage;
