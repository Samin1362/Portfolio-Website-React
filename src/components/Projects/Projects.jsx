import React, { forwardRef } from "react";
import { FaHandsHelping } from "react-icons/fa";
import ChromaGrid from "../ChromaGrid/ChromaGrid";

const Projects = forwardRef((props, ref) => {
  const items = [
    {
      image: "https://i.postimg.cc/qv4p6q04/temp-Image-VQdn-IE.avif",
      title: "React + Tailwind",
      subtitle: "Frontend Project",
      handle: "@react",
      borderColor: "#7C3AED",
      gradient: "linear-gradient(145deg, #6D28D9, #1E1B4B)",
      url: "https://merakinexus.netlify.app",
    },
    {
      image: "https://i.postimg.cc/x8BcS2bV/temp-Imagev5-E4bh.avif",
      title: "React Project",
      subtitle: "AI Assistant for Entrepreneurs",
      handle: "@react",
      borderColor: "#1E3A8A",
      gradient: "linear-gradient(145deg, #1E3A8A, #10B981, #0D9488)",
      url: "https://silver-pixie-86b386.netlify.app",
    },
    {
      image: "https://i.postimg.cc/Hk15Js4H/temp-Image-L0-Kewf.avif",
      title: "React Project",
      subtitle: "Frontend Project",
      handle: "@react",
      borderColor: "#10B981",
      gradient: "linear-gradient(145deg, #3B82F6, #000)",
      url: "https://ph-react-component-practice.netlify.app",
    },
    {
      image: "https://i.postimg.cc/BnZS7rJH/temp-Image6-Wu-HWY.avif",
      title: "JavaScript Project",
      subtitle: "Frontend Project",
      handle: "@javascript",
      borderColor: "#3B82F6",
      gradient: "linear-gradient(180deg, #10B981, #000)",
      url: "https://samin1362.github.io/PH-B12-Assignment-5/",
    },
    {
      image: "https://i.postimg.cc/nhmykTDB/temp-Imagevq-Yd3-D.avif",
      title: "Responsive Website",
      subtitle: "Frontend Project",
      handle: "@html-css",
      borderColor: "#10B981",
      gradient: "linear-gradient(180deg, #FFD580, #000)",
      url: "https://samin1362.github.io/PH-B12-Assignment-2/",
    },
    {
      image: "https://i.postimg.cc/yNvvXSv0/temp-Image-S0d-UHE.avif",
      title: "Responsive Website",
      subtitle: "Frontend Project",
      handle: "@tailwind-css",
      borderColor: "#10B981",
      gradient: "linear-gradient(180deg, #10B981, #000)",
      url: "https://samin1362.github.io/PH-Challenge-Begins-Tailwind/",
    },
  ];

  return (
    <div ref={ref} className="max-w-[1240px] mx-auto mt-[30px]">
      {/* heading  */}
      <div className="">
        <div className="w-fit mx-auto py-[6px] px-[20px] flex items-center justify-center bg-[#282732] gap-2 rounded-[16px]">
          <div>
            <FaHandsHelping />
          </div>
          <h3>What I have done</h3>
        </div>
        <h1 className="text-[30px] md:text-[48px] text-center font-bold">
          My Projects - (Click to View)
        </h1>
      </div>
      {/* content  */}
      <div
        style={{ position: "relative" }}
        className="mt-[30px] h-[1100px] md:h-[600px] lg:h-[300px]"
      >
        <ChromaGrid
          items={items}
          radius={300}
          damping={0.45}
          fadeOut={0.6}
          ease="power3.out"
        />
      </div>
    </div>
  );
});

Projects.displayName = "Projects";

export default Projects;
