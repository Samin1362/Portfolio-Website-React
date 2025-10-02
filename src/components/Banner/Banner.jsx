import React from "react";
import profileImg from "../../assets/cv-image-dark.jpg";
import Galaxy from "../Galaxy/Galaxy";
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
      {/* Galaxy background */}
      <Galaxy
        mouseRepulsion={true}
        mouseInteraction={true}
        density={1.5}
        glowIntensity={0.5}
        saturation={0.8}
        hueShift={240}
        className="absolute inset-0 -z-10 rounded-lg"
      />

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
              Front-end
            </span>{" "}
            Focused Full-Stack Developer | Machine Learning Enthusiast
          </h2>
          <p className="text-sm sm:text-base md:text-lg">
            <span className="font-bold">Front-end</span> focused full-stack
            developer with strong skills in modern UI/UX and hands-on experience
            in machine learning projects.
          </p>
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
