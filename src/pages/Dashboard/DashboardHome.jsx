import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import api from "../../utils/api";
import { FiFolder, FiPlus, FiExternalLink } from "react-icons/fi";

const DashboardHome = () => {
  const { user } = useAuth();
  const [stats, setStats] = useState({ total: 0, types: {} });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await api.get("/projects");
        const projects = res.data.projects;
        const types = {};
        projects.forEach((p) => {
          types[p.type] = (types[p.type] || 0) + 1;
        });
        setStats({ total: projects.length, types });
      } catch {
        // silently fail
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, []);

  return (
    <div className="max-w-5xl mx-auto">
      {/* Welcome */}
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-white">
          Welcome back, {user?.displayName || "Admin"}
        </h1>
        <p className="text-gray-400 mt-1">
          Manage your portfolio projects from here.
        </p>
      </div>

      {/* Quick Actions */}
      <div className="flex flex-wrap gap-3 mb-8">
        <Link
          to="/dashboard/projects/add"
          className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#7C3AED] to-[#10B981] text-white font-semibold rounded-lg hover:opacity-90 transition-opacity text-sm"
        >
          <FiPlus className="w-4 h-4" />
          Add Project
        </Link>
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-2.5 bg-[#282732] border border-gray-700/30 text-gray-300 hover:text-white rounded-lg transition-colors text-sm"
        >
          <FiExternalLink className="w-4 h-4" />
          View Portfolio
        </a>
      </div>

      {/* Stats Cards */}
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-[#1a1a2e]/80 border border-gray-700/30 rounded-xl p-6 animate-pulse"
            >
              <div className="h-4 bg-gray-700/30 rounded w-24 mb-3" />
              <div className="h-8 bg-gray-700/30 rounded w-12" />
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Total Projects */}
          <div className="bg-[#1a1a2e]/80 backdrop-blur-sm border border-gray-700/30 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-purple-500/10 rounded-lg">
                <FiFolder className="w-5 h-5 text-purple-400" />
              </div>
              <span className="text-sm text-gray-400">Total Projects</span>
            </div>
            <p className="text-3xl font-bold text-white">{stats.total}</p>
          </div>

          {/* Per Type */}
          {Object.entries(stats.types).map(([type, count]) => (
            <div
              key={type}
              className="bg-[#1a1a2e]/80 backdrop-blur-sm border border-gray-700/30 rounded-xl p-6"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-400">{type}</span>
              </div>
              <p className="text-3xl font-bold text-white">{count}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DashboardHome;
