import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import LogoLoop from '../LogoLoop/LogoLoop';
import { FaCode, FaNpm } from 'react-icons/fa';
import { VscCode } from 'react-icons/vsc';
import {
  SiPython,
  SiPytorch,
  SiTensorflow,
  SiScikitlearn,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTailwindcss,
  SiBootstrap,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiPostman,
  SiFigma,
  SiRedux
} from "react-icons/si";


const TechLogoBar = () => {

const techLogos = [
  // Frontend Core
  {
    node: <SiHtml5 className="text-[#E34F26]" />,
    title: "HTML5",
    href: "https://developer.mozilla.org/en-US/docs/Web/HTML"
  },
  {
    node: <SiCss3 className="text-[#1572B6]" />,
    title: "CSS3",
    href: "https://developer.mozilla.org/en-US/docs/Web/CSS"
  },
  {
    node: <SiJavascript className="text-[#F7DF1E]" />,
    title: "JavaScript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
  },

  // Frameworks & Libraries
  {
    node: <SiReact className="text-[#61DAFB]" />,
    title: "React",
    href: "https://react.dev"
  },
  {
    node: <SiNextdotjs className="text-white" />,
    title: "Next.js",
    href: "https://nextjs.org"
  },
  {
    node: <SiRedux className="text-[#764ABC]" />,
    title: "Redux",
    href: "https://redux.js.org"
  },

  // CSS Frameworks
  {
    node: <SiTailwindcss className="text-[#06B6D4]" />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com"
  },
  {
    node: <SiBootstrap className="text-[#7952B3]" />,
    title: "Bootstrap",
    href: "https://getbootstrap.com"
  },

  // Backend
  {
    node: <SiNodedotjs className="text-[#339933]" />,
    title: "Node.js",
    href: "https://nodejs.org"
  },
  {
    node: <SiExpress className="text-white" />,
    title: "Express.js",
    href: "https://expressjs.com"
  },
  {
    node: <FaNpm className="text-[#CB3837]" />,
    title: "NPM",
    href: "https://www.npmjs.com"
  },

  // Databases
  {
    node: <SiMongodb className="text-[#47A248]" />,
    title: "MongoDB",
    href: "https://www.mongodb.com"
  },
  {
    node: <SiFirebase className="text-[#FFCA28]" />,
    title: "Firebase",
    href: "https://firebase.google.com"
  },
  {
    node: <SiPostgresql className="text-[#4169E1]" />,
    title: "PostgreSQL",
    href: "https://www.postgresql.org"
  },

  // AI/ML
  {
    node: <SiPython className="text-[#3776AB]" />,
    title: "Python",
    href: "https://www.python.org"
  },
  {
    node: <SiTensorflow className="text-[#FF6F00]" />,
    title: "TensorFlow",
    href: "https://www.tensorflow.org"
  },
  {
    node: <SiPytorch className="text-[#EE4C2C]" />,
    title: "PyTorch",
    href: "https://pytorch.org"
  },
  {
    node: <SiScikitlearn className="text-[#F7931E]" />,
    title: "Scikit-learn",
    href: "https://scikit-learn.org"
  },

  // Tools & Platforms
  {
    node: <SiGit className="text-[#F05032]" />,
    title: "Git",
    href: "https://git-scm.com"
  },
  {
    node: <SiGithub className="text-white" />,
    title: "GitHub",
    href: "https://github.com"
  },
  {
    node: <VscCode className="text-[#007ACC]" />,
    title: "VS Code",
    href: "https://code.visualstudio.com"
  },
  {
    node: <SiPostman className="text-[#FF6C37]" />,
    title: "Postman",
    href: "https://www.postman.com"
  },
  {
    node: <SiFigma className="text-[#F24E1E]" />,
    title: "Figma",
    href: "https://www.figma.com"
  },
];


  return (
    <div className='max-w-[1240px] mx-auto my-8 md:my-16 px-4'>
      {/* Section Heading */}
      {/* <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <div className="w-fit mx-auto py-[6px] px-[20px] flex items-center justify-center bg-[#282732] gap-2 rounded-[16px] mb-4">
          <FaCode className="text-purple-400" />
          <h3 className="text-sm md:text-base">Technologies I Use</h3>
        </div>
        <h2 className="text-2xl md:text-4xl text-center font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-green-400 bg-clip-text text-transparent">
          Tech Stack & Tools
        </h2>
      </motion.div> */}

      {/* Glassmorphism Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative rounded-2xl bg-gradient-to-br from-[#0E0E10] to-[#1a1a1f] border border-gray-700/30 overflow-hidden"
      >
        {/* Gradient Glow */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl" />
        </div>

        {/* Logo Loop Container */}
        <div className="relative py-8 md:py-12">
          <LogoLoop
            logos={techLogos}
            speed={40}
            direction="left"
            logoHeight={56}
            gap={48}
            pauseOnHover
            scaleOnHover
            fadeOut
            fadeOutColor="#0E0E10"
            ariaLabel="Technology stack and tools"
          />
        </div>

        {/* Bottom Accent Line */}
        <div className="h-1 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
      </motion.div>

      {/* Optional Tech Categories */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-6 flex flex-wrap gap-2 justify-center"
      >
        {['Frontend', 'Backend', 'Database', 'AI/ML', 'Tools'].map((category) => (
          <span
            key={category}
            className="px-3 py-1 text-xs md:text-sm bg-white/5 backdrop-blur-sm border border-gray-700/30 rounded-full text-gray-400 hover:text-white hover:border-purple-500/50 transition-all duration-300"
          >
            {category}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default TechLogoBar;