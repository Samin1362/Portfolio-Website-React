import React, { useState, useEffect, useRef } from "react";
import "./FloatingNavbar.css";
import {
  Home,
  User,
  Briefcase,
  FileText,
  GraduationCap,
  Calendar,
  Mail,
  Menu,
  X,
} from "lucide-react";

const FloatingNavbar = ({
  skillsRef,
  projectsRef,
  reportsRef,
  educationRef,
  eventsRef,
  contactRef,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);

  // Check if screen is mobile size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Navigation items with icons and colors
  const navItems = [
    {
      name: "Home",
      icon: Home,
      action: () => window.scrollTo({ top: 0, behavior: "smooth" }),
      color: "from-blue-500 to-cyan-400",
    },
    {
      name: "Skills",
      icon: User,
      ref: skillsRef,
      color: "from-purple-500 to-indigo-400",
    },
    {
      name: "Projects",
      icon: Briefcase,
      ref: projectsRef,
      color: "from-green-500 to-emerald-400",
    },
    {
      name: "Reports",
      icon: FileText,
      ref: reportsRef,
      color: "from-orange-500 to-yellow-400",
    },
    {
      name: "Education",
      icon: GraduationCap,
      ref: educationRef,
      color: "from-red-500 to-pink-400",
    },
    {
      name: "Events",
      icon: Calendar,
      ref: eventsRef,
      color: "from-teal-500 to-cyan-400",
    },
    {
      name: "Contact",
      icon: Mail,
      ref: contactRef,
      color: "from-violet-500 to-purple-400",
    },
  ];

  // Handle navigation click
  const handleNavClick = (item) => {
    if (item.action) {
      item.action();
    } else if (item.ref?.current) {
      item.ref.current.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isOpen]);

  // Calculate positions for menu items
  const getItemPosition = (index) => {
    const itemHeight = 75;
    const startOffset = -70;

    if (isMobile) {
      return {
        x: 0,
        y: startOffset - index * itemHeight,
      };
    }

    const baseY = startOffset - index * itemHeight;

    return {
      x: 0,
      y: baseY,
    };
  };

  return (
    <div
      ref={containerRef}
      className={`fixed z-50 ${
        isMobile ? "bottom-6 right-4" : "bottom-6 right-6"
      }`}
    >
      <div className="relative">
        {/* Navigation Items */}
        {isOpen && (
          <>
            {/* Background overlay */}
            <div
              className="fixed inset-0 bg-black/20 -z-10 opacity-0 animate-fade-in"
              onClick={() => setIsOpen(false)}
            />

            {/* Menu backdrop */}
            <div
              className="absolute bg-gray-800/90 rounded-2xl border border-gray-700 shadow-xl opacity-0 animate-fade-in p-4"
              style={{
                width: "232px", // Increased width to accommodate padding
                height: `${navItems.length * 75 + 112}px`, // Increased height for padding
                top: `-${navItems.length * 75 + 92}px`, // Adjusted top position
                left: "-108px", // Adjusted left position to center
                animationDelay: "50ms",
                animationFillMode: "forwards",
              }}
            />

            {/* Navigation items */}
            {navItems.map((item, index) => {
              const position = getItemPosition(index);
              const Icon = item.icon;

              return (
                <div
                  key={item.name}
                  className="absolute opacity-0 translate-y-5 animate-slide-up"
                  style={{
                    left: Math.round(position.x),
                    top: Math.round(position.y),
                    transform: "translate(-50%, -50%)",
                    animationDelay: `${index * 50 + 100}ms`,
                    animationFillMode: "forwards",
                  }}
                >
                  <button
                    onClick={() => handleNavClick(item)}
                    className="w-[200px] group flex items-center gap-3 px-4 py-3 rounded-xl bg-gray-900 border border-gray-700 shadow-lg hover:bg-gray-800 hover:border-gray-600 hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                  >
                    {/* Icon container */}
                    <div
                      className={`w-10 h-10 rounded-lg bg-gradient-to-r ${item.color} flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow duration-200`}
                    >
                      <Icon size={18} className="text-white" />
                    </div>

                    {/* Route name */}
                    <span className="text-white font-medium text-sm tracking-wide group-hover:text-gray-200 transition-colors duration-200 select-none">
                      {item.name}
                    </span>

                    {/* Arrow indicator */}
                    <div className="text-gray-400 group-hover:text-gray-300 transition-colors duration-200">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M9 18l6-6-6-6" />
                      </svg>
                    </div>
                  </button>
                </div>
              );
            })}
          </>
        )}

        {/* Main AssistiveTouch Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-indigo-600 via-blue-500 to-cyan-400 shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center transform hover:scale-105 ${
            isOpen ? "rotate-45" : "rotate-0"
          }`}
        >
          <div className="relative">
            {isOpen ? (
              <X size={24} className="text-white" />
            ) : (
              <Menu size={24} className="text-white" />
            )}
          </div>
        </button>

        {/* Hint text */}
        {!isOpen && (
          <div className="absolute right-full top-1/2 transform -translate-y-1/2 mr-4 bg-gray-900 text-white text-xs px-3 py-2 rounded-lg opacity-80 pointer-events-none whitespace-nowrap hidden md:block">
            Quick Navigation
            <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-gray-900 border-t-2 border-b-2 border-t-transparent border-b-transparent"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FloatingNavbar;
