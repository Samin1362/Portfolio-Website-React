import React from "react";
import { FaMessage } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";
import ShinyText from "../ShinyText/ShinyText";


const Contact = ({ref}) => {
  return (
    <div ref={ref} className="max-w-[1240px] mx-auto mt-[30px]">
      {/* heading  */}
      <div className="">
        <div className="w-fit mx-auto py-[6px] px-[20px] flex items-center justify-center bg-[#282732] gap-2 rounded-[16px]">
          <div>
            <FaMessage />
          </div>
          <h3>Have questions or ideas? Let’s talk! 🚀</h3>
        </div>
        <h1 className="text-[28px] md:text-[48px] text-center font-bold">
          Get in Touch – Let’s Connect
        </h1>
      </div>

      {/* content */}
      <div className="flex flex-col-reverse mt-2 md:flex-row items-center">
        <div className="md:w-1/2 bg-[#0E0E10] py-[40px] px-[30px] flex flex-col gap-[30px]">
          <div className="flex flex-col">
            <label className="text-[#D9ECFF]" htmlFor="">Your name</label>
            <input type="text" className="bg-[#2D2D38] text-[#839CB5] placeholder:text-[#839CB5] p-[17px] rounded-lg" placeholder="What’s your good name?" />
          </div>
          <div className="flex flex-col">
            <label className="text-[#D9ECFF]" htmlFor="">Your email</label>
            <input type="email" className="bg-[#2D2D38] text-[#839CB5] placeholder:text-[#839CB5] p-[17px] rounded-lg" placeholder="What’s your email address?" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Your message</label>
            <textarea name="" placeholder="How can I help you?" className="bg-[#2D2D38] text-[#839CB5] placeholder:text-[#839CB5] p-[17px] rounded-lg" cols={30} rows={5}  id=""></textarea>
          </div>
          <div className="bg-[#EBF3FA] px-4 py-2 w-fit text-center flex items-center gap-2 rounded-lg">
            <FaExternalLinkAlt className="text-black" />
            <ShinyText
              text="Send messsage"
              disabled={false}
              speed={3}
              className="custom-class"
              size={14}
              textColor="black"
            />
          </div>
        </div>
        <div className="md:w-1/2 w-[90%] p-3 bg-white bg-opacity-20 border-2 border-gray-400 rounded-lg">
          <img className="w-full rounded-lg" src="https://images.unsplash.com/photo-1550418290-a8d86ad674a6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGlkZWF8ZW58MHx8MHx8fDA%3D" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
