import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Deterministic particles to avoid hydration mismatch
const PARTICLES = [
  { width: 3, height: 3, left: 15, top: 20, duration: 3.2, delay: 0 },
  { width: 2, height: 2, left: 80, top: 10, duration: 2.8, delay: 0.4 },
  { width: 4, height: 4, left: 65, top: 75, duration: 3.5, delay: 0.8 },
  { width: 2, height: 2, left: 30, top: 85, duration: 2.5, delay: 0.2 },
  { width: 3, height: 3, left: 90, top: 50, duration: 3.8, delay: 1.0 },
  { width: 2, height: 2, left: 45, top: 15, duration: 2.6, delay: 0.6 },
  { width: 4, height: 4, left: 10, top: 60, duration: 3.1, delay: 1.2 },
  { width: 3, height: 3, left: 70, top: 35, duration: 2.9, delay: 0.3 },
  { width: 2, height: 2, left: 55, top: 90, duration: 3.4, delay: 0.9 },
  { width: 3, height: 3, left: 25, top: 45, duration: 2.7, delay: 0.5 },
  { width: 2, height: 2, left: 85, top: 80, duration: 3.6, delay: 1.1 },
  { width: 4, height: 4, left: 5,  top: 35, duration: 3.0, delay: 0.7 },
  { width: 2, height: 2, left: 95, top: 25, duration: 2.4, delay: 0.1 },
  { width: 3, height: 3, left: 40, top: 65, duration: 3.3, delay: 1.3 },
  { width: 2, height: 2, left: 75, top: 5,  duration: 2.9, delay: 0.4 },
  { width: 3, height: 3, left: 20, top: 95, duration: 3.7, delay: 0.8 },
  { width: 2, height: 2, left: 60, top: 55, duration: 2.5, delay: 1.0 },
  { width: 4, height: 4, left: 35, top: 30, duration: 3.2, delay: 0.6 },
  { width: 2, height: 2, left: 50, top: 40, duration: 2.8, delay: 0.2 },
  { width: 3, height: 3, left: 88, top: 65, duration: 3.5, delay: 1.4 },
];

const SplashScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const [exiting, setExiting] = useState(false);
  const progressRef = useRef(null);
  const TOTAL_DURATION = 2600; // ms

  useEffect(() => {
    // Slight delay before content appears for drama
    const contentTimer = setTimeout(() => setShowContent(true), 100);

    // Smooth progress animation
    const startTime = performance.now();
    const animate = (now) => {
      const elapsed = now - startTime;
      const pct = Math.min((elapsed / TOTAL_DURATION) * 100, 100);
      setProgress(pct);
      if (pct < 100) {
        progressRef.current = requestAnimationFrame(animate);
      } else {
        // Begin exit
        setTimeout(() => {
          setExiting(true);
          setTimeout(() => onComplete(), 600);
        }, 150);
      }
    };
    progressRef.current = requestAnimationFrame(animate);

    return () => {
      clearTimeout(contentTimer);
      if (progressRef.current) cancelAnimationFrame(progressRef.current);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!exiting ? (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, #0a0a0f 0%, #1a0b2e 25%, #16213e 50%, #0f1419 75%, #000000 100%)",
          }}
        >
          {/* Noise texture overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              opacity: 0.03,
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
            }}
          />

          {/* Animated ambient orbs */}
          <motion.div
            className="absolute rounded-full pointer-events-none"
            style={{
              width: 500,
              height: 500,
              top: "-15%",
              left: "-10%",
              background:
                "radial-gradient(circle, rgba(124,58,237,0.18) 0%, transparent 70%)",
              filter: "blur(80px)",
            }}
            animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute rounded-full pointer-events-none"
            style={{
              width: 450,
              height: 450,
              bottom: "-10%",
              right: "-8%",
              background:
                "radial-gradient(circle, rgba(59,130,246,0.16) 0%, transparent 70%)",
              filter: "blur(80px)",
            }}
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.9, 0.5] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
          <motion.div
            className="absolute rounded-full pointer-events-none"
            style={{
              width: 350,
              height: 350,
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              background:
                "radial-gradient(circle, rgba(16,185,129,0.1) 0%, transparent 70%)",
              filter: "blur(60px)",
            }}
            animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.8, 0.4] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          />

          {/* Floating particles */}
          {PARTICLES.map((p, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white pointer-events-none"
              style={{
                width: p.width,
                height: p.height,
                left: `${p.left}%`,
                top: `${p.top}%`,
                opacity: 0.15,
              }}
              animate={{ opacity: [0.08, 0.35, 0.08], y: [0, -12, 0] }}
              transition={{
                duration: p.duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: p.delay,
              }}
            />
          ))}

          {/* Main content */}
          {showContent && (
            <div className="relative z-10 flex flex-col items-center gap-8 px-6">
              {/* Rotating ring */}
              <motion.div
                className="relative flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                {/* Outer spinning gradient ring */}
                <motion.div
                  className="absolute rounded-full"
                  style={{
                    width: 96,
                    height: 96,
                    background:
                      "conic-gradient(from 0deg, #7C3AED, #3B82F6, #10B981, #7C3AED)",
                    filter: "blur(1px)",
                    opacity: 0.85,
                  }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
                {/* Inner dark circle */}
                <div
                  className="relative z-10 rounded-full flex items-center justify-center"
                  style={{
                    width: 82,
                    height: 82,
                    background: "#0a0a0f",
                  }}
                >
                  {/* Monogram */}
                  <span
                    className="text-2xl font-bold select-none"
                    style={{
                      background:
                        "linear-gradient(135deg, #a855f7, #60a5fa, #34d399)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    SI
                  </span>
                </div>
              </motion.div>

              {/* Name */}
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
              >
                <h1
                  className="text-5xl sm:text-6xl font-bold tracking-tight select-none"
                  style={{
                    background:
                      "linear-gradient(135deg, #c084fc 0%, #818cf8 35%, #38bdf8 65%, #34d399 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Samin Israk
                </h1>
                <motion.p
                  className="mt-2 text-sm sm:text-base tracking-[0.3em] uppercase select-none"
                  style={{ color: "rgba(255,255,255,0.4)" }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.35 }}
                >
                  Full Stack Developer
                </motion.p>
              </motion.div>

              {/* Loading bar */}
              <motion.div
                className="flex flex-col items-center gap-2 w-full max-w-xs"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.45 }}
              >
                {/* Track */}
                <div
                  className="w-full rounded-full overflow-hidden"
                  style={{
                    height: 3,
                    background: "rgba(255,255,255,0.07)",
                  }}
                >
                  {/* Fill */}
                  <motion.div
                    className="h-full rounded-full"
                    style={{
                      width: `${progress}%`,
                      background:
                        "linear-gradient(90deg, #7C3AED, #3B82F6, #10B981)",
                      boxShadow:
                        "0 0 10px rgba(124,58,237,0.6), 0 0 20px rgba(59,130,246,0.3)",
                    }}
                  />
                </div>
                {/* Percentage */}
                <span
                  className="text-xs tabular-nums select-none"
                  style={{ color: "rgba(255,255,255,0.25)" }}
                >
                  {Math.round(progress)}%
                </span>
              </motion.div>
            </div>
          )}
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default SplashScreen;
