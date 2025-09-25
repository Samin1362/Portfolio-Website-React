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
    link: "https://scontent.fdac138-2.fna.fbcdn.net/v/t39.30808-6/548026692_1209413641233227_2816913180618712004_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGD19iEiJmUBj46qKVcS2KfOSbx8w715eQ5JvHzDvXl5On0s-zwDCrcc4hBqiLQ47P9mjEbMpgSpMaj5e9epnkj&_nc_ohc=_Rfph1dyVlYQ7kNvwFl9RaX&_nc_oc=Adnqfkb022yrg57nM4jpZBLKHbKb4VplfKLnQhd9eK2o4Rq0Maq7P5SgR4fkkvMp4N8&_nc_zt=23&_nc_ht=scontent.fdac138-2.fna&_nc_gid=y8Xx7MSBfatCpVWIxXYNjQ&oh=00_AfZNTl0g_SyYGKG8G4TPDAt-RB5nFjho-mWIycPVxmGYbQ&oe=68D5240A",
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
    cardImage:
      "https://scontent.fdac138-1.fna.fbcdn.net/v/t39.30808-6/549924440_1212117024296222_9201450450104943182_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeG4beYyEv7kMQRDp7T-L5ibQz4ex6QHbelDPh7HpAdt6bzvIIEZznBmFA5E7u79g2HTPTLcR9YYyT8O-E0qvBzB&_nc_ohc=qsnkb7uZufcQ7kNvwG4DD8l&_nc_oc=AdlPjtOFpjKqmoud_ZcvGbEo7JwA2EpZdCS7CnTxzYo_HWM5TOKC9Wz8o_kgzgdytZI&_nc_zt=23&_nc_ht=scontent.fdac138-1.fna&_nc_gid=JjrT1Jn2JHh1d1jlvEbTdQ&oh=00_Afazmrd6Xduq5xK5AMv0VVTyOuBAZvT0_HDJ4_K1ueNVtA&oe=68D5439D",
    modalImage:
      "https://i.postimg.cc/6QgHBqxV/temp-Imagef09li-U.avif",
    category: "hackathon",
    status: "Completed",
    achievements: ["Participation Award", "Featured in Tech Newsletter", "Top 10 out of 80 teams"],
    link: "https://i.postimg.cc/Hs6VJ7vg/Gmail-Thank-You-for-Your-Participation-in-BUP-CSE-Tech-Carnival-Hackathon-2025.png",
  },
];

// EventCard Component
const EventCard = ({ event, onClick }) => {
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
        glareOpacity={0.2}
        glareAngle={-30}
        glareSize={200}
        transitionDuration={600}
        playOnce={false}
        width="100%"
        height="auto"
        background="transparent"
        borderRadius="12px"
        className="cursor-pointer"
      >
        <div
          onClick={() => onClick(event)}
          className={`bg-[#1C1C21] border-2 ${
            isUpcoming ? "border-blue-500" : "border-gray-600"
          } rounded-lg p-4 hover:bg-[#2D3240] transition-all duration-300 transform hover:scale-105`}
        >
          {/* Event Image */}
          <div className="relative overflow-hidden rounded-lg mb-4">
            <img
              src={event.cardImage}
              alt={event.title}
              className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
            />
            <div
              className={`absolute top-2 right-2 px-2 py-1 rounded-full text-xs font-semibold ${
                isUpcoming
                  ? "bg-blue-500 text-white"
                  : "bg-green-500 text-white"
              }`}
            >
              {event.status}
            </div>
            <div className="absolute bottom-2 left-2 bg-black bg-opacity-70 px-2 py-1 rounded text-xs text-white">
              {event.category}
            </div>
          </div>

          {/* Event Details */}
          <div className="space-y-2">
            <h3 className="text-lg font-bold text-white line-clamp-2">
              {event.title}
            </h3>

            <div className="flex items-center gap-2 text-[#D9ECFF] text-sm">
              <Calendar size={14} />
              <span>{event.date}</span>
            </div>

            <div className="flex items-center gap-2 text-[#D9ECFF] text-sm">
              <MapPin size={14} />
              <span>{event.location}</span>
            </div>

            <div className="flex items-center gap-2 text-[#D9ECFF] text-sm">
              <Clock size={14} />
              <span>{event.time}</span>
            </div>

            <p className="text-gray-300 text-sm line-clamp-2 mt-2">
              {event.shortDescription}
            </p>

            <div className="mt-3 px-3 py-1 bg-[#282732] rounded-full text-xs text-[#D9ECFF] w-fit">
              {event.role}
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
          Events & Speaking Engagements (Click to View)
        </h1>
        <p className="text-[#D9ECFF] mt-2 max-w-2xl mx-auto">
          Conferences, workshops, and symposiums where I've shared knowledge and
          showcased innovations
        </p>
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sampleEvents.map((event) => (
          <EventCard key={event.id} event={event} onClick={handleEventClick} />
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
