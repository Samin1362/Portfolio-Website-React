import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github, Code2, Lock, User, Copy, Check } from "lucide-react";

const ProjectModal = ({ project, isOpen, onClose }) => {
  const [copiedField, setCopiedField] = useState(null);

  // Copy to clipboard function
  const copyToClipboard = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  // ESC key handler
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  // Scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!project) return null;

  // Animation variants for stagger effect
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-2xl p-4 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <motion.div
            initial={{ scale: 0.85, opacity: 0, y: 100 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.85, opacity: 0, y: 100 }}
            transition={{
              type: "spring",
              damping: 30,
              stiffness: 300,
              duration: 0.6,
            }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-6xl w-full max-h-[95vh] my-4"
          >
            {/* Gradient glow effect */}
            <div
              className="absolute -inset-1 rounded-3xl opacity-30 blur-xl"
              style={{
                background: `linear-gradient(135deg, ${project.borderColor}, transparent)`,
              }}
            />

            {/* Main modal container */}
            <div className="relative bg-gradient-to-br from-[#0E0E10] to-[#1a1a1f] border-2 rounded-3xl shadow-2xl overflow-hidden"
              style={{ borderColor: `${project.borderColor}40` }}
            >
              {/* Close Button - Fixed position to avoid overlap */}
              <motion.button
                onClick={onClose}
                className="absolute top-3 right-3 z-50 bg-red-500/20 hover:bg-red-500/40 backdrop-blur-sm p-2 rounded-lg transition-all duration-300 group border border-red-500/30"
                aria-label="Close modal"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="w-5 h-5 text-red-400 group-hover:text-red-300" />
              </motion.button>

              {/* Header Section with gradient background */}
              <div
                className="relative px-4 md:px-6 pt-4 md:pt-6 pb-3 border-b"
                style={{
                  background: `linear-gradient(135deg, ${project.borderColor}15, transparent)`,
                  borderColor: `${project.borderColor}20`,
                }}
              >
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="space-y-4"
                >
                  {/* Title and Badge */}
                  <motion.div variants={itemVariants}>
                    <div className="pr-12 mb-3">
                      <h2
                        id="modal-title"
                        className="text-2xl md:text-4xl font-bold text-white mb-2 leading-tight"
                      >
                        {project.title}
                      </h2>
                      <div className="flex items-center gap-3 flex-wrap">
                        <span
                          className="px-3 py-1.5 text-xs md:text-sm font-bold rounded-lg shadow-lg"
                          style={{
                            background: `linear-gradient(135deg, ${project.borderColor}30, ${project.borderColor}50)`,
                            border: `2px solid ${project.borderColor}`,
                            color: project.borderColor,
                            boxShadow: `0 4px 20px ${project.borderColor}30`,
                          }}
                        >
                          {project.type}
                        </span>
                        <p className="text-gray-400 text-sm md:text-base">
                          {project.subtitle}
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Action Buttons - Prominent at the top */}
                  <motion.div
                    variants={itemVariants}
                    className="flex flex-wrap gap-2"
                  >
                    {/* Live Demo Button - Most prominent */}
                    {project.links.live && project.links.live !== "#" && (
                      <motion.a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 md:px-5 py-2 md:py-2.5 bg-gradient-to-r from-[#7C3AED] to-[#10B981] hover:from-[#6D28D9] hover:to-[#059669] rounded-lg text-white text-sm font-semibold shadow-lg transition-all duration-300"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        style={{
                          boxShadow: "0 8px 30px rgba(124, 58, 237, 0.3)",
                        }}
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Live Demo</span>
                      </motion.a>
                    )}

                    {/* GitHub Repository Button */}
                    {project.links.github && project.links.github !== "#" && (
                      <motion.a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 md:px-5 py-2 md:py-2.5 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-gray-600/30 rounded-lg text-white text-sm font-semibold transition-all duration-300"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github className="w-4 h-4" />
                        <span>GitHub</span>
                      </motion.a>
                    )}

                    {/* Frontend Repository Button */}
                    {project.links.frontend && project.links.frontend !== "#" && (
                      <motion.a
                        href={project.links.frontend}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-3 md:px-4 py-2 bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-gray-700/40 rounded-lg text-gray-300 hover:text-white text-xs md:text-sm font-medium transition-all duration-300"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Code2 className="w-3.5 h-3.5" />
                        <span>Frontend</span>
                      </motion.a>
                    )}

                    {/* Backend Repository Button */}
                    {project.links.backend && project.links.backend !== "#" && (
                      <motion.a
                        href={project.links.backend}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-3 md:px-4 py-2 bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-gray-700/40 rounded-lg text-gray-300 hover:text-white text-xs md:text-sm font-medium transition-all duration-300"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Code2 className="w-3.5 h-3.5" />
                        <span>Backend</span>
                      </motion.a>
                    )}
                  </motion.div>

                  {/* User Credentials Section - Only show if credentials exist */}
                  {project.credentials && (
                    <motion.div
                      variants={itemVariants}
                      className="mt-4 p-3 rounded-lg border-2 border-dashed"
                      style={{
                        borderColor: `${project.borderColor}60`,
                        background: `linear-gradient(135deg, ${project.borderColor}10, transparent)`,
                      }}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <Lock className="w-4 h-4" style={{ color: project.borderColor }} />
                        <h4 className="text-sm font-bold text-white">
                          Test Credentials
                        </h4>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {/* Email/Username */}
                        <div className="bg-black/30 rounded-lg p-2 border border-gray-700/40">
                          <div className="flex items-center justify-between gap-2 mb-1">
                            <div className="flex items-center gap-1.5">
                              <User className="w-3 h-3 text-gray-400" />
                              <span className="text-xs text-gray-400 font-medium">Email</span>
                            </div>
                            <motion.button
                              onClick={() => copyToClipboard(project.credentials.email, 'email')}
                              className="p-1 hover:bg-white/10 rounded transition-colors"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              title="Copy email"
                            >
                              {copiedField === 'email' ? (
                                <Check className="w-3 h-3 text-green-400" />
                              ) : (
                                <Copy className="w-3 h-3 text-gray-400" />
                              )}
                            </motion.button>
                          </div>
                          <p className="text-xs text-white font-mono break-all">
                            {project.credentials.email}
                          </p>
                        </div>

                        {/* Password */}
                        <div className="bg-black/30 rounded-lg p-2 border border-gray-700/40">
                          <div className="flex items-center justify-between gap-2 mb-1">
                            <div className="flex items-center gap-1.5">
                              <Lock className="w-3 h-3 text-gray-400" />
                              <span className="text-xs text-gray-400 font-medium">Password</span>
                            </div>
                            <motion.button
                              onClick={() => copyToClipboard(project.credentials.password, 'password')}
                              className="p-1 hover:bg-white/10 rounded transition-colors"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              title="Copy password"
                            >
                              {copiedField === 'password' ? (
                                <Check className="w-3 h-3 text-green-400" />
                              ) : (
                                <Copy className="w-3 h-3 text-gray-400" />
                              )}
                            </motion.button>
                          </div>
                          <p className="text-xs text-white font-mono break-all">
                            {project.credentials.password}
                          </p>
                        </div>
                      </div>

                      {/* Optional note */}
                      {project.credentials.note && (
                        <p className="text-xs text-gray-400 mt-2 italic">
                          ⓘ {project.credentials.note}
                        </p>
                      )}
                    </motion.div>
                  )}
                </motion.div>
              </div>

              {/* Content Section */}
              <div className="flex flex-col lg:flex-row gap-4 md:gap-6 p-4 md:p-6 max-h-[calc(95vh-200px)] overflow-y-auto custom-scrollbar">
                {/* Left Column - Image */}
                <motion.div
                  className="w-full lg:w-5/12 flex-shrink-0"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  <div className="relative group sticky top-0">
                    {/* Glow effect behind image */}
                    <div
                      className="absolute -inset-1 rounded-xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-500"
                      style={{
                        background: `linear-gradient(135deg, ${project.borderColor}, transparent)`,
                      }}
                    />

                    {/* Image container with proper aspect ratio */}
                    <div
                      className="relative rounded-xl overflow-hidden border-2 shadow-2xl"
                      style={{ borderColor: `${project.borderColor}40` }}
                    >
                      <div className="relative bg-gray-900/50 backdrop-blur-sm" style={{ paddingBottom: "60%" }}>
                        {project.images && project.images[0] ? (
                          <img
                            src={project.images[0]}
                            alt={project.title}
                            className="absolute inset-0 w-full h-full object-contain p-2"
                            loading="lazy"
                          />
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <p className="text-gray-500">No image available</p>
                          </div>
                        )}
                      </div>

                      {/* Overlay gradient on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                </motion.div>

                {/* Right Column - Project Details */}
                <motion.div
                  className="w-full lg:w-7/12 space-y-4"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  {/* Description */}
                  <div className="bg-white/5 backdrop-blur-sm border border-gray-700/30 rounded-lg p-4">
                    <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                      <span
                        className="w-1 h-6 rounded-full"
                        style={{ backgroundColor: project.borderColor }}
                      />
                      About the Project
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-sm">
                      {project.description}
                    </p>
                  </div>

                  {/* Features */}
                  {project.features && project.features.length > 0 && (
                    <div className="bg-white/5 backdrop-blur-sm border border-gray-700/30 rounded-lg p-4">
                      <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                        <span
                          className="w-1 h-6 rounded-full"
                          style={{ backgroundColor: project.borderColor }}
                        />
                        Key Features
                      </h3>
                      <ul className="grid grid-cols-1 gap-2">
                        {project.features.map((feature, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 + index * 0.05 }}
                            className="flex items-start gap-2 text-gray-300 bg-white/5 rounded-lg p-2.5 hover:bg-white/10 transition-colors"
                          >
                            <span
                              className="mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0"
                              style={{ backgroundColor: project.borderColor }}
                            />
                            <span className="text-xs leading-relaxed">{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Tech Stack */}
                  {project.techStack && project.techStack.length > 0 && (
                    <div className="bg-white/5 backdrop-blur-sm border border-gray-700/30 rounded-lg p-4">
                      <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                        <span
                          className="w-1 h-6 rounded-full"
                          style={{ backgroundColor: project.borderColor }}
                        />
                        Tech Stack
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech, index) => (
                          <motion.span
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.6 + index * 0.05 }}
                            className="px-3 py-1.5 text-xs font-semibold rounded-lg text-white transition-all duration-300 hover:scale-105 cursor-default"
                            style={{
                              background: `linear-gradient(135deg, ${project.borderColor}20, ${project.borderColor}10)`,
                              border: `1px solid ${project.borderColor}40`,
                            }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
