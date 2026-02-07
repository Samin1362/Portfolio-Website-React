import React, { forwardRef, useState, useMemo, useRef, useEffect } from "react";
import { FaHandsHelping } from "react-icons/fa";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import gsap from "gsap";
import ChromaGrid from "../ChromaGrid/ChromaGrid";
import ProjectModal from "./ProjectModal";
import { projectsData, projectTypes } from "../../data/projectsData";

const Projects = forwardRef((props, ref) => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const gridRef = useRef(null);

  // Filtered projects based on active filter
  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projectsData;
    return projectsData.filter((p) => p.type === activeFilter);
  }, [activeFilter]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProjects = filteredProjects.slice(startIndex, endIndex);

  // Project counts for filter badges
  const projectCounts = useMemo(() => {
    const counts = { All: projectsData.length };
    projectTypes.forEach((type) => {
      if (type !== "All") {
        counts[type] = projectsData.filter((p) => p.type === type).length;
      }
    });
    return counts;
  }, []);

  // Transform projectsData to match ChromaGrid's expected format
  const gridItems = currentProjects.map((project) => ({
    image: project.images[0],
    title: project.title,
    subtitle: project.subtitle,
    handle: project.tags.join(" "),
    borderColor: project.borderColor,
    gradient: project.gradient,
    url: project.links.live,
    ...project,
  }));

  // Reset to page 1 when filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeFilter, itemsPerPage]);

  // Handle card click - open modal
  const handleCardClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  // Handle modal close
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  // Pagination handlers
  const goToPage = (page) => {
    setCurrentPage(page);
    // Scroll to top of projects section
    ref?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      goToPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      goToPage(currentPage + 1);
    }
  };

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages = [];
    const maxPagesToShow = 5;

    if (totalPages <= maxPagesToShow) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) pages.push(i);
        pages.push("...");
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push("...");
        for (let i = totalPages - 3; i <= totalPages; i++) pages.push(i);
      } else {
        pages.push(1);
        pages.push("...");
        for (let i = currentPage - 1; i <= currentPage + 1; i++) pages.push(i);
        pages.push("...");
        pages.push(totalPages);
      }
    }

    return pages;
  };

  // GSAP animation when projects change
  useEffect(() => {
    if (gridRef.current && gridRef.current.children.length > 0) {
      gsap.fromTo(
        gridRef.current.children,
        { opacity: 0, y: 30, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.5,
          stagger: 0.05,
          ease: "power2.out",
        }
      );
    }
  }, [currentProjects]);

  return (
    <div ref={ref} className="max-w-[1240px] mx-auto mt-[30px] mb-12 md:mb-16 px-4">
      {/* heading  */}
      <div className="">
        <div className="w-fit mx-auto py-[6px] px-[20px] flex items-center justify-center bg-[#282732] gap-2 rounded-[16px]">
          <div>
            <FaHandsHelping />
          </div>
          <h3>What I have done</h3>
        </div>
        <h1 className="text-[30px] md:text-[48px] text-center font-bold">
          My Projects - (Click to View Details)
        </h1>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-3 justify-center my-8">
        {projectTypes.map((filter) => (
          <motion.button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 md:px-6 py-2 md:py-3 rounded-xl transition-all duration-300 font-medium text-sm md:text-base ${
              activeFilter === filter
                ? "bg-gradient-to-r from-[#7C3AED] to-[#10B981] text-white shadow-lg"
                : "bg-[#282732] text-gray-400 border border-gray-700/30 hover:bg-[#2D3240] hover:text-gray-300"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {filter}{" "}
            <span className="ml-1 text-xs opacity-70">
              ({projectCounts[filter] || 0})
            </span>
          </motion.button>
        ))}
      </div>

      {/* Items per page selector and info */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-3">
          <label htmlFor="itemsPerPage" className="text-sm text-gray-400 font-medium">
            Show per page:
          </label>
          <select
            id="itemsPerPage"
            value={itemsPerPage}
            onChange={(e) => setItemsPerPage(Number(e.target.value))}
            className="px-3 py-2 bg-[#282732] border border-gray-700/30 rounded-lg text-white text-sm focus:outline-none focus:border-purple-500 transition-colors cursor-pointer"
          >
            <option value={4}>4</option>
            <option value={8}>8</option>
            <option value={12}>12</option>
            <option value={16}>16</option>
            <option value={filteredProjects.length}>All ({filteredProjects.length})</option>
          </select>
        </div>

        <div className="text-sm text-gray-400">
          Showing <span className="text-white font-semibold">{startIndex + 1}</span> to{" "}
          <span className="text-white font-semibold">{Math.min(endIndex, filteredProjects.length)}</span> of{" "}
          <span className="text-white font-semibold">{filteredProjects.length}</span> projects
        </div>
      </div>

      {/* content  */}
      <div ref={gridRef} style={{ position: "relative" }} className="mt-[30px] pb-8">
        <ChromaGrid
          items={gridItems}
          onCardClick={handleCardClick}
          radius={300}
          damping={0.45}
          fadeOut={0.6}
          ease="power3.out"
        />
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          {/* Previous Button */}
          <motion.button
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
              currentPage === 1
                ? "bg-gray-800/50 text-gray-600 cursor-not-allowed"
                : "bg-[#282732] text-white border border-gray-700/30 hover:bg-[#2D3240] hover:border-purple-500"
            }`}
            whileHover={currentPage !== 1 ? { scale: 1.05 } : {}}
            whileTap={currentPage !== 1 ? { scale: 0.95 } : {}}
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Previous</span>
          </motion.button>

          {/* Page Numbers */}
          <div className="flex items-center gap-2">
            {getPageNumbers().map((page, index) => {
              if (page === "...") {
                return (
                  <span key={`ellipsis-${index}`} className="px-2 text-gray-500">
                    ...
                  </span>
                );
              }
              return (
                <motion.button
                  key={page}
                  onClick={() => goToPage(page)}
                  className={`w-10 h-10 rounded-lg font-semibold transition-all duration-300 ${
                    currentPage === page
                      ? "bg-gradient-to-r from-[#7C3AED] to-[#10B981] text-white shadow-lg"
                      : "bg-[#282732] text-gray-400 border border-gray-700/30 hover:bg-[#2D3240] hover:text-white"
                  }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {page}
                </motion.button>
              );
            })}
          </div>

          {/* Next Button */}
          <motion.button
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
              currentPage === totalPages
                ? "bg-gray-800/50 text-gray-600 cursor-not-allowed"
                : "bg-[#282732] text-white border border-gray-700/30 hover:bg-[#2D3240] hover:border-purple-500"
            }`}
            whileHover={currentPage !== totalPages ? { scale: 1.05 } : {}}
            whileTap={currentPage !== totalPages ? { scale: 0.95 } : {}}
          >
            <span className="hidden sm:inline">Next</span>
            <ChevronRight className="w-4 h-4" />
          </motion.button>
        </div>
      )}

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
});

Projects.displayName = "Projects";

export default Projects;
