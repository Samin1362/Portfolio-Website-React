import React, { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import ShinyText from "../ShinyText/ShinyText";
import gsap from "gsap";

const Navbar = ({ contactRef }) => {
  const [isOpen, setIsOpen] = useState(false);
  const mobileContent = useRef(null);

  useEffect(() => {
    if (isOpen && mobileContent.current) {
      gsap.from(mobileContent.current, {
        y: -50,
        opacity: 0,
        duration: 0.5,
        ease: "power1.out",
      });
    }
  }, [isOpen]);

  const handleContactClick = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative">
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
        <div
          onClick={() => handleContactClick()}
          className="bg-[#EBF3FA] hidden md:flex mt-2 md:mt-0 px-[24px] py-3 text-center rounded-lg"
        >
          <ShinyText
            text="Contact"
            disabled={false}
            speed={3}
            className="custom-class"
            size={14}
            textColor="black"
          />
        </div>
        {/* Mobile Menu Button */}
        <div
          className="md:hidden cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>
      {isOpen && (
        <div
          ref={mobileContent}
          className="absolute right-2 top-[100px] md:hidden z-10 text-white bg-[#1d1c22] px-6 py-3 pb-4 max-w-[200px] rounded-lg"
        >
          <div className=" md:flex flex-col  md:flex-row gap-3 md:gap-[40px] text-[#D9ECFF]">
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
          <div
            onClick={() => handleContactClick()}
            className="bg-[#EBF3FA] md:flex mt-2 md:mt-0 px-[24px] py-3 text-center rounded-lg"
          >
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
      )}
    </div>
  );
};

export default Navbar;
