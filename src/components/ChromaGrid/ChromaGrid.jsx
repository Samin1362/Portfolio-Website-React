import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ExternalLink } from "lucide-react";

const ChromaGrid = ({
  items,
  className = "",
  radius = 300,
  damping = 0.45,
  fadeOut = 0.6,
  ease = "power3.out",
  onCardClick,
}) => {
  const rootRef = useRef(null);
  const fadeRef = useRef(null);
  const setX = useRef(null);
  const setY = useRef(null);
  const pos = useRef({ x: 0, y: 0 });

  const demo = [
    {
      image: "https://i.pravatar.cc/300?img=8",
      title: "Alex Rivera",
      subtitle: "Full Stack Developer",
      handle: "@alexrivera",
      borderColor: "#4F46E5",
      gradient: "linear-gradient(145deg,#4F46E5,#000)",
      url: "https://github.com/",
    },
  ];

  const data = items?.length ? items : demo;

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    setX.current = gsap.quickSetter(el, "--x", "px");
    setY.current = gsap.quickSetter(el, "--y", "px");
    const { width, height } = el.getBoundingClientRect();
    pos.current = { x: width / 2, y: height / 2 };
    setX.current(pos.current.x);
    setY.current(pos.current.y);
  }, []);

  const moveTo = (x, y) => {
    gsap.to(pos.current, {
      x,
      y,
      duration: damping,
      ease,
      onUpdate: () => {
        setX.current?.(pos.current.x);
        setY.current?.(pos.current.y);
      },
      overwrite: true,
    });
  };

  const handleMove = (e) => {
    const r = rootRef.current.getBoundingClientRect();
    moveTo(e.clientX - r.left, e.clientY - r.top);
    gsap.to(fadeRef.current, { opacity: 0, duration: 0.25, overwrite: true });
  };

  const handleLeave = () => {
    gsap.to(fadeRef.current, {
      opacity: 1,
      duration: fadeOut,
      overwrite: true,
    });
  };

  const handleCardClick = (item, index) => {
    if (onCardClick) {
      onCardClick(item, index);
    } else if (item.url) {
      window.open(item.url, "_blank", "noopener,noreferrer");
    }
  };

  const handleCardMove = (e) => {
    const c = e.currentTarget;
    const rect = c.getBoundingClientRect();
    c.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    c.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={rootRef}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      className={`relative w-full h-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 place-items-center ${className}`}
      style={
        {
          "--r": `${radius}px`,
          "--x": "50%",
          "--y": "50%",
        }
      }
    >
      {data.map((c, i) => (
        <article
          key={i}
          onMouseMove={handleCardMove}
          onClick={() => handleCardClick(c, i)}
          className="group relative flex flex-col w-full max-w-[340px] h-[460px] cursor-pointer"
        >
          {/* Subtle glow effect on hover only */}
          <div
            className="absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-60 blur-lg transition-opacity duration-300"
            style={{
              background: c.borderColor,
            }}
          />

          {/* Main card container */}
          <div
            className="relative flex flex-col w-full h-full rounded-2xl overflow-hidden border-2 backdrop-blur-sm transition-all duration-300 group-hover:scale-[1.01] group-hover:shadow-xl bg-gradient-to-br from-[#0E0E10] to-[#1a1a1f]"
            style={{
              borderColor: `${c.borderColor}60`,
            }}
          >
            {/* Spotlight effect on hover */}
            <div
              className="absolute inset-0 pointer-events-none transition-opacity duration-500 z-20 opacity-0 group-hover:opacity-100"
              style={{
                background:
                  "radial-gradient(circle 400px at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.1), transparent 60%)",
              }}
            />

            {/* Click to view badge - only on hover */}
            <div className="absolute top-3 right-3 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="flex items-center gap-1.5 px-2.5 py-1 bg-black/70 backdrop-blur-md rounded-lg border border-white/20">
                <ExternalLink className="w-3 h-3 text-white" />
                <span className="text-[10px] font-semibold text-white">View Details</span>
              </div>
            </div>

            {/* Image section with enhanced styling */}
            <div className="relative z-10 h-[240px] p-3">
              <div className="relative w-full h-full rounded-xl overflow-hidden border border-white/10">
                {/* Subtle gradient overlay */}
                <div
                  className="absolute inset-0 opacity-20 z-10 pointer-events-none"
                  style={{
                    background: `linear-gradient(135deg, ${c.borderColor}40, transparent)`,
                  }}
                />

                <img
                  src={c.image}
                  alt={c.title}
                  loading="lazy"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Content section with glassmorphism */}
            <footer className="relative z-10 flex-1 p-4 text-white font-sans flex flex-col gap-3 bg-white/5 backdrop-blur-sm">

              {/* Title with icon */}
              <div className="flex items-start gap-2">
                <div
                  className="mt-1 w-1 h-6 rounded-full flex-shrink-0"
                  style={{ backgroundColor: c.borderColor }}
                />
                <h3 className="flex-1 text-[1.15rem] font-bold leading-tight line-clamp-2 text-white transition-colors duration-300"
                  style={{
                    color: 'white'
                  }}
                >
                  {c.title}
                </h3>
              </div>

              {/* Subtitle */}
              <p className="text-[0.85rem] text-gray-400 leading-snug">
                {c.subtitle}
              </p>

              {/* Tags with enhanced styling */}
              {c.handle && (
                <div className="mt-auto flex flex-wrap gap-1.5">
                  {c.handle.split(' ').map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[0.7rem] px-2.5 py-1 rounded-full font-medium transition-colors duration-200"
                      style={{
                        background: `${c.borderColor}20`,
                        border: `1px solid ${c.borderColor}40`,
                        color: c.borderColor,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </footer>
          </div>
        </article>
      ))}

      {/* Fade overlay for spotlight effect */}
      <div
        ref={fadeRef}
        className="absolute inset-0 pointer-events-none transition-opacity duration-[250ms] z-40"
        style={{
          backdropFilter: "grayscale(0.2) brightness(0.95)",
          WebkitBackdropFilter: "grayscale(0.2) brightness(0.95)",
          background: "rgba(0,0,0,0.001)",
          maskImage:
            "radial-gradient(circle var(--r) at var(--x) var(--y),transparent 0%,transparent 20%,rgba(0,0,0,0.15)50%,rgba(0,0,0,0.35)80%,rgba(0,0,0,0.5)100%)",
          WebkitMaskImage:
            "radial-gradient(circle var(--r) at var(--x) var(--y),transparent 0%,transparent 20%,rgba(0,0,0,0.15)50%,rgba(0,0,0,0.35)80%,rgba(0,0,0,0.5)100%)",
          opacity: 1,
        }}
      />
    </div>
  );
};

export default ChromaGrid;
