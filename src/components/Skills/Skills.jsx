import React, { forwardRef } from "react";
import { FaHandsHelping, FaCode, FaServer, FaTools, FaCloud } from "react-icons/fa";
import { FaReact, FaNodeJs, FaGitAlt, FaGithub, FaDatabase, FaHtml5, FaBolt, FaRocket } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript, IoLogoFirebase } from "react-icons/io5";
import { TbBrandNextjs, TbApi } from "react-icons/tb";
import { SiReactrouter, SiExpress, SiMongodb, SiVercel, SiNetlify, SiRender, SiAnthropic } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
import { MdDesignServices, MdSecurity } from "react-icons/md";
import { VscCode } from "react-icons/vsc";
import AnimatedContent from "../AnimatedContent/AnimatedContent";
import GlareHover from "../GlareHover/GlareHover";

// Skills data organized by category
const skillsData = [
  {
    category: "Frontend Development",
    icon: FaCode,
    iconColor: "#7C3AED",
    skills: [
      { name: "JavaScript (ES6+)", icon: IoLogoJavascript, color: "#F7DF1E" },
      { name: "React", icon: FaReact, color: "#61dafb" },
      { name: "Next.js", icon: TbBrandNextjs, color: "#FFFFFF" },
      { name: "React Router", icon: SiReactrouter, color: "#CA4245" },
      { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
      { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
      { name: "Tailwind CSS", icon: RiTailwindCssFill, color: "#61dafb" },
      { name: "Responsive UI/UX", icon: MdDesignServices, color: "#7C3AED" },
    ],
  },
  {
    category: "Backend Development",
    icon: FaServer,
    iconColor: "#10B981",
    skills: [
      { name: "Node.js", icon: FaNodeJs, color: "#339933" },
      { name: "Express.js", icon: SiExpress, color: "#FFFFFF" },
      { name: "REST APIs", icon: TbApi, color: "#3B82F6" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "Firebase", icon: IoLogoFirebase, color: "#FFCA28" },
      { name: "Authentication", icon: MdSecurity, color: "#F97316" },
      { name: "CRUD Operations", icon: FaDatabase, color: "#3B82F6" },
    ],
  },
  {
    category: "AI & Developer Tools",
    icon: FaTools,
    iconColor: "#EC4899",
    skills: [
      { name: "Cursor", icon: VscCode, color: "#3B82F6" },
      { name: "Claude", icon: SiAnthropic, color: "#F97316" },
      { name: "Antigravity", icon: FaRocket, color: "#7C3AED" },
    ],
  },
  {
    category: "Version Control & Deployment",
    icon: FaCloud,
    iconColor: "#3B82F6",
    skills: [
      { name: "Git", icon: FaGitAlt, color: "#F97316" },
      { name: "GitHub", icon: FaGithub, color: "#FFFFFF" },
      { name: "Vercel", icon: SiVercel, color: "#FFFFFF" },
      { name: "Render", icon: SiRender, color: "#0D9488" },
      { name: "Netlify", icon: SiNetlify, color: "#00C7B7" },
      { name: "Surge", icon: FaBolt, color: "#10B981" },
    ],
  },
];

const Skills = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="max-w-[1240px] mx-auto">
      {/* Heading */}
      <div className="mb-8 md:mb-12">
        <div className="w-fit mx-auto py-[6px] px-[20px] flex items-center justify-center bg-[#282732] gap-2 rounded-[16px]">
          <div>
            <FaHandsHelping />
          </div>
          <h3>What I Bring to the Table</h3>
        </div>
        <h1 className="text-[30px] md:text-[48px] text-center font-bold mt-2">
          SKILLS
        </h1>
      </div>

      {/* Skills Categories */}
      <div className="flex flex-col gap-4 md:gap-6">
        {skillsData.map((category, categoryIndex) => (
          <AnimatedContent
            key={category.category}
            distance={100}
            direction="vertical"
            reverse={false}
            duration={0.8}
            ease="power2.out"
            initialOpacity={0.3}
            animateOpacity
            scale={1}
            threshold={0.15}
            delay={categoryIndex * 0.2}
          >
            {/* Category Section */}
            <div className="bg-[#1C1C21] border border-gray-700/30 rounded-xl p-4 md:p-6">
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-gray-700/30">
                <category.icon
                  className="text-xl md:text-2xl"
                  style={{ color: category.iconColor }}
                />
                <h2 className="text-sm md:text-base uppercase tracking-wider text-gray-400 font-semibold">
                  {category.category}
                </h2>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2 md:gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <GlareHover
                    key={skill.name}
                    glareColor="#ffffff"
                    glareOpacity={0.3}
                    glareAngle={-30}
                    glareSize={200}
                    transitionDuration={500}
                    playOnce={false}
                    width="100%"
                    height="auto"
                    background="#282732"
                    borderRadius="12px"
                    className="hover:bg-[#2D3240] hover:scale-105 transition-transform duration-300 flex flex-col items-center justify-center p-3 skill-card"
                  >
                    <skill.icon
                      color={skill.color}
                      className="text-[24px] md:text-[32px] mb-2"
                    />
                    <h3 className="text-xs md:text-sm text-center text-gray-300 leading-tight">
                      {skill.name}
                    </h3>
                  </GlareHover>
                ))}
              </div>
            </div>
          </AnimatedContent>
        ))}
      </div>
    </div>
  );
});

Skills.displayName = "Skills";

export default Skills;
