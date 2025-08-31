import React from "react";
import ShinyText from "../ShinyText/ShinyText";

const Navbar = ({contactRef}) => {

  const handleContactClick = () =>{
    if(contactRef.current){
      contactRef.current.scrollIntoView({behavior: "smooth"})
    }
  }

  return (
    <div className="bg-[#1d1c2291] text-center max-w-[1240px] mx-auto my-[20px] md:my-[50px] p-[32px] flex md:flex-row items-center justify-between rounded-lg">
      <div>
        <ShinyText
          text="Md. Samin Israk"
          disabled={false}
          speed={3}
          className="custom-class"
          size={20}
          textColor="white"
        />
      </div>
      <div className="hidden md:flex flex-col  md:flex-row gap-3 md:gap-[40px] text-[#D9ECFF]">
        <div>
          <h1>Work</h1>
        </div>
        <div>
          <h1>Skills</h1>
        </div>
        <div>
          <h1>Experience</h1>
        </div>
        <div>
          <h1>Testimonials</h1>
        </div>
      </div>
      <div onClick={() => handleContactClick()} className="bg-[#EBF3FA] mt-2 md:mt-0 px-[24px] py-3 text-center rounded-lg">
        <ShinyText
          text="Contact"
          disabled={false}
          speed={3}
          className="custom-class"
          size={14}
          textColor="black"
        />
      </div>
    </div>
  );
};

export default Navbar;
