import React from 'react';
import LogoLoop from '../LogoLoop/LogoLoop';
import { 
  SiNumpy, 
  SiPython, 
  SiPytorch, 
  SiHtml5, 
  SiCss3, 
  SiTailwindcss, 
  SiReact, 
  SiNodedotjs, 
  SiExpress, 
  SiMongodb 
} from "react-icons/si";


const TechLogoBar = () => {

const techLogos = [
  // ML / Data Science
  { node: <SiPython />, title: "Python", href: "https://www.python.org" },
  { node: <SiNumpy />, title: "NumPy", href: "https://numpy.org" },
  { node: <SiPytorch />, title: "PyTorch", href: "https://pytorch.org" },

  // Web Development
  { node: <SiHtml5 />, title: "HTML5", href: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { node: <SiCss3 />, title: "CSS3", href: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },
  { node: <SiExpress />, title: "Express.js", href: "https://expressjs.com" },
  { node: <SiMongodb />, title: "MongoDB", href: "https://www.mongodb.com" },
];


  return (
    <div style={{ height: '80px', position: 'relative', overflow: 'hidden'}} className='max-w-[1240px] mx-auto my-[50px]'>
      <LogoLoop
        logos={techLogos}
        speed={60}
        direction="left"
        logoHeight={48}
        gap={40}
        pauseOnHover
        scaleOnHover
        fadeOut
        fadeOutColor="#ffffff"
        ariaLabel="Technology partners"
      />
    </div>
  );
};

export default TechLogoBar;