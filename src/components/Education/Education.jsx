import React, { forwardRef } from "react";
import { MdCastForEducation } from "react-icons/md";
import { FiExternalLink } from "react-icons/fi";
import FadeContent from "../FadeContent/FadeContent";
import AnimatedContent from "../AnimatedContent/AnimatedContent";

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
></AnimatedContent>;

const Education = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="max-w-[1240px] mx-auto mt-[10px]">
      {/* heading  */}
      <div className="">
        <div className="w-fit mx-auto py-[6px] px-[20px] flex items-center justify-center bg-[#282732] gap-2 rounded-[16px]">
          <div>
            <MdCastForEducation />
          </div>
          <h3>My Academic Journey</h3>
        </div>
        <h1 className="text-[30px] md:text-[48px] text-center font-bold">
          My Education
        </h1>
      </div>

      {/* content */}
      <FadeContent
        blur={true}
        duration={1000}
        easing="ease-out"
        initialOpacity={0}
      >
        {/* Anything placed inside this container will be fade into view */}

        <div className="cards flex flex-col gap-2 m-2">
          <div className="card flex flex-col-reverse md:flex-row border-2 border-gray-400 p-2 rounded-lg">
            {/* passing year  */}
            <div className="md:w-1/4 text-center md:text-left flex flex-col justify-center">
              <h1>2020 - 2025</h1>
            </div>
            {/* details  */}
            <div className="md:w-3/4 text-center flex flex-col items-center justify-center">
              <h1 className="font-bold text-2xl">
                Bachelor of Science in Computer Science and Engineering
              </h1>
              <h2 className="text-xl">
                <span className="italic">North South University</span> - Dhaka,
                Bangladesh
              </h2>
              <h3>Major in Machine Learning</h3>
              <h4 className="font-bold text-xl">CGPA: 3.11</h4>
            </div>
            <div className="md:w-1/4 ">
              <AnimatedContent
                distance={150}
                direction="vertical"
                reverse={false}
                duration={1.2}
                ease="bounce.out"
                initialOpacity={0.2}
                animateOpacity
                scale={1.1}
                threshold={0.2}
                delay={0.3}
              >
                <a href="https://www.northsouth.edu/">
                  <div className="w-full aspect-[5/3] rounded-lg bg-[url('https://i.postimg.cc/63mMB3zN/temp-Imagex-Fi-T3-M.avif')] bg-cover bg-no-repeat">
                    <div className="w-full h-full bg-white bg-opacity-20 hover:bg-opacity-30 flex items-center justify-center">
                      <FiExternalLink className="font-bold text-2xl text-clack" />
                    </div>
                  </div>
                </a>
              </AnimatedContent>
            </div>
          </div>
          <div className="card flex flex-col-reverse md:flex-row border-2 border-gray-400 p-2 rounded-lg">
            <div className="md:w-1/4 text-center md:text-left flex flex-col justify-center">
              <h1>2019</h1>
            </div>
            <div className="md:w-3/4 text-center flex flex-col items-center justify-center">
              <h1 className="font-bold text-2xl">
                Higher Secondary Certificate
              </h1>
              <h2 className="text-xl">
                <span className="italic">
                  Bangladesh Millennium Scholastic School and College
                </span>{" "}
                - Bogra, Bangladesh
              </h2>
              <h4 className="font-bold text-xl">GPA: 5.00</h4>
            </div>
            <div className="md:w-1/4 ">
              <AnimatedContent
                distance={150}
                direction="vertical"
                reverse={false}
                duration={1.2}
                ease="bounce.out"
                initialOpacity={0.2}
                animateOpacity
                scale={1.1}
                threshold={0.2}
                delay={0.3}
              >
                <a href="https://msscbogra.edu.bd/#/home">
                  <div className="w-full aspect-[5/3] rounded-lg bg-[url('https://i.postimg.cc/MpY75TCm/temp-Imagevp8-CFu.avif')] bg-cover bg-no-repeat">
                    <div className="w-full h-full bg-white bg-opacity-20 hover:bg-opacity-30 flex items-center justify-center">
                      <FiExternalLink className="font-bold text-2xl text-clack" />
                    </div>
                  </div>
                </a>
              </AnimatedContent>
            </div>
          </div>
          <div className="card flex flex-col-reverse md:flex-row border-2 border-gray-400 p-2 rounded-lg">
            <div className="md:w-1/4 text-center md:text-left flex flex-col justify-center">
              <h1>2017</h1>
            </div>
            <div className="md:w-3/4 text-center flex flex-col items-center justify-center">
              <h1 className="font-bold text-2xl">
                Secondary School Certificate
              </h1>
              <h2 className="text-xl">
                <span className="italic">Dinajpur Academy</span> - Dinajpur,
                Bangladesh
              </h2>
              <h4 className="font-bold text-xl">GPA: 4.36</h4>
            </div>
            <div className="md:w-1/4 ">
              <AnimatedContent
                distance={150}
                direction="vertical"
                reverse={false}
                duration={1.2}
                ease="bounce.out"
                initialOpacity={0.2}
                animateOpacity
                scale={1.1}
                threshold={0.2}
                delay={0.3}
              >
                <a href="https://www.sohopathi.com/dinajpur-academy-high-school/">
                  <div className="w-full aspect-[5/3] rounded-lg bg-[url('https://i.postimg.cc/9MsZ0q9C/temp-Image5-Umr-WD.avif')] bg-cover bg-no-repeat">
                    <div className="w-full h-full bg-white bg-opacity-20 hover:bg-opacity-30 flex items-center justify-center">
                      <FiExternalLink className="font-bold text-2xl text-clack" />
                    </div>
                  </div>
                </a>
              </AnimatedContent>
            </div>
          </div>
        </div>
      </FadeContent>
    </div>
  );
});

Education.displayName = "Education";

export default Education;
