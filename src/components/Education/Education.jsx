import React, { forwardRef } from "react";
import { MdCastForEducation } from "react-icons/md";
import { GraduationCap, MapPin, Calendar, Award, Brain } from "lucide-react";
import FadeContent from "../FadeContent/FadeContent";

const Education = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="max-w-[1240px] mx-auto mt-[10px] px-4 md:px-8 py-8">
      {/* Heading */}
      <div className="mb-8">
        <div className="w-fit mx-auto py-[6px] px-[20px] flex items-center justify-center bg-[#282732] gap-2 rounded-[16px] mb-3">
          <div>
            <MdCastForEducation className="text-cyan-400" />
          </div>
          <h3 className="text-[#D9ECFF]">My Academic Journey</h3>
        </div>
        <h1 className="text-[30px] md:text-[48px] text-center font-bold bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
          Education
        </h1>
      </div>

      {/* Content */}
      <FadeContent
        blur={true}
        duration={1000}
        easing="ease-out"
        initialOpacity={0}
      >
        {/* Main Education Card */}
        <div className="relative group">
          {/* Decorative background elements */}
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 via-blue-400/20 to-cyan-300/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>

          {/* Card */}
          <div className="relative bg-gradient-to-br from-[#1d1c22]/90 via-[#1e1e26]/90 to-[#1a1a20]/90 backdrop-blur-xl border border-gray-700/50 group-hover:border-cyan-400/50 rounded-2xl p-6 md:p-8 shadow-2xl transition-all duration-500 overflow-hidden">
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-blue-400/5 to-cyan-300/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Content */}
            <div className="relative z-10">
              {/* Header Section - Horizontal Layout */}
              <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6 mb-6">
                {/* Left: Degree Info */}
                <div className="flex items-center gap-4 flex-1">
                  <div className="p-3 bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-xl shadow-lg flex-shrink-0">
                    <GraduationCap size={28} className="text-white" />
                  </div>
                  <div className="text-center md:text-left">
                    <h2 className="text-xl md:text-2xl font-bold text-white">
                      Bachelor of Science
                    </h2>
                    <p className="text-cyan-300 font-medium text-sm md:text-base">Computer Science & Engineering</p>
                    <p className="text-gray-400 text-sm mt-1">Major in Machine Learning</p>
                  </div>
                </div>

                {/* Right: CGPA Badge */}
                <div className="flex items-center gap-3 px-5 py-3 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-xl border border-purple-400/30 flex-shrink-0">
                  <Award size={24} className="text-purple-400" />
                  <div className="text-center">
                    <p className="text-gray-400 text-xs mb-0.5">CGPA</p>
                    <p className="text-white font-bold text-xl">3.11</p>
                  </div>
                </div>
              </div>

              {/* Details Grid - Compact */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* University */}
                <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-indigo-500/10 to-blue-400/10 rounded-xl border border-indigo-400/20 hover:border-indigo-400/40 transition-all duration-300">
                  <div className="p-2 bg-indigo-500/20 rounded-lg flex-shrink-0">
                    <GraduationCap size={18} className="text-indigo-400" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-gray-400 text-xs mb-0.5">University</p>
                    <p className="text-white font-semibold text-sm truncate">North South University</p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-blue-500/10 to-cyan-400/10 rounded-xl border border-blue-400/20 hover:border-blue-400/40 transition-all duration-300">
                  <div className="p-2 bg-blue-500/20 rounded-lg flex-shrink-0">
                    <MapPin size={18} className="text-blue-400" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-gray-400 text-xs mb-0.5">Location</p>
                    <p className="text-white font-semibold text-sm">Dhaka, Bangladesh</p>
                  </div>
                </div>

                {/* Duration */}
                <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-cyan-500/10 to-teal-400/10 rounded-xl border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300">
                  <div className="p-2 bg-cyan-500/20 rounded-lg flex-shrink-0">
                    <Calendar size={18} className="text-cyan-400" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-gray-400 text-xs mb-0.5">Duration</p>
                    <p className="text-white font-semibold text-sm">2020 - 2025</p>
                  </div>
                </div>
              </div>

              {/* University Link */}
              <div className="mt-6 pt-5 border-t border-gray-700/50 text-center">
                <a
                  href="https://www.northsouth.edu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-indigo-500 to-cyan-400 hover:from-indigo-600 hover:to-cyan-500 text-white font-semibold text-sm rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  <GraduationCap size={18} />
                  <span>Visit University Website</span>
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </FadeContent>
    </div>
  );
});

Education.displayName = "Education";

export default Education;
