import { MdCastForEducation } from "react-icons/md";
import FadeContent from "../FadeContent/FadeContent";

const Education = () => {
  return (
    <div className="max-w-[1240px] mx-auto mt-[10px]">
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
          <div className="card flex border-2 border-gray-400 p-2 rounded-lg">
            <div className="w-1/4">
              <h1>2020 - 2025</h1>
            </div>
            <div className="w-3/4">
              <h1 className="font-bold text-2xl">
                Bachelor of Science in Computer Science and Engineering
              </h1>
              <h2 className="text-xl">
                <span className="italic">North South University</span> - Dhaka,
                Bangladesh
              </h2>
              <h3>Major in Machine Learning</h3>
              <h4 className="font-bold text-xl">CGPA: 3.10</h4>
            </div>
          </div>
          <div className="card flex border-2 border-gray-400 p-2 rounded-lg">
            <div className="w-1/4">
              <h1>2019</h1>
            </div>
            <div className="w-3/4">
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
          </div>
          <div className="card flex border-2 border-gray-400 p-2 rounded-lg">
            <div className="w-1/4">
              <h1>2017</h1>
            </div>
            <div className="w-3/4">
              <h1 className="font-bold text-2xl">
                Secondary School Certificate
              </h1>
              <h2 className="text-xl">
                <span className="italic">Dinajpur Academy</span> - Dinajpur,
                Bangladesh
              </h2>
              <h4 className="font-bold text-xl">GPA: 4.36</h4>
            </div>
          </div>
        </div>
      </FadeContent>
    </div>
  );
};

export default Education;
