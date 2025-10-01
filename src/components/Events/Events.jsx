import React, { useState } from "react";
import { Calendar, MapPin, Clock, X, CheckCircle } from "lucide-react";
import { FaCalendarAlt } from "react-icons/fa";
import AnimatedContent from "../AnimatedContent/AnimatedContent";
import GlareHover from "../GlareHover/GlareHover";
import ShinyText from "../ShinyText/ShinyText";

// Sample event data - easy to replace later
const sampleEvents = [
  {
    id: 1,
    title: "Meraki Nexus: Where Creativity Meets Intelligence",
    date: "September 19, 2025",
    time: "8:00 AM - 6:30 PM",
    location: "St. Joseph Higher Secondary School, Dhaka, Bangladesh",
    role: "Project Lead",
    teamName: "Team Meraki Nexus",
    shortDescription:
      "Where art meets AI — evaluating, curating, and preserving creativity with intelligence.",
    fullDescription:
      "Meraki Nexus is an AI-powered platform that blends art, creativity, and technology to evaluate, curate, and preserve the true value of artwork. By analyzing visual features and leveraging Web3 for decentralized collection, it empowers artists and audiences to connect through meaningful, data-driven insights.",
    cardImage: "https://i.postimg.cc/nrGgFTGY/temp-Image-J97-AVT.avif",
    modalImage: "https://i.postimg.cc/ZRnYGBPq/temp-Image1-Wq-YSE.avif",
    category: "hackathon",
    status: "Completed",
    achievements: ["Participation Award", "Featured in Tech Newsletter"],
    link: "https://i.postimg.cc/zBKLNGYd/temp-Image3-AWKDJ.avif",
  },
  {
    id: 2,
    title: "BizPilot: AI Co-Pilot for Entrepreneurs",
    date: "September 24, 2025",
    time: "9:00 AM - 3:00 PM",
    location: "Bangladesh University of Professionals (BUP), Dhaka, Bangladesh",
    role: "Project Lead",
    teamName: "Team Art Nexus",
    shortDescription:
      "AI-powered assistant that helps entrepreneurs turn ideas into businesses with smart strategies, automation, and growth optimization.",
    fullDescription:
      "BizPilot is an AI-powered web application that empowers entrepreneurs to transform raw ideas into sustainable businesses by providing end-to-end support—from ideation and go-to-market strategies to supply chain optimization, predictive production forecasting, and adaptive growth scaling. Acting as a virtual business consultant, BizPilot delivers personalized step-by-step guidance, real-time simulations, and intelligent automation to help small businesses thrive. Premium features unlock enhanced AI models, in-depth analytics, and autonomous workflows, making BizPilot a powerful co-pilot for every stage of entrepreneurial growth.",
    cardImage: "https://i.postimg.cc/66hV9GQc/temp-Image2a65k-Y.avif",
    modalImage: "https://i.postimg.cc/6QgHBqxV/temp-Imagef09li-U.avif",
    category: "hackathon",
    status: "Completed",
    achievements: [
      "Participation Award",
      "Featured in Tech Newsletter",
      "Top 10 out of 80 teams",
    ],
    link: "https://i.postimg.cc/Hs6VJ7vg/Gmail-Thank-You-for-Your-Participation-in-BUP-CSE-Tech-Carnival-Hackathon-2025.png",
  },
  {
    id: 3,
    title: "TypeRacer: Competitive Typing Challenge",
    date: "Ongoing",
    time: "Anytime",
    location: "Online",
    role: "Participant",
    teamName: "Solo",
    shortDescription:
      "Competitive typing game that measures speed and accuracy in real-time races against global players.",
    fullDescription:
      "TypeRacer is an online multiplayer typing competition where players race by typing passages of text as quickly and accurately as possible. It provides a fun yet challenging environment to practice typing, improve speed, and compete against friends or global opponents. With detailed performance statistics and progress tracking, TypeRacer helps users enhance their typing proficiency while engaging in a dynamic and competitive community.",
    cardImage: "https://i.postimg.cc/nLrVnG6m/temp-Image-IYV2-Qt.avif",
    modalImage: "https://data.typeracer.com/misc/badge?user=samin1362",
    category: "personal-achievement",
    status: "Active",
    achievements: [
      "Consistent practice and improvement",
      "Global multiplayer participation",
      "Typing speed and accuracy milestones",
    ],
    link: "https://data.typeracer.com/pit/profile?user=samin1362&ref=badge",
  },
];

