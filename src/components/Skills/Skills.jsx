import React from "react";
import { FaHandsHelping } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import AnimatedContent from "../AnimatedContent/AnimatedContent";

const Skills = () => {
  return (
    <div className="max-w-[1240px] mx-auto">
      {/* heading  */}
      <div className="">
        <div className="w-fit mx-auto py-[6px] px-[20px] flex items-center justify-center bg-[#282732] gap-2 rounded-[16px]">
          <div>
            <FaHandsHelping />
          </div>
          <h3>What I Bring to the Table</h3>
        </div>
        <h1 className="text-[30px] md:text-[48px] text-center font-bold">
          My Key Skills
        </h1>
      </div>
      {/* cards  */}
      <AnimatedContent
        distance={150}
        direction="vertical"
        reverse={false}
        duration={1.2}
        ease="elastic.out"
        initialOpacity={0.2}
        animateOpacity
        scale={1.1}
        threshold={0.2}
        delay={0.3}
      >
        <div className="grid grid-cols-2 md:grid-cols-5 justify-center md:gap-[45px] mt-[40px]">
          {/* card */}
          <div className="bg-[#1C1C21] hover:bg-[#2D3240] h-[100px] md:h-[360px] p-[30px] w-full flex flex-col items-center justify-center rounded-[200px]">
            <div>
              <FaHtml5
                color="#E34F26"
                className="text-[40px] md:text-[130px]"
              />
            </div>
            <h1 className="text-xl md:text-2xl text-center">HTML5</h1>
          </div>
          <div className="bg-[#1C1C21] hover:bg-[#2D3240] h-[100px] md:h-[360px] p-[30px] w-full flex flex-col items-center justify-center rounded-[200px]">
            <div>
              <RiTailwindCssFill color="#61dafb" className="text-[40px] md:text-[130px]" />
            </div>
            <h1 className="text-xl md:text-2xl text-center">Tailwind CSS</h1>
          </div>
          <div className="bg-[#1C1C21] hover:bg-[#2D3240] h-[100px] md:h-[360px] p-[30px] w-full flex flex-col items-center justify-center rounded-[200px]">
            <div>
              <IoLogoJavascript color="#F7DF1E" className="text-[40px] md:text-[130px]" />
            </div>
            <h1 className="text-xl md:text-2xl text-center">JavaScript</h1>
          </div>
          <div className="bg-[#1C1C21] hover:bg-[#2D3240] h-[100px] md:h-[360px] p-[30px] w-full flex flex-col items-center justify-center rounded-[200px]">
            <div>
              <FaReact color="#61dafb" className="text-[40px] md:text-[130px]" />
            </div>
            <h1 className="text-xl md:text-2xl text-center">React Developer</h1>
          </div>
          <div className="bg-[#1C1C21] hover:bg-[#2D3240] h-[100px] md:h-[360px] p-[30px] w-full flex flex-col items-center justify-center rounded-[200px]">
            <div>
              <FaGitAlt color="#F97316" className="text-[40px] md:text-[130px]" />
            </div>
            <h1 className="text-xl md:text-2xl text-center">Project Management</h1>
          </div>
        </div>
      </AnimatedContent>
    </div>
  );
};

export default Skills;
