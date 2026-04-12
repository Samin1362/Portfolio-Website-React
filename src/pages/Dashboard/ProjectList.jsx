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
} from "react-icons/fi";

const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleteId, setDeleteId] = useState(null);
  const [actionLoading, setActionLoading] = useState(null);

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

  // Toggle visibility
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

  // Delete project
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

  // Reorder
  const moveProject = async (index, direction) => {
    const newProjects = [...projects];
    const swapIndex = index + direction;
    if (swapIndex < 0 || swapIndex >= newProjects.length) return;

    [newProjects[index], newProjects[swapIndex]] = [
      newProjects[swapIndex],
      newProjects[index],
    ];

    const items = newProjects.map((p, i) => ({
      id: p.id,
      display_order: i,
    }));

    setProjects(newProjects);

    try {
      await api.patch("/projects/reorder", { items });
    } catch {
      // revert on failure
      fetchProjects();
    }
  };

  if (loading) {
    return (
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold text-white">Projects</h1>
        </div>
        <div className="space-y-3">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="bg-[#1a1a2e]/80 border border-gray-700/30 rounded-xl p-5 animate-pulse"
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-12 bg-gray-700/30 rounded-lg" />
                <div className="flex-1">
                  <div className="h-4 bg-gray-700/30 rounded w-48 mb-2" />
                  <div className="h-3 bg-gray-700/30 rounded w-24" />
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
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-white">Projects</h1>
          <p className="text-gray-400 text-sm mt-1">
            {projects.length} project{projects.length !== 1 && "s"}
          </p>
        </div>
        <Link
          to="/dashboard/projects/add"
          className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-[#7C3AED] to-[#10B981] text-white font-semibold rounded-lg hover:opacity-90 transition-opacity text-sm"
        >
          <FiPlus className="w-4 h-4" />
          Add Project
        </Link>
      </div>

      {/* Project List */}
      {projects.length === 0 ? (
        <div className="bg-[#1a1a2e]/80 border border-gray-700/30 rounded-xl p-12 text-center">
          <p className="text-gray-400 mb-4">No projects yet.</p>
          <Link
            to="/dashboard/projects/add"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#7C3AED] to-[#10B981] text-white font-semibold rounded-lg text-sm"
          >
            <FiPlus className="w-4 h-4" />
            Add your first project
          </Link>
        </div>
      ) : (
        <div className="space-y-3">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`bg-[#1a1a2e]/80 backdrop-blur-sm border rounded-xl p-4 md:p-5 transition-all duration-200 ${
                project.is_visible
                  ? "border-gray-700/30"
                  : "border-gray-700/20 opacity-60"
              }`}
            >
              <div className="flex items-center gap-4">
                {/* Thumbnail */}
                <div
                  className="w-16 h-12 rounded-lg overflow-hidden border flex-shrink-0 hidden sm:block"
                  style={{ borderColor: `${project.border_color}40` }}
                >
                  {project.images?.[0] ? (
                    <img
                      src={project.images[0]}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                      <FiFolder className="w-4 h-4 text-gray-600" />
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-white font-medium truncate">
                      {project.title}
                    </h3>
                    <span
                      className="px-2 py-0.5 text-xs font-medium rounded hidden sm:inline-block"
                      style={{
                        backgroundColor: `${project.border_color}20`,
                        color: project.border_color,
                        border: `1px solid ${project.border_color}40`,
                      }}
                    >
                      {project.type}
                    </span>
                    {!project.is_visible && (
                      <span className="px-2 py-0.5 text-xs font-medium rounded bg-yellow-500/10 text-yellow-400 border border-yellow-500/30">
                        Hidden
                      </span>
                    )}
                  </div>
                  <p className="text-gray-500 text-xs truncate">
                    {project.subtitle}
                  </p>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-1 flex-shrink-0">
                  {/* Reorder */}
                  <button
                    onClick={() => moveProject(index, -1)}
                    disabled={index === 0}
                    className="p-2 text-gray-500 hover:text-white hover:bg-[#282732] rounded-lg transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                    title="Move up"
                  >
                    <FiArrowUp className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => moveProject(index, 1)}
                    disabled={index === projects.length - 1}
                    className="p-2 text-gray-500 hover:text-white hover:bg-[#282732] rounded-lg transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                    title="Move down"
                  >
                    <FiArrowDown className="w-4 h-4" />
                  </button>

                  {/* Visibility */}
                  <button
                    onClick={() => toggleVisibility(project)}
                    disabled={actionLoading === project.id}
                    className="p-2 text-gray-500 hover:text-white hover:bg-[#282732] rounded-lg transition-colors"
                    title={project.is_visible ? "Hide" : "Show"}
                  >
                    {project.is_visible ? (
                      <FiEye className="w-4 h-4" />
                    ) : (
                      <FiEyeOff className="w-4 h-4" />
                    )}
                  </button>

                  {/* Live link */}
                  {project.links?.live && project.links.live !== "#" && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-gray-500 hover:text-white hover:bg-[#282732] rounded-lg transition-colors"
                      title="View live"
                    >
                      <FiExternalLink className="w-4 h-4" />
                    </a>
                  )}

                  {/* Edit */}
                  <Link
                    to={`/dashboard/projects/edit/${project.id}`}
                    className="p-2 text-gray-500 hover:text-blue-400 hover:bg-blue-500/10 rounded-lg transition-colors"
                    title="Edit"
                  >
                    <FiEdit2 className="w-4 h-4" />
                  </Link>

                  {/* Delete */}
                  <button
                    onClick={() => setDeleteId(project.id)}
                    className="p-2 text-gray-500 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-colors"
                    title="Delete"
                  >
                    <FiTrash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {deleteId && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
          onClick={() => setDeleteId(null)}
        >
          <div
            className="bg-[#1a1a2e] border border-gray-700/30 rounded-xl p-6 max-w-sm w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-lg font-bold text-white mb-2">
              Delete Project
            </h3>
            <p className="text-gray-400 text-sm mb-6">
              Are you sure you want to delete this project? This action cannot
              be undone.
            </p>
            <div className="flex gap-3 justify-end">
              <button
                onClick={() => setDeleteId(null)}
                className="px-4 py-2 bg-[#282732] text-gray-300 rounded-lg hover:bg-[#2D3240] transition-colors text-sm"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                disabled={actionLoading === deleteId}
                className="px-4 py-2 bg-red-500/20 text-red-400 border border-red-500/30 rounded-lg hover:bg-red-500/30 transition-colors text-sm disabled:opacity-50"
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
