import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import api from "../../utils/api";
import {
  FiFolder,
  FiPlus,
  FiExternalLink,
  FiEye,
  FiTrendingUp,
  FiArrowRight,
} from "react-icons/fi";

const getGreeting = () => {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning";
  if (hour < 17) return "Good afternoon";
  return "Good evening";
};

const statColors = [
  { bg: "from-violet-500/20 to-purple-500/10", icon: "bg-violet-500/20 text-violet-400", border: "border-violet-500/20" },
  { bg: "from-emerald-500/20 to-teal-500/10", icon: "bg-emerald-500/20 text-emerald-400", border: "border-emerald-500/20" },
  { bg: "from-sky-500/20 to-blue-500/10", icon: "bg-sky-500/20 text-sky-400", border: "border-sky-500/20" },
  { bg: "from-amber-500/20 to-orange-500/10", icon: "bg-amber-500/20 text-amber-400", border: "border-amber-500/20" },
  { bg: "from-rose-500/20 to-pink-500/10", icon: "bg-rose-500/20 text-rose-400", border: "border-rose-500/20" },
  { bg: "from-cyan-500/20 to-teal-500/10", icon: "bg-cyan-500/20 text-cyan-400", border: "border-cyan-500/20" },
];

const DashboardHome = () => {
  const { user } = useAuth();
  const [stats, setStats] = useState({ total: 0, visible: 0, types: {} });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await api.get("/projects");
        const projects = res.data.projects;
        const types = {};
        let visible = 0;
        projects.forEach((p) => {
          types[p.type] = (types[p.type] || 0) + 1;
          if (p.is_visible) visible++;
        });
        setStats({ total: projects.length, visible, types });
      } catch {
        // silently fail
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, []);

  const firstName = user?.displayName?.split(" ")[0] || "Admin";

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Welcome Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#7C3AED]/20 via-[#0f0f1a] to-[#10B981]/10 border border-white/5 p-6 md:p-8">
        <div className="relative z-10">
          <p className="text-sm text-gray-400 mb-1">{getGreeting()},</p>
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">
            {firstName} 👋
          </h1>
          <p className="text-gray-400 text-sm max-w-md">
            Manage your portfolio projects, control visibility, and keep your
            work up to date.
          </p>
          <div className="flex flex-wrap gap-3 mt-5">
            <Link
              to="/dashboard/projects/add"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-[#7C3AED] to-[#10B981] text-white font-semibold rounded-lg hover:opacity-90 transition-opacity text-sm"
            >
              <FiPlus className="w-4 h-4" />
              Add Project
            </Link>
            <Link
              to="/dashboard/projects"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors text-sm"
            >
              <FiFolder className="w-4 h-4" />
              Manage Projects
            </Link>
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors text-sm"
            >
              <FiExternalLink className="w-4 h-4" />
              View Portfolio
            </a>
          </div>
        </div>
        {/* Decorative blobs */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#7C3AED]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-48 h-48 bg-[#10B981]/10 rounded-full blur-3xl translate-y-1/2 pointer-events-none" />
      </div>

      {/* Stats */}
      <div>
        <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
          Overview
        </h2>
        {loading ? (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="bg-[#0f0f1a] border border-white/5 rounded-xl p-4 animate-pulse"
              >
                <div className="h-3 bg-white/5 rounded w-20 mb-3" />
                <div className="h-7 bg-white/5 rounded w-10" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {/* Total */}
            <div className={`bg-gradient-to-br ${statColors[0].bg} border ${statColors[0].border} rounded-xl p-4`}>
              <div className={`inline-flex p-2 rounded-lg ${statColors[0].icon} mb-3`}>
                <FiFolder className="w-4 h-4" />
              </div>
              <p className="text-2xl font-bold text-white">{stats.total}</p>
              <p className="text-xs text-gray-400 mt-0.5">Total Projects</p>
            </div>

            {/* Visible */}
            <div className={`bg-gradient-to-br ${statColors[1].bg} border ${statColors[1].border} rounded-xl p-4`}>
              <div className={`inline-flex p-2 rounded-lg ${statColors[1].icon} mb-3`}>
                <FiEye className="w-4 h-4" />
              </div>
              <p className="text-2xl font-bold text-white">{stats.visible}</p>
              <p className="text-xs text-gray-400 mt-0.5">Visible</p>
            </div>

            {/* Hidden */}
            <div className={`bg-gradient-to-br ${statColors[2].bg} border ${statColors[2].border} rounded-xl p-4`}>
              <div className={`inline-flex p-2 rounded-lg ${statColors[2].icon} mb-3`}>
                <FiTrendingUp className="w-4 h-4" />
              </div>
              <p className="text-2xl font-bold text-white">
                {stats.total - stats.visible}
              </p>
              <p className="text-xs text-gray-400 mt-0.5">Hidden</p>
            </div>

            {/* Types count */}
            <div className={`bg-gradient-to-br ${statColors[3].bg} border ${statColors[3].border} rounded-xl p-4`}>
              <div className={`inline-flex p-2 rounded-lg ${statColors[3].icon} mb-3`}>
                <FiFolder className="w-4 h-4" />
              </div>
              <p className="text-2xl font-bold text-white">
                {Object.keys(stats.types).length}
              </p>
              <p className="text-xs text-gray-400 mt-0.5">Categories</p>
            </div>
          </div>
        )}
      </div>

      {/* By Type */}
      {!loading && Object.keys(stats.types).length > 0 && (
        <div>
          <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
            By Category
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {Object.entries(stats.types).map(([type, count], i) => {
              const color = statColors[(i + 4) % statColors.length];
              return (
                <div
                  key={type}
                  className={`bg-gradient-to-br ${color.bg} border ${color.border} rounded-xl p-4`}
                >
                  <p className="text-xl font-bold text-white">{count}</p>
                  <p className="text-xs text-gray-400 mt-0.5 truncate">{type}</p>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Quick Action */}
      <div>
        <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
          Quick Actions
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link
            to="/dashboard/projects"
            className="group flex items-center justify-between p-4 bg-[#0f0f1a] border border-white/5 rounded-xl hover:border-purple-500/30 hover:bg-[#7C3AED]/5 transition-all duration-200"
          >
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-purple-500/10 text-purple-400">
                <FiFolder className="w-4 h-4" />
              </div>
              <div>
                <p className="text-sm font-medium text-white">Manage Projects</p>
                <p className="text-xs text-gray-500">Edit, reorder, or hide projects</p>
              </div>
            </div>
            <FiArrowRight className="w-4 h-4 text-gray-600 group-hover:text-purple-400 group-hover:translate-x-0.5 transition-all" />
          </Link>

          <Link
            to="/dashboard/projects/add"
            className="group flex items-center justify-between p-4 bg-[#0f0f1a] border border-white/5 rounded-xl hover:border-emerald-500/30 hover:bg-[#10B981]/5 transition-all duration-200"
          >
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400">
                <FiPlus className="w-4 h-4" />
              </div>
              <div>
                <p className="text-sm font-medium text-white">Add New Project</p>
                <p className="text-xs text-gray-500">Showcase your latest work</p>
              </div>
            </div>
            <FiArrowRight className="w-4 h-4 text-gray-600 group-hover:text-emerald-400 group-hover:translate-x-0.5 transition-all" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