// EventCard Component
const EventCard = ({ event, handleEventClick }) => {
  const isUpcoming = event.status === "Upcoming";

  return (
    <AnimatedContent
      distance={50}
      direction="vertical"
      duration={0.8}
      ease="power2.out"
      threshold={0.1}
    >
      <GlareHover
        glareColor="#ffffff"
        glareOpacity={0.15}
        glareAngle={-30}
        glareSize={300}
        transitionDuration={800}
        playOnce={false}
        width="100%"
        height="auto"
        background="transparent"
        borderRadius="16px"
        className="cursor-pointer h-full"
      >
        <div className="relative group h-full">
          {/* Background gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-blue-500/5 to-cyan-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          {/* Main card container */}
          <div
            className={`relative bg-gradient-to-br from-[#1C1C21] via-[#1E1E26] to-[#1A1A20] border-2 ${
              isUpcoming
                ? "border-blue-500/50 shadow-blue-500/20"
                : "border-gray-600/50 shadow-gray-500/10"
            } rounded-2xl p-6 hover:border-opacity-80 transition-all duration-500 transform hover:scale-[1.02] hover:-translate-y-2 shadow-2xl hover:shadow-3xl backdrop-blur-sm h-full flex flex-col`}
          >
            {/* Decorative corner elements */}
            <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
            <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-cyan-500/20 to-blue-500/20 rounded-2xl blur-lg opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>

            {/* Event Image */}
            <div className="relative overflow-hidden rounded-xl mb-6 shadow-lg">
              <img
                src={event.cardImage}
                alt={event.title}
                className="w-full h-52 object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
              />

              {/* Image overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Status badge */}
              <div
                className={`absolute top-3 right-3 px-3 py-1.5 rounded-full text-xs font-bold backdrop-blur-md border ${
                  isUpcoming
                    ? "bg-blue-500/90 text-white border-blue-400/50 shadow-blue-500/30"
                    : "bg-green-500/90 text-white border-green-400/50 shadow-green-500/30"
                } shadow-lg`}
              >
                {event.status}
              </div>

              {/* Category badge */}
              <div className="absolute bottom-3 left-3 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-full text-xs text-white font-medium border border-white/20">
                {event.category}
              </div>
            </div>

            {/* Event Details */}
            <div className="space-y-4 flex-grow">
              <h3 className="text-xl font-bold text-white line-clamp-2 group-hover:text-blue-100 transition-colors duration-300">
                {event.title}
              </h3>

              {/* Event info with enhanced styling */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-[#D9ECFF] text-sm">
                  <div className="p-1.5 bg-blue-500/20 rounded-lg">
                    <Calendar size={14} className="text-blue-400" />
                  </div>
                  <span className="font-medium">{event.date}</span>
                </div>

                <div className="flex items-center gap-3 text-[#D9ECFF] text-sm">
                  <div className="p-1.5 bg-red-500/20 rounded-lg">
                    <MapPin size={14} className="text-red-400" />
                  </div>
                  <span className="font-medium line-clamp-1">
                    {event.location}
                  </span>
                </div>

                <div className="flex items-center gap-3 text-[#D9ECFF] text-sm">
                  <div className="p-1.5 bg-green-500/20 rounded-lg">
                    <Clock size={14} className="text-green-400" />
                  </div>
                  <span className="font-medium">{event.time}</span>
                </div>
              </div>

              <p className="text-gray-300 text-sm line-clamp-3 leading-relaxed">
                {event.shortDescription}
              </p>

              {/* Role badge */}
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#282732] to-[#2A2A35] rounded-full text-sm text-[#D9ECFF] font-medium border border-gray-600/30">
                {event.role}
              </div>
            </div>

            {/* View Details Button - positioned at bottom */}
            <div className="mt-6 pt-4 border-t border-gray-700/50">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleEventClick(event);
                }}
                className="w-full bg-gradient-to-r from-[#EBF3FA] to-[#D6E8F5] hover:from-[#D6E8F5] hover:to-[#C1D9F0] text-black font-semibold px-6 py-3.5 rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg active:scale-[0.98] flex items-center justify-center gap-2 group/btn"
              >
                <ShinyText
                  text="View Details"
                  disabled={false}
                  speed={3}
                  size={14}
                  textColor="black"
                />
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </GlareHover>
    </AnimatedContent>
  );
};

