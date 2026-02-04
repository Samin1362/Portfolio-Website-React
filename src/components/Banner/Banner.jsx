import React from "react";
import profileImg from "../../assets/cv-image-dark.jpg";
import ShinyText from "../ShinyText/ShinyText";
import { FaDownload, FaGithub } from "react-icons/fa6";
import TiltedCard from "../TiltedCard/TiltedCard";

const Banner = ({ allContentLoading }) => {
  return (
    <div
      ref={allContentLoading}
      className="relative text-white w-full max-w-[1240px] mx-auto overflow-hidden rounded-lg"
      // style={{ minHeight: "100vh" }}
    >
      {/* Static Background Layer */}
      <div className="absolute inset-0 -z-10 rounded-lg overflow-hidden">
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
      <div className="flex flex-col-reverse md:flex-row w-full h-full p-4 md:p-8 gap-4">
        {/* banner content */}
        <div className="md:w-1/2 flex flex-col gap-4 justify-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            <ShinyText
              text="Md. Samin Israk"
              disabled={false}
              speed={3}
              className="custom-class"
              size={60}
              textColor="white"
            />
          </h1>
          <h2 className="text-base sm:text-lg md:text-xl">
            <span className="font-bold border-2 border-gray-400 p-1 rounded-lg bg-white bg-opacity-15">
              Frontend-Focused
            </span>{" "}
            MERN Stack Developer
          </h2>
          {/* Career Objective Card */}
          <div className="bg-white/5 backdrop-blur-sm border border-gray-600/30 rounded-lg p-3 md:p-4">
            <h3 className="text-xs uppercase tracking-wider text-gray-400 mb-2 font-semibold">
              Career Objective
            </h3>
            <p className="text-sm sm:text-base leading-relaxed text-gray-200">
              Frontend-Focused MERN Stack Developer with expertise in building
              responsive, user-centric web applications and integrating intelligent,
              data-driven features. Passionate about combining modern frontend
              development with robust backend systems to deliver scalable and
              impactful digital solutions.
            </p>
          </div>
          <div className="flex gap-2">
            <div className="bg-[#EBF3FA] hover:bg-white px-4 py-2 w-fit text-center flex items-center gap-2 rounded-lg">
              <FaDownload className="text-black hover:text-green-800" />
              <ShinyText
                text="Download CV"
                disabled={false}
                speed={3}
                className="custom-class"
                size={14}
                textColor="black"
              />
            </div>
            <a href="https://github.com/Samin1362" target="_blank">
              <div className="bg-[#EBF3FA] hover:bg-white px-4 py-2 text-center flex items-center gap-2 rounded-lg">
                <FaGithub className="text-black hover:text-black" />
                <ShinyText
                  text="Github"
                  disabled={false}
                  speed={3}
                  className="custom-class"
                  size={14}
                  textColor="black"
                />
              </div>
            </a>
          </div>
        </div>

        {/* banner image */}
        <div className="w-full md:w-1/2 flex justify-center items-center p-2 border-2 border-gray-500 bg-white bg-opacity-20 rounded-lg">
          {/* <img
            src={profileImg}
            alt="Profile"
            className="rounded-lg w-full max-w-[100%] h-auto object-contain"
          /> */}
          <TiltedCard
            imageSrc={profileImg}
            altText="Samin Israk Album Cover"
            captionText="Samin Israk"
            containerHeight="300px"
            containerWidth="300px"
            imageHeight="300px"
            imageWidth="300px"
            rotateAmplitude={12}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={
              <p className="tilted-card-demo-text">Samin Israk</p>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
