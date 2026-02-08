import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import profileImg from "../../assets/cv-image-dark.jpg";
import ShinyText from "../ShinyText/ShinyText";
import { FaDownload, FaGithub, FaLinkedin } from "react-icons/fa6";
import { Code2, Sparkles } from "lucide-react";

const Banner = ({ allContentLoading }) => {
  // CV Download URL - converted from Google Drive view link to download link
  const cvDownloadUrl = "https://drive.google.com/uc?export=download&id=1A4mFM58J2FmPloOcG2Qda0_A9-k2wmpY";

  return (
    <div
      ref={allContentLoading}
      className="relative text-white w-full max-w-[1240px] mx-auto overflow-hidden rounded-xl px-3 sm:px-4 py-6 sm:py-8 md:py-12"
    >
      {/* Static Background Layer */}
      <div className="absolute inset-0 -z-10 rounded-xl overflow-hidden">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0f] via-[#16213e] to-[#1a0b2e]" />

        {/* Top-left purple orb */}
        <div
          className="absolute -top-32 md:-top-40 -left-32 md:-left-40 w-64 md:w-80 h-64 md:h-80 rounded-full blur-[100px] md:blur-[120px] opacity-40"
          style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.4) 0%, transparent 70%)' }}
        />

        {/* Bottom-right blue orb */}
        <div
          className="absolute -bottom-32 md:-bottom-40 -right-32 md:-right-40 w-72 md:w-96 h-72 md:h-96 rounded-full blur-[100px] md:blur-[120px] opacity-35"
          style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.35) 0%, transparent 70%)' }}
        />

        {/* Center green orb */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 md:w-72 h-60 md:h-72 rounded-full blur-[100px] md:blur-[120px] opacity-25"
          style={{ background: 'radial-gradient(circle, rgba(16,185,129,0.25) 0%, transparent 70%)' }}
        />

        {/* Vignette overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/20" />
      </div>

      {/* Foreground content */}
      <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-12">
        {/* Left Column - Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full lg:w-5/12 flex justify-center relative"
        >
          <div className="relative group">
            {/* Animated rotating gradient border */}
            <div className="absolute -inset-2 rounded-full opacity-75 blur-lg group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 via-blue-600 to-green-600 animate-spin-slow" />
            </div>

            {/* Outer glow pulses */}
            <div className="absolute -inset-8 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-green-600/20 rounded-full blur-3xl animate-pulse" />

            {/* Decorative rings */}
            <div className="absolute -inset-3 rounded-full border-2 border-dashed border-purple-500/30 animate-spin-slower" />
            <div className="absolute -inset-6 rounded-full border border-dotted border-blue-500/20 animate-reverse-spin" />

            {/* Main image container with glassmorphism frame */}
            <div className="relative">
              {/* Glassmorphic frame */}
              <div className="absolute -inset-4 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 shadow-2xl" />

              {/* Image with hexagonal mask effect */}
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl transform group-hover:scale-105 transition-transform duration-500">
                <img
                  src={profileImg}
                  alt="Md. Samin Israk"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                {/* Gradient overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 via-transparent to-blue-900/20" />
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-green-600/10" />

                {/* Animated spotlight effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 via-transparent to-transparent" />
                </div>
              </div>

              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-purple-500 rounded-tl-full -translate-x-2 -translate-y-2 opacity-60" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-blue-500 rounded-tr-full translate-x-2 -translate-y-2 opacity-60" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-green-500 rounded-bl-full -translate-x-2 translate-y-2 opacity-60" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-purple-500 rounded-br-full translate-x-2 translate-y-2 opacity-60" />
            </div>

            {/* Floating decorative badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 bg-gradient-to-br from-purple-500 to-blue-500 text-white px-2 py-1 sm:px-3 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-bold shadow-lg border border-white/20 sm:border-2"
            >
              ⚡ Available
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 bg-gradient-to-br from-green-500 to-blue-500 text-white px-2 py-1 sm:px-3 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-bold shadow-lg border border-white/20 sm:border-2"
            >
              🚀 Hire Me
            </motion.div>

            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 -right-6 sm:-right-8 -translate-y-1/2 hidden sm:block"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-lg border border-white/10 flex items-center justify-center shadow-lg">
                <Code2 className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
              </div>
            </motion.div>

            <motion.div
              animate={{ rotate: [360, 0] }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/4 -left-6 sm:-left-8 hidden sm:block"
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-purple-500/20 to-green-500/20 backdrop-blur-sm rounded-lg border border-white/10 flex items-center justify-center shadow-lg">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Column - Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full lg:w-7/12 flex flex-col gap-3 sm:gap-4 md:gap-6 text-center lg:text-left"
        >
          {/* Name with shiny effect */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-3"
            >
              <h1 className="text-3xl sm:text-5xl  font-bold leading-tight">
                Md. Samin Israk
              </h1>
            </motion.div>

            {/* Role Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex items-center justify-center lg:justify-start gap-2 flex-wrap"
            >
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 md:px-4 md:py-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 border-2 border-purple-500/30 rounded-full text-xs md:text-sm font-bold text-purple-300">
                <Code2 className="w-3.5 h-3.5 md:w-4 md:h-4" />
                Frontend-Focused
              </span>
              <span className="text-base md:text-lg lg:text-xl font-semibold text-gray-300">
                MERN Stack Developer
              </span>
            </motion.div>
          </div>

          {/* Concise Description */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="bg-white/5 backdrop-blur-md border border-gray-600/30 rounded-lg md:rounded-xl p-3 md:p-5"
          >
            <div className="flex items-center gap-2 mb-1.5 md:mb-2">
              <Sparkles className="w-3.5 h-3.5 md:w-4 md:h-4 text-purple-400" />
              <h3 className="text-xs uppercase tracking-wider text-purple-300 font-bold">
                About Me
              </h3>
            </div>
            <p className="text-xs sm:text-sm md:text-base leading-relaxed text-gray-200">
              Passionate about crafting responsive, user-centric web applications with modern technologies.
              Specializing in React, Next.js, and full-stack development to build scalable digital solutions.
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-2 md:gap-3 justify-center lg:justify-start"
          >
            {/* Download CV Button */}
            <motion.a
              href={cvDownloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-1.5 md:gap-2 px-4 py-2 md:px-6 md:py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-lg text-sm md:text-base font-semibold shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaDownload className="w-3.5 h-3.5 md:w-4 md:h-4 group-hover:animate-bounce" />
              <span>Download CV</span>
            </motion.a>

            {/* GitHub Button */}
            <motion.a
              href="https://github.com/Samin1362"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-1.5 md:gap-2 px-4 py-2 md:px-6 md:py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm border-2 border-gray-600/30 rounded-lg text-sm md:text-base font-semibold transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub className="w-3.5 h-3.5 md:w-4 md:h-4 group-hover:rotate-12 transition-transform" />
              <span>GitHub</span>
            </motion.a>

            {/* LinkedIn Button (Optional - you can add your LinkedIn) */}
            <motion.a
              href="https://www.linkedin.com/in/samin-israk/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-1.5 md:gap-2 px-4 py-2 md:px-6 md:py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm border-2 border-gray-600/30 rounded-lg text-sm md:text-base font-semibold transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaLinkedin className="w-3.5 h-3.5 md:w-4 md:h-4 group-hover:scale-110 transition-transform" />
              <span>LinkedIn</span>
            </motion.a>
          </motion.div>

          {/* Skills Highlight Pills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap gap-1.5 md:gap-2 justify-center lg:justify-start"
          >
            {['React', 'Next.js', 'Node.js', 'MongoDB', 'Tailwind CSS'].map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="px-2 py-0.5 md:px-3 md:py-1 bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 rounded-full text-[10px] md:text-xs font-semibold text-green-300"
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