// EventModal Component
const EventModal = ({ event, isOpen, onClose, onShowConfirmation }) => {
  if (!isOpen || !event) return null;

  const isUpcoming = event.status === "Upcoming";

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
      <div className="bg-[#1C1C21] border-2 border-gray-600 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Modal Header */}
        <div className="relative">
          <img
            src={event.modalImage}
            alt={event.title}
            className="w-full h-64 object-cover rounded-t-lg"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-black bg-opacity-70 hover:bg-opacity-90 rounded-full p-2 text-white transition-all"
          >
            <X size={20} />
          </button>
          <div
            className={`absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-semibold ${
              isUpcoming ? "bg-blue-500 text-white" : "bg-green-500 text-white"
            }`}
          >
            {event.status}
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 space-y-6">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">
              {event.title}
            </h2>
            <div className="inline-block px-3 py-1 bg-[#282732] rounded-full text-sm text-[#D9ECFF]">
              {event.category}
            </div>
          </div>

          {/* Event Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-3 text-[#D9ECFF]">
              <Calendar className="text-blue-400" size={20} />
              <div>
                <p className="text-sm text-gray-400">Date</p>
                <p className="font-semibold">{event.date}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 text-[#D9ECFF]">
              <Clock className="text-green-400" size={20} />
              <div>
                <p className="text-sm text-gray-400">Time</p>
                <p className="font-semibold">{event.time}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 text-[#D9ECFF]">
              <MapPin className="text-red-400" size={20} />
              <div>
                <p className="text-sm text-gray-400">Location</p>
                <p className="font-semibold">{event.location}</p>
              </div>
            </div>
          </div>

          {/* Role and Team */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">My Role</h3>
              <div className="px-4 py-2 bg-[#282732] rounded-lg text-[#D9ECFF] w-fit">
                {event.role}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">Team</h3>
              <div className="px-4 py-2 bg-[#282732] rounded-lg text-[#D9ECFF] w-fit">
                {event.teamName}
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-3">
              Event Details
            </h3>
            <p className="text-gray-300 leading-relaxed">
              {event.fullDescription}
            </p>
          </div>

          {/* Achievements */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-3">
              Key Achievements
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {event.achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-[#D9ECFF]"
                >
                  <CheckCircle className="text-green-400" size={16} />
                  <span className="text-sm">{achievement}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Button */}
          <div className="flex gap-4 pt-4">
            <button
              onClick={() => onShowConfirmation(event)}
              className="bg-[#EBF3FA] hover:bg-opacity-90 px-6 py-3 rounded-lg transition-all flex items-center gap-2"
            >
              <ShinyText
                text={
                  isUpcoming
                    ? "Show Registration Details"
                    : "Show Confirmation Details"
                }
                disabled={false}
                speed={3}
                size={14}
                textColor="black"
              />
            </button>
            <button
              onClick={onClose}
              className="border-2 border-gray-600 hover:border-gray-400 px-6 py-3 rounded-lg text-[#D9ECFF] transition-all"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Events Component
const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEventClick = (event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedEvent(null), 300);
  };

  const handleShowConfirmation = (event) => {
    window.open(event.link, "_blank");
  };

  return (
    <div className="max-w-[1240px] mx-auto mt-[30px] px-4">
      {/* Section Header */}
      <div className="text-center mb-8">
        <div className="w-fit mx-auto py-[6px] px-[20px] flex items-center justify-center bg-[#282732] gap-2 rounded-[16px] mb-4">
          <FaCalendarAlt />
          <h3>My Professional Journey</h3>
        </div>
        <h1 className="text-[30px] md:text-[48px] font-bold">
          Events & Speaking Engagements
        </h1>
        <p className="text-[#D9ECFF] mt-2 max-w-2xl mx-auto">
          Conferences, workshops, and symposiums where I've shared knowledge and
          showcased innovations
        </p>
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 auto-rows-fr">
        {sampleEvents.map((event) => (
          <EventCard
            key={event.id}
            event={event}
            handleEventClick={handleEventClick}
          />
        ))}
      </div>

      {/* Event Modal */}
      <EventModal
        event={selectedEvent}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onShowConfirmation={handleShowConfirmation}
      />
    </div>
  );
};

export default Events;
