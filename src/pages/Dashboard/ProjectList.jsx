import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../../utils/api";
import {
  FiPlus,
  FiEdit2,
  FiTrash2,
  FiEye,
  FiEyeOff,
  FiArrowUp,
  FiArrowDown,
  FiExternalLink,
  FiFolder,
  FiSearch,
} from "react-icons/fi";

const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleteId, setDeleteId] = useState(null);
  const [actionLoading, setActionLoading] = useState(null);
  const [search, setSearch] = useState("");

  const fetchProjects = async () => {
    try {
      const res = await api.get("/projects");
      setProjects(res.data.projects || []);
    } catch (err) {
      console.error("Failed to fetch projects:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const toggleVisibility = async (project) => {
    setActionLoading(project.id);
    try {
      await api.put(`/projects/${project.id}`, {
        is_visible: !project.is_visible,
      });
      setProjects((prev) =>
        prev.map((p) =>
          p.id === project.id ? { ...p, is_visible: !p.is_visible } : p
        )
      );
    } catch {
      alert("Failed to update visibility.");
    } finally {
      setActionLoading(null);
    }
  };

  const confirmDelete = async () => {
    if (!deleteId) return;
    setActionLoading(deleteId);
    try {
      await api.delete(`/projects/${deleteId}`);
      setProjects((prev) => prev.filter((p) => p.id !== deleteId));
      setDeleteId(null);
    } catch {
      alert("Failed to delete project.");
    } finally {
      setActionLoading(null);
    }
  };

  const moveProject = async (index, direction) => {
    const newProjects = [...projects];
    const swapIndex = index + direction;
    if (swapIndex < 0 || swapIndex >= newProjects.length) return;

    [newProjects[index], newProjects[swapIndex]] = [
      newProjects[swapIndex],
      newProjects[index],
    ];

    const items = newProjects.map((p, i) => ({ id: p.id, display_order: i }));
    setProjects(newProjects);

    try {
      await api.patch("/projects/reorder", { items });
    } catch {
      fetchProjects();
    }
  };

  const filtered = projects.filter(
    (p) =>
      !search ||
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.type?.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div className="h-7 bg-white/5 rounded w-28 animate-pulse" />
          <div className="h-9 bg-white/5 rounded w-28 animate-pulse" />
        </div>
        <div className="space-y-3">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="bg-[#0f0f1a] border border-white/5 rounded-xl p-4 animate-pulse"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-10 bg-white/5 rounded-lg flex-shrink-0" />
                <div className="flex-1">
                  <div className="h-4 bg-white/5 rounded w-40 mb-2" />
                  <div className="h-3 bg-white/5 rounded w-24" />
                </div>
                <div className="flex gap-1">
                  {[1, 2, 3].map((j) => (
                    <div key={j} className="w-8 h-8 bg-white/5 rounded-lg" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-xl md:text-2xl font-bold text-white">Projects</h1>
          <p className="text-gray-500 text-sm mt-0.5">
            {projects.length} project{projects.length !== 1 && "s"} total
          </p>
        </div>
        <Link
          to="/dashboard/projects/add"
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-[#7C3AED] to-[#10B981] text-white font-semibold rounded-lg hover:opacity-90 transition-opacity text-sm self-start sm:self-auto"
        >
          <FiPlus className="w-4 h-4" />
          Add Project
        </Link>
      </div>

      {/* Search */}
      {projects.length > 0 && (
        <div className="relative mb-4">
          <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search projects..."
            className="w-full pl-9 pr-4 py-2.5 bg-[#0f0f1a] border border-white/5 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 text-sm transition-colors"
          />
        </div>
      )}

      {/* Empty state */}
      {projects.length === 0 ? (
        <div className="bg-[#0f0f1a] border border-white/5 rounded-2xl p-12 text-center">
          <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mx-auto mb-4">
            <FiFolder className="w-6 h-6 text-gray-500" />
          </div>
          <p className="text-white font-semibold mb-1">No projects yet</p>
          <p className="text-gray-500 text-sm mb-6">
            Add your first project to get started.
          </p>
          <Link
            to="/dashboard/projects/add"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#7C3AED] to-[#10B981] text-white font-semibold rounded-lg text-sm"
          >
            <FiPlus className="w-4 h-4" />
            Add your first project
          </Link>
        </div>
      ) : filtered.length === 0 ? (
        <div className="bg-[#0f0f1a] border border-white/5 rounded-2xl p-10 text-center">
          <p className="text-gray-400 text-sm">
            No projects match &ldquo;{search}&rdquo;
          </p>
        </div>
      ) : (
        <div className="space-y-2">
          {filtered.map((project, index) => {
            const actualIndex = projects.indexOf(project);
            return (
              <div
                key={project.id}
                className={`group bg-[#0f0f1a] border rounded-xl transition-all duration-200 hover:border-white/10 ${
                  project.is_visible
                    ? "border-white/5"
                    : "border-white/[0.03] opacity-60"
                }`}
              >
                <div className="flex items-center gap-3 p-3 md:p-4">
                  {/* Thumbnail */}
                  <div
                    className="w-12 h-9 md:w-14 md:h-10 rounded-lg overflow-hidden border flex-shrink-0"
                    style={{ borderColor: `${project.border_color}30` }}
                  >
                    {project.images?.[0] ? (
                      <img
                        src={project.images[0]}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-white/5 flex items-center justify-center">
                        <FiFolder className="w-3.5 h-3.5 text-gray-600" />
                      </div>
                    )}
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-1.5 mb-0.5">
                      <h3 className="text-sm font-semibold text-white truncate">
                        {project.title}
                      </h3>
                      <span
                        className="px-1.5 py-0.5 text-[10px] font-medium rounded-md hidden sm:inline-block"
                        style={{
                          backgroundColor: `${project.border_color}15`,
                          color: project.border_color,
                          border: `1px solid ${project.border_color}30`,
                        }}
                      >
                        {project.type}
                      </span>
                      {!project.is_visible && (
                        <span className="px-1.5 py-0.5 text-[10px] font-medium rounded-md bg-yellow-500/10 text-yellow-400 border border-yellow-500/20">
                          Hidden
                        </span>
                      )}
                    </div>
                    <p className="text-gray-500 text-xs truncate">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-0.5 flex-shrink-0">
                    {/* Reorder — hide on mobile */}
                    <button
                      onClick={() => moveProject(actualIndex, -1)}
                      disabled={actualIndex === 0}
                      className="hidden sm:flex p-1.5 text-gray-600 hover:text-white hover:bg-white/5 rounded-lg transition-colors disabled:opacity-20 disabled:cursor-not-allowed"
                      title="Move up"
                    >
                      <FiArrowUp className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => moveProject(actualIndex, 1)}
                      disabled={actualIndex === projects.length - 1}
                      className="hidden sm:flex p-1.5 text-gray-600 hover:text-white hover:bg-white/5 rounded-lg transition-colors disabled:opacity-20 disabled:cursor-not-allowed"
                      title="Move down"
                    >
                      <FiArrowDown className="w-3.5 h-3.5" />
                    </button>

                    <div className="w-px h-5 bg-white/5 mx-1 hidden sm:block" />

                    {/* Visibility */}
                    <button
                      onClick={() => toggleVisibility(project)}
                      disabled={actionLoading === project.id}
                      className={`p-1.5 rounded-lg transition-colors ${
                        project.is_visible
                          ? "text-gray-500 hover:text-white hover:bg-white/5"
                          : "text-yellow-500/60 hover:text-yellow-400 hover:bg-yellow-500/10"
                      }`}
                      title={project.is_visible ? "Hide" : "Show"}
                    >
                      {project.is_visible ? (
                        <FiEye className="w-3.5 h-3.5" />
                      ) : (
                        <FiEyeOff className="w-3.5 h-3.5" />
                      )}
                    </button>

                    {/* Live link */}
                    {project.links?.live && project.links.live !== "#" && (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 text-gray-500 hover:text-sky-400 hover:bg-sky-500/10 rounded-lg transition-colors"
                        title="View live"
                      >
                        <FiExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}

                    {/* Edit */}
                    <Link
                      to={`/dashboard/projects/edit/${project.id}`}
                      className="p-1.5 text-gray-500 hover:text-blue-400 hover:bg-blue-500/10 rounded-lg transition-colors"
                      title="Edit"
                    >
                      <FiEdit2 className="w-3.5 h-3.5" />
                    </Link>

                    {/* Delete */}
                    <button
                      onClick={() => setDeleteId(project.id)}
                      className="p-1.5 text-gray-500 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-colors"
                      title="Delete"
                    >
                      <FiTrash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Mobile reorder bar */}
                <div className="flex sm:hidden border-t border-white/5 px-3 py-1.5 gap-1">
                  <button
                    onClick={() => moveProject(actualIndex, -1)}
                    disabled={actualIndex === 0}
                    className="flex items-center gap-1 px-2 py-1 text-xs text-gray-500 hover:text-white disabled:opacity-20 disabled:cursor-not-allowed rounded transition-colors"
                  >
                    <FiArrowUp className="w-3 h-3" /> Up
                  </button>
                  <button
                    onClick={() => moveProject(actualIndex, 1)}
                    disabled={actualIndex === projects.length - 1}
                    className="flex items-center gap-1 px-2 py-1 text-xs text-gray-500 hover:text-white disabled:opacity-20 disabled:cursor-not-allowed rounded transition-colors"
                  >
                    <FiArrowDown className="w-3 h-3" /> Down
                  </button>
                  <span className="ml-auto text-xs text-gray-600 flex items-center">
                    #{actualIndex + 1}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Delete Modal */}
      {deleteId && (
        <div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/70 backdrop-blur-sm p-4"
          onClick={() => setDeleteId(null)}
        >
          <div
            className="bg-[#0f0f1a] border border-white/10 rounded-2xl p-6 w-full max-w-sm"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-11 h-11 rounded-full bg-red-500/10 flex items-center justify-center mx-auto mb-4">
              <FiTrash2 className="w-5 h-5 text-red-400" />
            </div>
            <h3 className="text-base font-bold text-white text-center mb-1">
              Delete Project
            </h3>
            <p className="text-gray-400 text-sm text-center mb-6">
              This action cannot be undone.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setDeleteId(null)}
                className="flex-1 py-2.5 bg-white/5 text-gray-300 rounded-lg hover:bg-white/10 transition-colors text-sm font-medium"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                disabled={actionLoading === deleteId}
                className="flex-1 py-2.5 bg-red-500/20 text-red-400 border border-red-500/30 rounded-lg hover:bg-red-500/30 transition-colors text-sm font-medium disabled:opacity-50"
              >
                {actionLoading === deleteId ? "Deleting..." : "Delete"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectList;
