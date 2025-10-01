import React, { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import ShinyText from "../ShinyText/ShinyText";
import gsap from "gsap";

const Navbar = ({
  contactRef,
  skillsRef,
  projectsRef,
  reportsRef,
  educationRef,
  eventsRef,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const mobileContent = useRef(null);
  const navbarRef = useRef(null);
  const logoRef = useRef(null);
  const navItemsRef = useRef([]);
  const contactBtnRef = useRef(null);
  const menuBtnRef = useRef(null);

  // Navigation items
  const navItems = [
    { name: "Skills", ref: skillsRef },
    { name: "Projects", ref: projectsRef },
    { name: "Reports", ref: reportsRef },
    { name: "Education", ref: educationRef },
    { name: "Events", ref: eventsRef },
  ];

  // Initial navbar animation
  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      navbarRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    )
      .fromTo(
        logoRef.current,
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
        "-=0.5"
      )
      .fromTo(
        navItemsRef.current,
        { y: -30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.1,
        },
        "-=0.6"
      )
      .fromTo(
        contactBtnRef.current,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)" },
        "-=0.3"
      )
      .fromTo(
        menuBtnRef.current,
        { rotation: -180, opacity: 0 },
        { rotation: 0, opacity: 1, duration: 0.5, ease: "power2.out" },
        "-=0.4"
      );
  }, []);

  // Mobile menu animation
  useEffect(() => {
    if (isOpen && mobileContent.current) {
      gsap.fromTo(
        mobileContent.current,
        {
          y: -50,
          opacity: 0,
          scale: 0.9,
          rotationX: -90,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          rotationX: 0,
          duration: 0.6,
          ease: "power3.out",
        }
      );

      // Animate mobile menu items
      const mobileItems =
        mobileContent.current.querySelectorAll(".mobile-nav-item");
      gsap.fromTo(
        mobileItems,
        { x: -30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.4,
          ease: "power2.out",
          stagger: 0.1,
          delay: 0.2,
        }
      );
    }
  }, [isOpen]);

  const handleNavClick = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);

      // Add a small bounce animation to the clicked item
      gsap.to(ref.current, {
        scale: 1.05,
        duration: 0.2,
        ease: "power2.out",
        yoyo: true,
        repeat: 1,
      });
    }
  };

  const handleContactClick = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);

      // Contact button animation
      gsap.to(contactBtnRef.current, {
        scale: 0.95,
        duration: 0.1,
        ease: "power2.out",
        yoyo: true,
        repeat: 1,
      });
    }
  };

  const toggleMobileMenu = () => {
    if (!isOpen) {
      setIsOpen(true);
    } else {
      // Animate out before closing
      gsap.to(mobileContent.current, {
        y: -30,
        opacity: 0,
        scale: 0.9,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => setIsOpen(false),
      });
    }

    // Menu button animation
    gsap.to(menuBtnRef.current, {
      rotation: isOpen ? 0 : 180,
      scale: 0.9,
      duration: 0.3,
      ease: "power2.out",
      yoyo: true,
      repeat: 1,
    });
  };

  // Hover animations for nav items
  const handleNavHover = (index, isHovering) => {
    const item = navItemsRef.current[index];
    if (item) {
      gsap.to(item, {
        y: isHovering ? -3 : 0,
        scale: isHovering ? 1.05 : 1,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  };

  return (
    <div className="relative z-50">
      {/* Main Navbar */}
      <div
        ref={navbarRef}
        className="relative w-full max-w-[1240px] mx-auto bg-gradient-to-r from-[#1d1c22]/80 via-[#1d1c22]/90 to-[#1d1c22]/80 backdrop-blur-md my-[20px] md:my-[50px] p-[20px] md:p-[32px] flex items-center justify-between rounded-2xl transition-all duration-500"
      >
        {/* Decorative background elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 via-blue-400/5 to-cyan-300/5 rounded-2xl"></div>
        <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-indigo-400/10 to-blue-300/10 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-cyan-300/10 to-blue-400/10 rounded-full blur-2xl opacity-40"></div>

        {/* Logo */}
        <div ref={logoRef} className="relative z-10">
          <div className="group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-400/20 to-cyan-300/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative bg-gradient-to-r from-[#1e1e26] to-[#1a1a20] p-2 rounded-lg border border-gray-700/30 group-hover:border-cyan-400/50 transition-all duration-300">
              <ShinyText
                text="Md. Samin Israk"
                disabled={false}
                speed={3}
                className="custom-class"
                size={20}
                textColor="white"
              />
            </div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-[40px] text-[#D9ECFF] relative z-10">
          {navItems.map((item, index) => (
            <div
              key={item.name}
              ref={(el) => (navItemsRef.current[index] = el)}
              onClick={() => handleNavClick(item.ref)}
              onMouseEnter={() => handleNavHover(index, true)}
              onMouseLeave={() => handleNavHover(index, false)}
              className="relative cursor-pointer group"
            >
              {/* Hover background */}
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-400/20 to-cyan-300/20 rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 -m-2"></div>

              {/* Navigation item */}
              <div className="relative px-4 py-2 rounded-lg border border-transparent group-hover:border-cyan-400/30 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-indigo-500/10 group-hover:to-cyan-300/10">
                <h1 className="font-semibold text-sm group-hover:text-cyan-100 transition-colors duration-300 relative">
                  {item.name}
                  {/* Underline animation */}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-400 to-cyan-300 group-hover:w-full transition-all duration-300"></span>
                </h1>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Button */}
        <div className="hidden md:flex relative z-10">
          <div
            ref={contactBtnRef}
            onClick={handleContactClick}
            className="group cursor-pointer"
          >
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#EBF3FA] to-[#D6E8F5] rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>

            {/* Button */}
            <div className="relative bg-gradient-to-r from-[#EBF3FA] to-[#D6E8F5] hover:from-[#D6E8F5] hover:to-[#C1D9F0] px-[28px] py-3.5 rounded-xl transition-all duration-300 transform group-hover:scale-105 group-active:scale-95 border border-white/20 shadow-lg">
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
        </div>

        {/* Mobile Menu Button */}
        <div
          ref={menuBtnRef}
          className="md:hidden cursor-pointer relative z-10 group"
          onClick={toggleMobileMenu}
        >
          <div className="p-2 rounded-lg bg-gradient-to-r from-[#1e1e26] to-[#1a1a20] border border-gray-700/50 group-hover:border-cyan-400/50 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-indigo-500/10 group-hover:to-cyan-300/10">
            {isOpen ? (
              <X
                size={28}
                className="text-white group-hover:text-cyan-300 transition-colors duration-300"
              />
            ) : (
              <Menu
                size={28}
                className="text-white group-hover:text-cyan-300 transition-colors duration-300"
              />
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          ref={mobileContent}
          className="absolute top-[100px] right-4 md:hidden z-40 text-white"
        >
          <div className="bg-gradient-to-br from-[#1d1c22]/95 via-[#1e1e26]/95 to-[#1a1a20]/95 backdrop-blur-xl border border-gray-700/50 px-6 py-6 max-w-[280px] rounded-2xl shadow-2xl">
            {/* Decorative elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-blue-400/5 to-cyan-300/10 rounded-2xl"></div>
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-indigo-400/20 to-cyan-300/20 rounded-full blur-2xl opacity-60"></div>

            <div className="relative z-10">
              {/* Mobile Navigation Items */}
              <div className="flex flex-col gap-2 mb-4">
                {navItems.map((item) => (
                  <div
                    key={item.name}
                    onClick={() => handleNavClick(item.ref)}
                    className="mobile-nav-item cursor-pointer group py-3 px-4 rounded-xl hover:bg-gradient-to-r hover:from-indigo-500/20 hover:to-cyan-300/20 border border-transparent hover:border-cyan-400/30 transition-all duration-300"
                  >
                    <h1 className="font-semibold text-[#D9ECFF] group-hover:text-cyan-100 transition-colors duration-300">
                      {item.name}
                    </h1>
                  </div>
                ))}
              </div>

              {/* Mobile Contact Button */}
              <div
                onClick={handleContactClick}
                className="mobile-nav-item bg-gradient-to-r from-[#EBF3FA] to-[#D6E8F5] hover:from-[#D6E8F5] hover:to-[#C1D9F0] px-6 py-3.5 text-center rounded-xl cursor-pointer transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg border border-white/20"
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
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
