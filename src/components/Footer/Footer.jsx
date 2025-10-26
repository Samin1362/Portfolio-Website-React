import { FaFacebook, FaGithub, FaLinkedin, FaStackOverflow } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-[1440px] mx-auto py-[50px] px-[100px] flex flex-col gap-2 text-center md:flex-row items-center justify-between">
      <div>
        <h1>Visit my blog</h1>
      </div>
      <div className="flex gap-[20px] justify-center items-center">
        <a href="https://stackoverflow.com/users/30925421/md-samin-israk" target="_blank">
          <div className="w-[48px] h-[48px] bg-[#0E0E10] hover:bg-white hover:bg-opacity-15 border-2 border-gray-400 rounded-lg flex items-center justify-center">
            <FaStackOverflow className="text-[24px]" />
          </div>
        </a>
        <a href="https://github.com/Samin1362" target="_blank">
          <div className="w-[48px] h-[48px] bg-[#0E0E10] hover:bg-white hover:bg-opacity-15 border-2 border-gray-400 rounded-lg flex items-center justify-center">
            <FaGithub className="text-[24px]" />
          </div>
        </a>
        <a href="https://www.linkedin.com/in/samin-israk/" target="_blank">
          <div className="w-[48px] h-[48px] bg-[#0E0E10] hover:bg-white hover:bg-opacity-15 border-2 border-gray-400 rounded-lg flex items-center justify-center">
            <FaLinkedin className="text-[24px]" />
          </div>
        </a>
      </div>
      <div>
        <h1>© 2025 Md. Samin Israk. All rights reserved.</h1>
      </div>
    </div>
  );
};

export default Footer;
